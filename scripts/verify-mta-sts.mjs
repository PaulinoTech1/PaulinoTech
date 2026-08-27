/**
 * Pre-deployment check for MTA-STS.
 *
 * `mode: enforce` tells sending servers to REFUSE delivery when the TLS
 * connection to your MX hosts cannot be validated against this policy. If the
 * policy is unreachable, stale, or disagrees with your real MX records, mail to
 * the domain bounces or defers. Run this before deploying a policy change.
 *
 *   node scripts/verify-mta-sts.mjs [domain]
 *
 * Exits non-zero if anything would make enforce unsafe.
 */

import { readFile } from "node:fs/promises"
import { resolveMx, resolveTxt } from "node:dns/promises"

const domain = (process.argv[2] ?? "paulinotech.com").replace(/^https?:\/\//, "").replace(/\/.*$/, "")
const policyHost = `mta-sts.${domain}`
const policyUrl = `https://${policyHost}/.well-known/mta-sts.txt`
const localPolicyPath = "public/.well-known/mta-sts.txt"
const TIMEOUT_MS = 20_000

const results = []
const record = (status, label, detail = "") => results.push({ status, label, detail })

/**
 * Some environments (CI runners, hardened shells, containers) block outbound
 * port 53, which makes the native resolver fail in a way that looks identical
 * to "the record does not exist". Fall back to DNS-over-HTTPS so a blocked
 * resolver never reads as a missing record.
 */
async function resolveViaDoh(name, type) {
  const url = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`
  const response = await fetch(url, {
    headers: { Accept: "application/dns-json" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  })

  if (!response.ok) throw new Error(`DoH lookup failed: HTTP ${response.status}`)

  const body = await response.json()
  return (body.Answer ?? []).filter((answer) => answer.data).map((answer) => answer.data)
}

async function lookupMx(name) {
  try {
    const records = await resolveMx(name)
    return records.sort((a, b) => a.priority - b.priority).map((entry) => entry.exchange)
  } catch {
    // "10 mail.example.com."
    const answers = await resolveViaDoh(name, "MX")
    return answers
      .map((data) => {
        const [priority, ...host] = data.split(/\s+/)
        return { priority: Number(priority), exchange: host.join(" ") }
      })
      .sort((a, b) => a.priority - b.priority)
      .map((entry) => entry.exchange)
  }
}

async function lookupTxt(name) {
  try {
    return (await resolveTxt(name)).map((chunks) => chunks.join(""))
  } catch {
    // DoH returns TXT values wrapped in literal quotes.
    return (await resolveViaDoh(name, "TXT")).map((data) => data.replace(/^"|"$/g, "").replace(/"\s+"/g, ""))
  }
}

function parsePolicy(text) {
  const fields = {}
  const mx = []

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith("#")) continue

    const separator = line.indexOf(":")
    if (separator === -1) continue

    const key = line.slice(0, separator).trim().toLowerCase()
    const value = line.slice(separator + 1).trim()

    if (key === "mx") mx.push(value.toLowerCase())
    else fields[key] = value
  }

  return { ...fields, mx }
}

/** MTA-STS mx entries may be wildcards such as *.example.com */
function mxMatches(pattern, host) {
  if (pattern.startsWith("*.")) return host.endsWith(pattern.slice(1))
  return pattern === host
}

// --- 1. Local policy file ----------------------------------------------------
let localPolicy = null
try {
  const raw = await readFile(localPolicyPath, "utf8")
  localPolicy = parsePolicy(raw)
  record("pass", `Local policy readable (${localPolicyPath})`, `mode: ${localPolicy.mode}`)

  if (localPolicy.version !== "STSv1") {
    record("fail", "Local policy version", `expected STSv1, found ${localPolicy.version ?? "nothing"}`)
  }
  if (!["enforce", "testing", "none"].includes(localPolicy.mode)) {
    record("fail", "Local policy mode", `invalid mode: ${localPolicy.mode}`)
  }
  if (!localPolicy.mx.length) {
    record("fail", "Local policy mx entries", "policy lists no mx hosts")
  }

  const maxAge = Number(localPolicy.max_age)
  if (!Number.isFinite(maxAge) || maxAge <= 0) {
    record("fail", "Local policy max_age", `invalid: ${localPolicy.max_age}`)
  } else if (maxAge < 86_400) {
    record("warn", "Local policy max_age", `${maxAge}s is short; RFC 8461 suggests at least 604800 in production`)
  } else {
    record("pass", "Local policy max_age", `${maxAge}s`)
  }
} catch (error) {
  record("fail", "Local policy readable", error.message)
}

// --- 2. Real MX records ------------------------------------------------------
let mxHosts = []
try {
  const mxRecords = await lookupMx(domain)
  mxHosts = mxRecords.map((exchange) => exchange.toLowerCase().replace(/\.$/, ""))

  if (!mxHosts.length) record("fail", `MX records for ${domain}`, "none published")
  else record("pass", `MX records for ${domain}`, mxHosts.join(", "))
} catch (error) {
  record("fail", `MX records for ${domain}`, error.message)
}

// --- 3. Policy must cover every real MX host ---------------------------------
if (localPolicy?.mx.length && mxHosts.length) {
  const uncovered = mxHosts.filter((host) => !localPolicy.mx.some((pattern) => mxMatches(pattern, host)))
  const unused = localPolicy.mx.filter((pattern) => !mxHosts.some((host) => mxMatches(pattern, host)))

  if (uncovered.length) {
    record("fail", "Policy covers all MX hosts", `missing from policy: ${uncovered.join(", ")} — enforce would break mail`)
  } else {
    record("pass", "Policy covers all MX hosts", `${mxHosts.length} host(s) matched`)
  }

  if (unused.length) {
    record("warn", "Policy lists unused mx entries", `${unused.join(", ")} — not in current MX records`)
  }
}

// --- 4. _mta-sts TXT record --------------------------------------------------
let policyId = null
try {
  const txt = await lookupTxt(`_mta-sts.${domain}`)
  const sts = txt.find((value) => value.toLowerCase().startsWith("v=stsv1"))

  if (!sts) {
    record("fail", `_mta-sts.${domain} TXT`, `no v=STSv1 record (found: ${txt.join(" | ") || "nothing"})`)
  } else {
    policyId = /id=([^;\s]+)/i.exec(sts)?.[1] ?? null
    if (policyId) record("pass", `_mta-sts.${domain} TXT`, `id=${policyId}`)
    else record("fail", `_mta-sts.${domain} TXT`, `record present but has no id value: ${sts}`)
  }
} catch (error) {
  record("fail", `_mta-sts.${domain} TXT`, error.message)
}

// --- 5. TLS-RPT: how failures get reported back to you -----------------------
try {
  const txt = await lookupTxt(`_smtp._tls.${domain}`)
  const rpt = txt.find((value) => value.toLowerCase().startsWith("v=tlsrptv1"))

  if (rpt) record("pass", `_smtp._tls.${domain} TXT (TLS-RPT)`, rpt)
  else record("warn", `_smtp._tls.${domain} TXT (TLS-RPT)`, "not published — you would not hear about enforce failures")
} catch {
  record("warn", `_smtp._tls.${domain} TXT (TLS-RPT)`, "not published — you would not hear about enforce failures")
}

// --- 6. The published policy must actually be fetchable ----------------------
let servedPolicy = null
try {
  const response = await fetch(policyUrl, {
    headers: { Accept: "text/plain", "User-Agent": "PaulinoTech-MtaStsCheck/1.0" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    redirect: "manual",
  })

  if (response.status >= 300 && response.status < 400) {
    // RFC 8461: senders MUST NOT follow redirects when fetching the policy.
    record("fail", `GET ${policyUrl}`, `HTTP ${response.status} redirect — senders will not follow it`)
  } else if (!response.ok) {
    record("fail", `GET ${policyUrl}`, `HTTP ${response.status} — policy is not being served`)
  } else {
    const contentType = response.headers.get("content-type") ?? ""
    const body = await response.text()
    servedPolicy = parsePolicy(body)

    record("pass", `GET ${policyUrl}`, "HTTP 200")

    if (!contentType.toLowerCase().includes("text/plain")) {
      record("fail", "Policy Content-Type", `expected text/plain, got "${contentType}"`)
    } else {
      record("pass", "Policy Content-Type", contentType)
    }

    if (/<html|<!doctype/i.test(body)) {
      record("fail", "Policy body", "an HTML page was returned instead of the policy (bot protection or a catch-all route?)")
    }
  }
} catch (error) {
  record("fail", `GET ${policyUrl}`, `${error.message} — check DNS and TLS for ${policyHost}`)
}

// --- 7. Served policy must match what is in the repo -------------------------
if (localPolicy && servedPolicy) {
  const sameMode = localPolicy.mode === servedPolicy.mode
  const sameMx = localPolicy.mx.join(",") === servedPolicy.mx.join(",")

  if (sameMode && sameMx) {
    record("pass", "Served policy matches repo", `mode: ${servedPolicy.mode}`)
  } else {
    record(
      "warn",
      "Served policy matches repo",
      `repo mode=${localPolicy.mode} mx=[${localPolicy.mx}] vs served mode=${servedPolicy.mode} mx=[${servedPolicy.mx}] — deploy pending?`,
    )
  }
}

// --- Report ------------------------------------------------------------------
for (const { status, label, detail } of results) {
  console.log(`${status.toUpperCase().padEnd(4)}  ${label}${detail ? ` — ${detail}` : ""}`)
}

const failures = results.filter((r) => r.status === "fail")
const warnings = results.filter((r) => r.status === "warn")

console.log(`\n${results.length} checks: ${failures.length} failed, ${warnings.length} warnings.`)

if (failures.length) {
  console.log(`\nDo NOT deploy "mode: enforce" for ${domain} until the failures above are fixed.`)
  console.log("With enforce active and the policy unreachable or wrong, senders will refuse to deliver mail.")
  process.exitCode = 1
} else {
  console.log(`\nMTA-STS preconditions look good for ${domain}.`)
  if (policyId) console.log(`Remember: bump the _mta-sts TXT id (currently ${policyId}) whenever the policy changes.`)
}
