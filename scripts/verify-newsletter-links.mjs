const pageUrl = new URL(process.argv[2] ?? "http://127.0.0.1:3000/newsletter")
const requestTimeoutMs = 20_000
const concurrency = 6

const requestHeaders = {
  Accept: "*/*",
  "User-Agent": "Mozilla/5.0 (compatible; PaulinoTechLinkCheck/1.0; +https://paulinotech.com)",
}

function decodeHref(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function extractLinks(html) {
  const links = new Set()
  const linkPattern = /\shref="([^"]+)"/gi

  for (const match of html.matchAll(linkPattern)) {
    const href = decodeHref(match[1])
    if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) continue
    links.add(new URL(href, pageUrl).toString())
  }

  return [...links].sort()
}

function hasFragmentTarget(html, fragment) {
  if (!fragment) return true

  const target = decodeURIComponent(fragment.slice(1))
  const escapedTarget = target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return new RegExp(`(?:id|name)=["']${escapedTarget}["']`, "i").test(html)
}

async function checkLink(urlValue) {
  const url = new URL(urlValue)
  const fragment = url.hash
  url.hash = ""

  try {
    const response = await fetch(url, {
      headers: requestHeaders,
      redirect: "follow",
      signal: AbortSignal.timeout(requestTimeoutMs),
    })

    let fragmentFound = true
    if (fragment && response.ok) {
      fragmentFound = hasFragmentTarget(await response.text(), fragment)
    } else {
      await response.body?.cancel()
    }

    return {
      url: urlValue,
      finalUrl: response.url,
      status: response.status,
      ok: response.ok && fragmentFound,
      detail: fragmentFound ? "" : `missing fragment target ${fragment}`,
    }
  } catch (error) {
    return {
      url: urlValue,
      finalUrl: "",
      status: 0,
      ok: false,
      detail: error instanceof Error ? error.message : String(error),
    }
  }
}

async function mapWithConcurrency(values, limit, worker) {
  const results = new Array(values.length)
  let nextIndex = 0

  async function run() {
    while (nextIndex < values.length) {
      const currentIndex = nextIndex
      nextIndex += 1
      results[currentIndex] = await worker(values[currentIndex])
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, values.length) }, run))
  return results
}

const pageResponse = await fetch(pageUrl, {
  headers: requestHeaders,
  signal: AbortSignal.timeout(requestTimeoutMs),
})

if (!pageResponse.ok) {
  throw new Error(`Newsletter page returned HTTP ${pageResponse.status}`)
}

const pageHtml = await pageResponse.text()
const links = extractLinks(pageHtml)
const results = await mapWithConcurrency(links, concurrency, checkLink)

for (const result of results) {
  const label = result.ok ? "OK" : "FAIL"
  const redirect = result.finalUrl && result.finalUrl !== result.url ? ` -> ${result.finalUrl}` : ""
  const detail = result.detail ? ` (${result.detail})` : ""
  console.log(`${label} ${result.status} ${result.url}${redirect}${detail}`)
}

const failures = results.filter((result) => !result.ok)
console.log(`Checked ${results.length} unique newsletter links; ${failures.length} failed.`)

if (failures.length > 0) {
  process.exitCode = 1
}
