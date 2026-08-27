import {
  Database,
  ExternalLink,
  KeyRound,
  Network,
  Search,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "OSINT & Exposure Intelligence",
  description:
    "Defensive OSINT resources for breach awareness, credential protection, asset context, and network detection.",
  path: "/osint",
})

const toolGroups = [
  {
    title: "Exposure & credential hygiene",
    description: "Find evidence of exposure, then reduce the value of compromised credentials.",
    tools: [
      {
        name: "Have I Been Pwned",
        href: "https://haveibeenpwned.com/",
        label: "Breach exposure",
        description:
          "Check whether an email address appears in known breach data and, where authorized, use domain monitoring to guide credential response.",
        icon: Search,
      },
      {
        name: "Proton Pass",
        href: "https://proton.me/pass",
        label: "Password manager",
        description:
          "Use unique credentials, passkeys, email aliases, integrated 2FA, and breach monitoring in an end-to-end encrypted vault.",
        icon: ShieldCheck,
      },
      {
        name: "Bitwarden",
        href: "https://bitwarden.com/",
        label: "Password manager",
        description:
          "Generate, store, and securely share unique credentials across teams and devices with an open-source password manager.",
        icon: KeyRound,
      },
    ],
  },
  {
    title: "Asset context & network detection",
    description: "Connect public exposure to owned infrastructure and observable network activity.",
    tools: [
      {
        name: "NetBox",
        href: "https://github.com/netbox-community/netbox",
        label: "Network source of truth",
        description:
          "Document networks and infrastructure in a central source of truth so OSINT findings can be mapped to systems you actually own.",
        icon: Database,
      },
      {
        name: "Snort 3",
        href: "https://github.com/snort3/snort3",
        label: "Network detection",
        description:
          "Inspect traffic with an open-source intrusion prevention system and use detection rules to test whether external intelligence matches activity on the wire.",
        icon: Network,
      },
      {
        name: "Suricata",
        href: "https://suricata.io/",
        label: "IDS, IPS & NSM",
        description:
          "Analyze network traffic with an open-source IDS, IPS, and network security monitoring engine built for high-performance threat detection.",
        icon: Network,
      },
    ],
  },
]

export default function OsintPage() {
  return (
    <div className="bg-background">
      <main id="main-content">
        <section className="px-4 pb-14 pt-32 sm:px-6 lg:px-8" aria-labelledby="page-heading">
          <div className="mx-auto max-w-6xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Defensive intelligence
            </Badge>
            <h1 id="page-heading" className="mb-6 text-4xl font-bold text-foreground text-balance sm:text-5xl">
              OSINT & <span className="text-primary">Exposure Intelligence</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
              Open-source intelligence is most useful when it leads to action: identify public exposure, harden
              credentials, map findings to known assets, and watch for related network activity.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8" aria-label="OSINT tools">
          <div className="mx-auto max-w-6xl space-y-14">
            {toolGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-bold text-foreground">{group.title}</h2>
                  <p className="text-muted-foreground">{group.description}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.tools.map((tool) => (
                    <article key={tool.name}>
                      <Card className="h-full border-0 bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                        <CardHeader>
                          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                            <tool.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                          </div>
                          <CardTitle className="text-card-foreground">{tool.name}</CardTitle>
                          <CardDescription>
                            <Badge variant="secondary">{tool.label}</Badge>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex h-[calc(100%-9rem)] flex-col justify-between gap-6">
                          <p className="leading-relaxed text-muted-foreground">{tool.description}</p>
                          <a
                            href={tool.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                          >
                            Visit {tool.name}
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        </CardContent>
                      </Card>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-primary/5 px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="password-health-heading">
          <div className="mx-auto max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <KeyRound className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Credential health</Badge>
                <h2 id="password-health-heading" className="text-2xl font-bold text-foreground">
                  Keep passwords validated and aligned with NIST
                </h2>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Reused and leaked credentials are a very fixable problem for SMBs. Screen every new or changed
              password against a compromised-password blocklist using a privacy-preserving partial-hash check,
              then require a unique replacement whenever there is evidence of exposure. The lookup hash is only
              for breach screening—it is not a password-storage format. Authentication systems should follow
              current NIST guidance by supporting long, unique passwords and password managers, avoiding arbitrary
              periodic resets without evidence of compromise, rate-limiting failed attempts, and storing password
              verifiers with a unique salt and a suitable, costly password-hashing scheme.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <a
                href="https://haveibeenpwned.com/Passwords"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                Pwned Passwords hash checks
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href="https://pages.nist.gov/800-63-4/sp800-63b.html#passwords"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                NIST SP 800-63B password guidance
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="watchlist-heading">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-card p-8 shadow-lg lg:p-12">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldAlert className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-1">Threat actor watchlist</Badge>
                  <h2 id="watchlist-heading" className="text-2xl font-bold text-foreground">ShinyHunters</h2>
                </div>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Through the sheer volume of breaches associated with this actor, ShinyHunters is a must-watch:
                your organization, users, or vendors are more likely to end up in one of its data dumps, even when
                the actor sits largely outside your direct threat model.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/ShinyHunters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                Read the ShinyHunters overview
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="scope-heading">
          <div className="mx-auto flex max-w-4xl gap-4 rounded-xl border border-border bg-primary/5 p-6">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 id="scope-heading" className="mb-2 text-lg font-bold text-foreground">Use OSINT responsibly</h2>
              <p className="leading-relaxed text-muted-foreground">
                Collect only what you are authorized to access, minimize retained personal data, verify findings
                before acting, and use the results for defensive security and risk reduction.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
