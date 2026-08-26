import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  ExternalLink,
  Info,
  LockKeyhole,
  Network,
  PhoneCall,
  Radio,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Wifi,
  XCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Network, VoIP & Payment Terminal Deployments | Paulino Tech",
  description:
    "Sanitized network, VoIP, and payment deployment patterns covering SIP and RTP, voice VLANs, segmented Fiserv and PAX card terminals, least-privilege firewall policy, and Nextiva network-readiness guidance.",
}

function DiagramNode({
  vendor,
  title,
  detail,
  emphasized = false,
}: {
  vendor?: string
  title: string
  detail?: string
  emphasized?: boolean
}) {
  return (
    <div
      className={`min-w-0 rounded-xl border p-4 text-center shadow-sm ${
        emphasized ? "border-primary/40 bg-primary/10" : "border-border bg-card"
      }`}
    >
      {vendor ? <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">{vendor}</p> : null}
      <p className="font-semibold text-foreground">{title}</p>
      {detail ? <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p> : null}
    </div>
  )
}

function DiagramArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-2 text-muted-foreground" aria-hidden="true">
      {label ? <span className="mb-1 text-[11px] font-medium uppercase tracking-wider">{label}</span> : null}
      <ArrowDown className="h-5 w-5" />
    </div>
  )
}

function Tradeoffs({ strengths, weaknesses }: { strengths: string[]; weaknesses: string[] }) {
  return (
    <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-2">
      <div>
        <h3 className="mb-3 flex items-center gap-2 font-bold text-foreground">
          <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
          Strengths
        </h3>
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {strengths.map((strength) => (
            <li key={strength} className="flex gap-2">
              <span className="text-primary" aria-hidden="true">•</span>
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-3 flex items-center gap-2 font-bold text-foreground">
          <XCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
          Weaknesses
        </h3>
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {weaknesses.map((weakness) => (
            <li key={weakness} className="flex gap-2">
              <span className="text-destructive" aria-hidden="true">•</span>
              <span>{weakness}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
    >
      {children}
      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export default function DeploymentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <nav
          className="fixed top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md"
          aria-label="Main navigation"
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="font-bold text-xl text-foreground">
              <span className="sr-only">Paulino Tech Home</span>
              <span aria-hidden="true">Paulino Tech</span>
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="px-4 pb-8 pt-24 sm:px-6 lg:px-8" aria-labelledby="disclosure-heading">
          <div
            className="mx-auto flex max-w-6xl gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:p-6"
            role="note"
          >
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-700 dark:text-amber-400" aria-hidden="true" />
            <div>
              <h2 id="disclosure-heading" className="mb-2 text-lg font-bold text-foreground">Security disclosure</h2>
              <p className="leading-relaxed text-muted-foreground">
                Real production deployment details are intentionally withheld because network diagrams, addressing,
                rules, and configuration specifics can expose exploitable vulnerabilities. This page walks through
                sanitized versions of designs I have built and tested in my homelab. These are educational topology
                patterns—not customer diagrams, production configuration guidance, or copy-and-paste templates.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8" aria-labelledby="page-heading">
          <div className="mx-auto max-w-6xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Sanitized homelab designs</Badge>
            <h1 id="page-heading" className="mb-6 text-4xl font-bold text-foreground text-balance sm:text-5xl">
              Network &amp; VoIP Deployments, <span className="text-primary">Budget First</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
              Budget is usually the largest design constraint. These patterns show what changes as funding moves
              from essential connectivity, to segmentation, to duplicated failure paths—then apply those same trust
              boundaries to SIP signaling, voice media, card payment terminals, and firewall policy, including a
              Nextiva-specific deployment profile.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild>
                <a href="#voip">
                  <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
                  VoIP architecture
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#payments">
                  <CreditCard className="mr-2 h-4 w-4" aria-hidden="true" />
                  Payment terminals
                </a>
              </Button>
              <Button asChild>
                <a href="#nextiva">
                  Nextiva profile
                  <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="budget-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <CircleDollarSign className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
              <h2 id="budget-heading" className="mb-3 text-3xl font-bold text-foreground">What each budget buys</h2>
              <p className="mx-auto max-w-3xl text-muted-foreground">
                The labels are relative to these three diagrams; they are not product-price estimates.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">Lowest relative budget</Badge>
                  <CardTitle>Essential star</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  One path through each core device. The budget favors basic connectivity and low administrative overhead.
                </CardContent>
              </Card>
              <Card className="border-primary/40 bg-card shadow-lg">
                <CardHeader>
                  <Badge className="mb-2 w-fit">Best-value step</Badge>
                  <CardTitle>Segmented star</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  Compatible managed hardware adds logical trust boundaries without duplicating the entire core.
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">Highest relative budget</Badge>
                  <CardTitle>Resilience-focused core</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  Additional circuits, appliances, switches, links, licenses, and testing reduce more single points of failure.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="essential-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Badge variant="outline" className="mb-3">Topology 1 · Lowest relative budget</Badge>
                <h2 id="essential-heading" className="text-3xl font-bold text-foreground">Essential single-path star</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
                A starting point when equipment cost and simplicity outweigh uptime and segmentation goals.
              </p>
            </div>

            <Card className="overflow-hidden border-border shadow-lg">
              <CardContent className="p-6 lg:p-10">
                <figure>
                  <div
                    className="mx-auto max-w-3xl rounded-2xl border border-border bg-muted/50 p-5 sm:p-8"
                    role="img"
                    aria-label="Internet connects to one SonicWall gateway, then one NETGEAR managed switch branches to wired devices and one Ubiquiti access point."
                  >
                    <div className="mx-auto max-w-xs"><DiagramNode title="Internet / ISP" /></div>
                    <DiagramArrow />
                    <div className="mx-auto max-w-xs">
                      <DiagramNode vendor="SonicWall" title="Security gateway" detail="One appliance and one WAN path" emphasized />
                    </div>
                    <DiagramArrow />
                    <div className="mx-auto max-w-xs">
                      <DiagramNode vendor="NETGEAR" title="Managed switch" detail="Central wired star" emphasized />
                    </div>
                    <DiagramArrow label="access links" />
                    <div className="grid gap-3 border-t border-dashed border-border pt-5 sm:grid-cols-3">
                      <DiagramNode title="Wired users" detail="Workstations and phones" />
                      <DiagramNode vendor="Ubiquiti" title="UniFi AP" detail="Wireless clients" />
                      <DiagramNode title="Local resources" detail="Printer or NAS" />
                    </div>
                  </div>
                  <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                    Conceptual data path only; ports, addressing, rules, and device models are deliberately omitted.
                  </figcaption>
                </figure>

                <div className="mt-8">
                  <Tradeoffs
                    strengths={[
                      "Uses the fewest core devices of the three designs, reducing purchase and administration scope.",
                      "A central switch keeps the physical layout simple and easy to trace in a small homelab.",
                      "Choosing an exact NETGEAR model with documented 802.1Q support preserves a path to later segmentation.",
                    ]}
                    weaknesses={[
                      "The ISP path, SonicWall appliance, NETGEAR switch, and single AP are each single points of failure.",
                      "A flat LAN has no VLAN trust boundaries, so it provides the broadest local failure and exposure domain shown here.",
                      "Maintenance on a core device interrupts every downstream service that depends on it.",
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="segmented-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Badge className="mb-3">Topology 2 · Best-value step</Badge>
                <h2 id="segmented-heading" className="text-3xl font-bold text-foreground">Segmented wired star</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
                The same basic hardware path, but compatible VLAN features create useful trust boundaries.
              </p>
            </div>

            <Card className="overflow-hidden border-primary/30 shadow-xl">
              <CardContent className="p-6 lg:p-10">
                <figure>
                  <div
                    className="rounded-2xl border border-primary/20 bg-background p-5 sm:p-8"
                    role="img"
                    aria-label="Internet connects to a SonicWall gateway with zones and VLAN subinterfaces, then through an 802.1Q trunk to a NETGEAR managed switch that separates staff, servers, cameras and IoT, card payment terminals, and Ubiquiti staff and guest wireless networks."
                  >
                    <div className="mx-auto max-w-xs"><DiagramNode title="Internet / ISP" /></div>
                    <DiagramArrow />
                    <div className="mx-auto max-w-sm">
                      <DiagramNode vendor="SonicWall" title="Zones + VLAN subinterfaces" detail="Inter-VLAN policy and routed trust boundaries" emphasized />
                    </div>
                    <DiagramArrow label="matching 802.1Q tags" />
                    <div className="mx-auto max-w-sm">
                      <DiagramNode vendor="NETGEAR" title="VLAN-capable managed switch" detail="Tagged uplink and assigned access ports" emphasized />
                    </div>
                    <DiagramArrow label="segmented branches" />
                    <div className="grid gap-3 border-t border-dashed border-border pt-5 sm:grid-cols-2 lg:grid-cols-5">
                      <DiagramNode title="Staff VLAN" detail="Managed workstations" />
                      <DiagramNode title="Server VLAN" detail="Local services" />
                      <DiagramNode title="Camera / IoT VLAN" detail="Restricted devices" />
                      <DiagramNode title="Payment VLAN" detail="Card terminals only" />
                      <DiagramNode vendor="Ubiquiti" title="UniFi AP" detail="Staff and guest SSIDs mapped to VLANs" />
                    </div>
                  </div>
                  <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                    Every VLAN ID must match from the SonicWall subinterface, through the NETGEAR switch, to the UniFi AP uplink and SSID.
                  </figcaption>
                </figure>

                <div className="mt-8">
                  <Tradeoffs
                    strengths={[
                      "SonicOS documents VLAN subinterfaces with zone, routing, DHCP, NAT, security-service, and access-rule controls.",
                      "NETGEAR documents 802.1Q tagged and untagged membership on supported managed-switch models.",
                      "UniFi maps an SSID to a VLAN, allowing staff and guest wireless traffic to enter separate policy zones.",
                    ]}
                    weaknesses={[
                      "The ISP, firewall, switch, and uplinks remain single failure paths even though traffic is logically segmented.",
                      "Tags, native VLAN behavior, access ports, and firewall rules must agree across three vendors or connectivity will fail.",
                      "Feature availability varies by exact switch model and firmware; a managed label alone does not guarantee every function.",
                    ]}
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm">
                  <SourceLink href="https://www.sonicwall.com/support/technical-documentation/docs/sonicos-7-0.1-system/Content/Interfaces/interfaces-subinterfaces.htm">
                    SonicWall VLAN subinterfaces
                  </SourceLink>
                  <SourceLink href="https://kb.netgear.com/30918/How-to-configure-an-802-1Q-VLAN-on-a-NETGEAR-Web-Managed-Plus-Switch-using-the-web-interface">
                    NETGEAR 802.1Q VLANs
                  </SourceLink>
                  <SourceLink href="https://help.ui.com/hc/en-us/articles/26136823938583-Creating-UniFi-WiFi-SSIDs">
                    Ubiquiti SSID and VLAN paths
                  </SourceLink>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="voip"
          className="bg-foreground px-4 py-20 text-background sm:px-6 lg:px-8"
          aria-labelledby="voip-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary">
                  Voice workload · Scoped trust boundary
                </Badge>
                <h2 id="voip-heading" className="text-3xl font-bold text-balance sm:text-4xl">
                  VoIP: SIP signaling belongs behind explicit network policy
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-background/75">
                  Voice over Internet Protocol shares the network, but it should not inherit the data network&apos;s trust.
                  Session Initiation Protocol, or SIP, registers endpoints and establishes, changes, and ends calls. It commonly
                  carries Session Description Protocol details that negotiate how the media should flow.
                </p>
                <p className="mt-5 leading-relaxed text-background/70">
                  The conversation normally travels separately over RTP; SRTP adds confidentiality, integrity, and replay
                  protection to that media. Protecting SIP with TLS does not automatically encrypt the audio, so signaling and
                  media must each have their own policy and validation.
                </p>
              </div>

              <aside className="rounded-2xl border border-primary/40 bg-primary/10 p-7 lg:p-8" aria-label="VoIP layer summary">
                <PhoneCall className="mb-5 h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-background">Each layer has a different job</h3>
                <p className="mt-5 text-lg font-medium leading-relaxed text-background">
                  SIP asks for the call. RTP carries the voice. The VLAN limits where phones live. The firewall limits who can
                  communicate across zones. The SBC mediates sessions at the trust boundary.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-background/65">
                  A phone can register successfully while the call still has one-way or missing audio. That usually means the
                  signaling path worked while the negotiated media, NAT, or firewall path did not.
                </p>
              </aside>
            </div>

            <Card className="overflow-hidden border-primary/30 bg-background shadow-xl">
              <CardContent className="p-6 lg:p-10">
                <figure>
                  <div
                    className="rounded-2xl border border-primary/20 bg-muted/50 p-5 sm:p-8"
                    role="img"
                    aria-label="IP phones and approved softphones connect through managed switch access policy to a dedicated voice VLAN, then cross a stateful firewall voice zone and, where used, a session border controller before reaching private call control or an approved voice provider."
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <DiagramNode title="IP phones and ATAs" detail="Dedicated voice access policy" />
                      <DiagramNode title="Approved softphones" detail="Data endpoint plus endpoint controls" />
                    </div>
                    <DiagramArrow label="authenticated or assigned access" />
                    <div className="mx-auto max-w-lg">
                      <DiagramNode
                        vendor="Managed switch"
                        title="802.1Q voice VLAN"
                        detail="Tagged uplink, trusted phone ports, and deliberate QoS markings"
                        emphasized
                      />
                    </div>
                    <DiagramArrow label="matching VLAN tag" />
                    <div className="mx-auto max-w-lg">
                      <DiagramNode
                        vendor="Network firewall"
                        title="Voice zone and VLAN subinterface"
                        detail="Default-deny inter-VLAN policy, state tracking, NAT, and logged exceptions"
                        emphasized
                      />
                    </div>
                    <DiagramArrow label="provider-documented signaling and media" />
                    <div className="grid gap-3 sm:grid-cols-2">
                      <DiagramNode title="SBC / call control" detail="Session policy, normalization, and media anchoring where used" />
                      <DiagramNode title="Approved VoIP provider" detail="Known signaling and media peers" />
                    </div>
                  </div>
                  <figcaption className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                    Conceptual trust path only. A real design must document whether media is anchored by the session border
                    controller or follows a provider-approved direct-media path; fixed ports and universal SIP settings are
                    intentionally omitted.
                  </figcaption>
                </figure>
              </CardContent>
            </Card>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-background/15 bg-background/5 p-6">
                <Radio className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold text-background">SIP and media are separate planes</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/70">
                  SIP handles registration and call control; RTP and RTCP carry media and quality information. Use SIP over TLS
                  and SRTP where the endpoints, call platform, and provider support them, then confirm certificate validation and
                  negotiated protection rather than assuming the padlock covers both paths.
                </p>
              </article>

              <article className="rounded-2xl border border-background/15 bg-background/5 p-6">
                <Network className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold text-background">The voice VLAN creates the boundary</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/70">
                  Place physical phones and adapters in a dedicated voice VLAN and firewall zone. A VLAN separates broadcast and
                  policy domains; it is not encryption. Softphones remain data endpoints, so pair their narrow voice access with
                  endpoint hardening, strong identity controls, and application-specific rules.
                </p>
              </article>

              <article className="rounded-2xl border border-background/15 bg-background/5 p-6">
                <Shield className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold text-background">The firewall brokers every trust crossing</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/70">
                  Route the voice VLAN through a dedicated subinterface or zone and deny routine access to staff, server, IoT,
                  and management networks. Permit only documented call-control, media, DNS, DHCP, NTP, certificate, and
                  provisioning flows. Dynamic RTP is not a reason to expose every high UDP port to the Internet.
                </p>
              </article>

              <article className="rounded-2xl border border-background/15 bg-background/5 p-6">
                <Server className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold text-background">The SBC controls the session edge</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/70">
                  Where the architecture uses a session border controller, terminate and re-originate provider sessions there
                  instead of exposing phones or management interfaces. The SBC can normalize SIP, anchor media, constrain NAT,
                  rate-limit abuse, and improve logs; the firewall still controls packet reachability around it.
                </p>
              </article>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-background/15 bg-background text-foreground">
              <div className="border-b border-border p-6 sm:p-8">
                <LockKeyhole className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="text-2xl font-bold">A least-privilege voice policy matrix</h3>
                <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                  Build rules from the selected platform and carrier documentation. Conventional SIP ports are not an
                  authorization policy, and media ranges differ by product, provider, and whether an SBC anchors the stream.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <caption className="sr-only">Conceptual least-privilege firewall policy for a segmented VoIP deployment</caption>
                  <thead className="bg-muted/70 text-foreground">
                    <tr>
                      <th scope="col" className="border-b border-border px-6 py-4 font-bold">Trust crossing</th>
                      <th scope="col" className="border-b border-border px-6 py-4 font-bold">Business purpose</th>
                      <th scope="col" className="border-b border-border px-6 py-4 font-bold">Firewall stance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-muted-foreground">
                    {[
                      {
                        flow: "Voice endpoints → PBX or SBC",
                        purpose: "Registration, call control, and approved provisioning",
                        policy: "Allow only named systems and required transports; prefer authenticated, encrypted signaling.",
                      },
                      {
                        flow: "Endpoints or SBC → media peers",
                        purpose: "RTP or SRTP audio plus RTCP quality reporting",
                        policy: "Constrain peers and the platform-defined media range; use stateful or session-aware handling.",
                      },
                      {
                        flow: "Voice VLAN → core services",
                        purpose: "DHCP, DNS, NTP, certificates, and signed updates",
                        policy: "Permit only named internal services and approved update destinations.",
                      },
                      {
                        flow: "Admin VLAN → voice management",
                        purpose: "PBX, SBC, switch, and phone administration",
                        policy: "Allow the admin network and separate admin identities only; require MFA and log changes where supported.",
                      },
                      {
                        flow: "Voice VLAN → staff, server, or IoT VLANs",
                        purpose: "No routine dependency",
                        policy: "Deny by default; document and review any voicemail, contact-center, or unified-communications exception.",
                      },
                    ].map((row) => (
                      <tr key={row.flow}>
                        <th scope="row" className="px-6 py-4 font-semibold text-foreground">{row.flow}</th>
                        <td className="px-6 py-4 leading-relaxed">{row.purpose}</td>
                        <td className="px-6 py-4 leading-relaxed">{row.policy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <section
              id="nextiva"
              className="mt-10 overflow-hidden rounded-2xl border border-primary/30 bg-background text-foreground shadow-xl"
              aria-labelledby="nextiva-heading"
            >
              <div className="border-b border-border bg-primary/5 p-6 sm:p-8 lg:p-10">
                <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary">
                  Vendor profile · Nextiva
                </Badge>
                <h3 id="nextiva-heading" className="text-3xl font-bold text-balance">
                  Nextiva: turn provider requirements into a scoped voice policy
                </h3>
                <p className="mt-4 max-w-4xl text-lg leading-relaxed text-muted-foreground">
                  Nextiva publishes different network requirements for its Voice/SBC service, NextivaONE, Contact Center, and
                  individual phone families. Identify the purchased service, tenant, endpoint model, firmware, and call path
                  before writing rules. Recheck the live documentation during every material change because provider addresses,
                  ports, and supported behavior can change.
                </p>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid gap-5 lg:grid-cols-3">
                  <article className="rounded-xl border border-border bg-card p-6">
                    <PhoneCall className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h4 className="text-xl font-bold text-foreground">Nextiva Voice and desk phones</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Put supported physical phones in the voice VLAN and match the firewall policy to Nextiva&apos;s current
                      Voice/SBC destinations plus the exact handset&apos;s signaling, media, provisioning, and time requirements.
                      Generic SIP registration does not prove full device or feature support.
                    </p>
                  </article>

                  <article className="rounded-xl border border-border bg-card p-6">
                    <Network className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h4 className="text-xl font-bold text-foreground">NextivaONE</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      The desktop and mobile application uses a different HTTPS, SIP, RTP, and STUN profile from a desk phone.
                      A softphone remains on a user endpoint, so combine its documented network access with patching, endpoint
                      detection, strong sign-in controls, and limited local privilege.
                    </p>
                  </article>

                  <article className="rounded-xl border border-border bg-card p-6">
                    <Server className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h4 className="text-xl font-bold text-foreground">Nextiva Contact Center</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Browser and WebRTC agents have their own regional FQDN, HTTPS, SIP, media, and relay requirements. Use the
                      Contact Center network document for that workload instead of copying a Voice/SBC or handset rule set into
                      a broader policy.
                    </p>
                  </article>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  <article className="rounded-xl border border-border bg-muted/40 p-6">
                    <Radio className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h4 className="text-xl font-bold text-foreground">Prove network readiness</h4>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span>Use wired cable or fiber and hardwired phones where practical; keep one deliberate NAT boundary.</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          Run Nextiva&apos;s readiness test repeatedly during busy periods and model the expected number of
                          simultaneous calls—not just an empty-network speed test.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          Use Nextiva&apos;s current support targets as an acceptance gate: at least 100 kbps in each direction per
                          concurrent call, round-trip time below 150 ms, jitter below roughly 15–20 ms, and investigated packet
                          loss.
                        </span>
                      </li>
                    </ul>
                  </article>

                  <article className="rounded-xl border border-border bg-muted/40 p-6">
                    <Shield className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h4 className="text-xl font-bold text-foreground">Translate Nextiva into SonicWall policy</h4>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          Nextiva specifically recommends disabling SIP ALG/SIP Transformations and removing double NAT. Its
                          SonicWall guide also recommends Consistent NAT for this service.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          Build named objects from the current Nextiva destinations and product-specific ports, then scope rules
                          to the voice zone and required stateful return traffic.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          Nextiva&apos;s SonicWall example uses a 90-second UDP inactivity timeout, DSCP 46, and 802.1p priority 6.
                          Apply those only after model, firmware, carrier, and QoS-path validation.
                        </span>
                      </li>
                    </ul>
                  </article>

                  <article className="rounded-xl border border-border bg-muted/40 p-6">
                    <ShieldCheck className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h4 className="text-xl font-bold text-foreground">Close the go-live evidence</h4>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          Ask Nextiva to confirm TLS signaling and SRTP media for the account and every selected endpoint, then
                          verify what was actually negotiated.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          Maintain the registered physical emergency location for every line and update it whenever equipment or
                          a remote worker moves. Coordinate any emergency-call test before dialing.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          Test registration, inbound and outbound calling, transfers, voicemail, call groups, two-way audio,
                          failover, and QoS under load; retain exact call examples for escalation.
                        </span>
                      </li>
                    </ul>
                  </article>
                </div>

                <aside className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-6" role="note">
                  <h4 className="flex items-center gap-3 text-xl font-bold text-foreground">
                    <Info className="h-6 w-6 shrink-0 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                    Nextiva is an approved destination, not an allow-any exception
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Nextiva&apos;s SonicWall article contains compatibility examples and warns that interfaces vary by software
                    version. Use it as vendor input—not permission to expose the voice VLAN or management plane. Preserve the
                    narrowest source, destination, service, and direction the selected offering supports; record the rule owner
                    and review date; and validate calls before and after every change.
                  </p>
                </aside>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-6 text-sm">
                  <SourceLink href="https://help.nextiva.com/article/networking-guidelines">
                    Nextiva networking guidelines
                  </SourceLink>
                  <SourceLink href="https://www.nextiva.com/support/articles/nextiva-networking-guidelines.html?category=2">
                    Nextiva product and device firewall matrix
                  </SourceLink>
                  <SourceLink href="https://www.nextiva.com/support/articles/how-to-set-up-sonicwall-with-nextiva.html">
                    Nextiva SonicWall recommendations
                  </SourceLink>
                  <SourceLink href="https://www.nextiva.com/support/articles/nextiva-call-center-network-requirements.html">
                    Nextiva Contact Center requirements
                  </SourceLink>
                  <SourceLink href="https://www.nextiva.com/resources/voip-speed-test.html">
                    Nextiva network readiness test
                  </SourceLink>
                  <SourceLink href="https://www.nextiva.com/support/articles/how-do-i-resolve-a-dropped-call.html">
                    Nextiva troubleshooting evidence guide
                  </SourceLink>
                  <SourceLink href="https://www.nextiva.com/products/voip-desk-phones">
                    Nextiva supported phone catalog
                  </SourceLink>
                  <SourceLink href="https://www.nextiva.com/download/nextiva_e911.pdf">
                    Nextiva E911 disclosure
                  </SourceLink>
                  <SourceLink href="https://status.nextiva.com/">Nextiva service status</SourceLink>
                </div>
              </div>
            </section>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="rounded-2xl border border-background/15 bg-background/5 p-7">
                <ShieldCheck className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-background">Validate the whole call path</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-background/70">
                  {[
                    "Test inbound and outbound calls, transfer, hold, voicemail, and one-way-audio cases.",
                    "Confirm signaling and media encryption separately, including certificate renewal and failure behavior.",
                    "Exercise WAN, power, PBX, and provider failure paths plus emergency calling and location behavior where applicable.",
                    "Load-test QoS without allowing priority markings to bypass inspection or come from untrusted endpoints.",
                    "Centralize firewall, switch, PBX, SBC, and identity logs; protect call records and recordings as sensitive data.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-7">
                <Info className="mb-4 h-8 w-8 text-amber-300" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-background">Treat SIP ALG as an interoperability setting</h3>
                <p className="mt-4 text-sm leading-relaxed text-background/70">
                  NAT and SIP are difficult because signaling can contain media addresses and ports inside the payload. A SIP
                  application-layer gateway may rewrite them, but it is not a security control and can conflict with an SBC or
                  provider design. Enable or disable transformation only from vendor guidance, then test it through change
                  control instead of relying on a universal rule.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-background/65">
                  Monitor registration failures, unfamiliar endpoints, call-volume spikes, unexpected destinations or media
                  peers, toll-fraud indicators, policy changes, certificate expiry, latency, jitter, loss, and firewall denies.
                </p>
              </article>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <SourceLink href="https://www.rfc-editor.org/rfc/rfc3261.html">IETF RFC 3261: SIP</SourceLink>
              <SourceLink href="https://www.rfc-editor.org/rfc/rfc3550.html">IETF RFC 3550: RTP and RTCP</SourceLink>
              <SourceLink href="https://www.rfc-editor.org/rfc/rfc8862.html">IETF RFC 8862: securing RTP with SIP</SourceLink>
              <SourceLink href="https://csrc.nist.gov/pubs/sp/800/58/final">NIST VoIP security guidance</SourceLink>
              <SourceLink href="https://www.sonicwall.com/support/knowledge-base/kA1VN0000000Fla0AE">
                SonicWall VoIP firewall guidance
              </SourceLink>
            </div>
          </div>
        </section>

        <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8" id="payments" aria-labelledby="payments-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                  Payment workload · Segmented card environment
                </Badge>
                <h2 id="payments-heading" className="text-3xl font-bold text-foreground text-balance sm:text-4xl">
                  Payment terminals get their own segment, not another desk port
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Card-present hardware shows up in two common forms at the sites I support: countertop PIN pads from the
                  Fiserv / First Data family and Android-based payment appliances from the PAX family. The branding matters
                  for ordering, provisioning, and support escalation. On the network, both are controlled payment endpoints:
                  they live in a dedicated payment VLAN and use stateful outbound sessions only to processor-documented
                  transaction and terminal-management destinations, plus any explicitly approved point-of-sale flow.
                </p>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Specific terminal models, firmware levels, processor endpoints, and merchant identifiers are omitted for
                  the same reason the diagrams above omit addressing and rules. The transferable part is the trust
                  boundary, not the part number.
                </p>
              </div>

              <aside
                className="rounded-2xl border border-primary/30 bg-card p-7 shadow-lg lg:p-8"
                aria-label="Payment terminal treatment summary"
              >
                <CreditCard className="mb-5 h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-foreground">One rule for both brands</h3>
                <p className="mt-5 text-lg font-medium leading-relaxed text-foreground">
                  The terminal is a payment appliance, never a general-purpose host. It talks to the processor, its approved
                  terminal-management service, and only the internal infrastructure or point-of-sale services it actually
                  requires. Everything else is denied and logged.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  A terminal that completes a test sale has proven the outbound path. It has not proven that the segment
                  is closed, that inbound is denied, or that the wireless and cellular paths behave the way the design
                  says they do.
                </p>
              </aside>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">Fiserv / First Data</p>
                <h3 className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <Network className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                  Wired countertop PIN pads
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  These devices are commonly provisioned and supported through a processor, acquirer, or reseller program.
                  The contract and implementation guide—not an assumption—must identify who owns configuration, application
                  updates, firmware, key management, and support. Where a countertop device uses Ethernet beside a register,
                  its point-of-sale relationship is limited to the documented local flow.
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Wired access port assigned to the payment VLAN, with a reserved lease so the device is identifiable
                      in logs.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Approved encrypted protocols to the processor-documented transaction and management destinations only;
                      no browsing, unsolicited inbound sessions, or port forwards.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Any analog or cellular fallback the unit ships with is documented as a path that bypasses this
                      policy, then disabled or accepted deliberately.
                    </span>
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">PAX</p>
                <h3 className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <Smartphone className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                  Android smart terminals
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  These are purpose-built Android payment appliances with an application stack, managed software channel,
                  wireless radios, and, in some deployments, cellular connectivity. They belong in the same controlled
                  payment segment as countertop devices, with additional wireless, application, and lifecycle controls.
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      A dedicated payment SSID mapped to the payment VLAN—never the staff SSID, and never the guest SSID.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Per-device wireless credentials where the wireless platform supports them, so a lost or retired
                      terminal can be removed without reprovisioning the fleet.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Application installs and updates come from the managed terminal service only; sideloading and
                      unmanaged app sources are treated as a change-control failure.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      A cellular fallback keeps taking payments while the firewall is out of the path entirely; decide
                      whether that tradeoff is acceptable and write it down.
                    </span>
                  </li>
                </ul>
              </article>
            </div>

            <Card className="mt-8 overflow-hidden border-primary/30 shadow-xl">
              <CardContent className="p-6 lg:p-10">
                <figure>
                  <div
                    className="rounded-2xl border border-primary/20 bg-background p-5 sm:p-8"
                    role="img"
                    aria-label="Wired countertop PIN pads and wireless Android smart terminals enter a dedicated payment VLAN through switch access ports or a payment-only SSID, cross a firewall payment zone with default-deny outbound-only policy, and reach only the named processor, gateway, and terminal management destinations."
                  >
                    <div className="grid gap-3 sm:grid-cols-3">
                      <DiagramNode vendor="Fiserv / First Data" title="Countertop PIN pads" detail="Wired access ports" />
                      <DiagramNode vendor="PAX" title="Android smart terminals" detail="Payment SSID or dock" />
                      <DiagramNode title="Point-of-sale register" detail="Semi-integrated local link" />
                    </div>
                    <DiagramArrow label="assigned access policy" />
                    <div className="mx-auto max-w-lg">
                      <DiagramNode
                        vendor="Managed switch and AP"
                        title="Payment VLAN"
                        detail="Dedicated tag, payment-only SSID, no shared access ports"
                        emphasized
                      />
                    </div>
                    <DiagramArrow label="matching VLAN tag" />
                    <div className="mx-auto max-w-lg">
                      <DiagramNode
                        vendor="Network firewall"
                        title="Payment zone"
                        detail="Default deny, outbound only, named destinations, full logging"
                        emphasized
                      />
                    </div>
                    <DiagramArrow label="processor-documented destinations" />
                    <div className="grid gap-3 sm:grid-cols-2">
                      <DiagramNode title="Processor / payment gateway" detail="Named authorization and settlement hosts" />
                      <DiagramNode
                        title="Terminal management service"
                        detail="Approved configuration, applications, firmware, and assigned key-management functions"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                    Conceptual trust path only. Terminal models, firmware, processor hostnames, ports, and merchant
                    identifiers are intentionally omitted; take those from the processor&apos;s current implementation
                    documentation for the exact service purchased.
                  </figcaption>
                </figure>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <article className="rounded-xl border border-border bg-muted/40 p-6">
                    <ShieldCheck className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-foreground">Segmentation is what limits the scope</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Systems with unrestricted connectivity to the payment environment can expand PCI DSS scope. A separate
                      VLAN plus effective, tested firewall controls can reduce that boundary; a VLAN label by itself cannot.
                      The rule base, routes, wireless mapping, and actual traffic all need to match the documented design.
                    </p>
                  </article>

                  <article className="rounded-xl border border-border bg-muted/40 p-6">
                    <LockKeyhole className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-foreground">Encryption at the reader is not the whole control</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Point-to-point encryption and tokenization can reduce what card data the business handles, but only
                      the exact device, application, decryption environment, and operating process of a PCI SSC-listed P2PE
                      solution receive that treatment. A PTS- or SRED-capable terminal alone is not P2PE. Encryption still
                      does not replace segmentation, lifecycle management, or controlled support access.
                    </p>
                  </article>

                  <article className="rounded-xl border border-border bg-muted/40 p-6">
                    <Wifi className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-foreground">Wireless and cellular are the leaky edges</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Keep the payment SSID separate from staff and guest networks, use per-device credentials where the
                      platform supports them, and remove a retired or lost device promptly. Treat an enabled cellular path as
                      a separately documented route outside the local VLAN and firewall controls, with an owner and an
                      accepted business-continuity rationale.
                    </p>
                  </article>

                  <article className="rounded-xl border border-border bg-muted/40 p-6">
                    <Shield className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-foreground">Remote support is a separate trust path</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      A processor, point-of-sale reseller, or terminal-management service may require remote support. Use the
                      vendor-documented method, require named identities and multi-factor sign-in where available, authorize
                      access for a defined window, and retain session evidence. Do not substitute a standing inbound rule,
                      shared remote-access password, or unowned always-on tunnel.
                    </p>
                  </article>

                  <article className="rounded-xl border border-border bg-muted/40 p-6 md:col-span-2">
                    <AlertTriangle className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-foreground">Inventory and tamper response stay physical</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Keep the full model, serial number, location, connection method, support owner, and lifecycle status in
                      the private asset register even though this public portfolio omits them. Inspect terminals, cables,
                      labels, and seals on a defined schedule; verify visiting technicians through a known support channel.
                      If a device appears substituted, opened, unexpectedly reconfigured, or missing, stop using it,
                      quarantine it without destroying evidence, notify the processor through a known number, and follow the
                      incident and card-brand procedures. Unsupported software or unclear patch ownership is an escalation,
                      not a reason to leave the terminal online indefinitely.
                    </p>
                  </article>
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                  <div className="border-b border-border bg-muted/50 p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-foreground">A least-privilege payment policy matrix</h3>
                    <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                      The same shape as the voice matrix above, with a stricter default: the payment segment has no routine
                      reason to talk to anything else the business runs.
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                      <caption className="sr-only">
                        Conceptual least-privilege firewall policy for a segmented payment terminal deployment
                      </caption>
                      <thead className="bg-muted/70 text-foreground">
                        <tr>
                          <th scope="col" className="border-b border-border px-6 py-4 font-bold">Trust crossing</th>
                          <th scope="col" className="border-b border-border px-6 py-4 font-bold">Business purpose</th>
                          <th scope="col" className="border-b border-border px-6 py-4 font-bold">Firewall stance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border text-muted-foreground">
                        {[
                          {
                            flow: "Terminals → processor or gateway",
                            purpose: "Authorization, settlement, and batch close",
                            policy: "Allow outbound to the processor-documented destinations only; deny all other outbound.",
                          },
                          {
                            flow: "Terminals → terminal management service",
                            purpose: "Approved configuration, application or firmware updates, and assigned key-management functions",
                            policy: "Allow the named service only; verify responsibility, approval, and update provenance with the processor or acquirer.",
                          },
                          {
                            flow: "Payment VLAN → core services",
                            purpose: "DHCP, DNS, and time",
                            policy: "Permit only named internal resolvers and time sources; no general internal reachability.",
                          },
                          {
                            flow: "Register ↔ terminal",
                            purpose: "Semi-integrated sale amount and result",
                            policy: "Permit the single documented local flow between named devices; keep it local and logged.",
                          },
                          {
                            flow: "Admin network → payment infrastructure",
                            purpose: "Firewall, switch, and wireless administration",
                            policy: "Use separate admin identities, MFA, and logging. Do not expose terminal administration unless the approved vendor workflow explicitly requires it.",
                          },
                          {
                            flow: "Payment VLAN → staff, server, guest, or IoT",
                            purpose: "No routine dependency",
                            policy: "Deny by default; treat any requested exception as a scope change with a named owner and review date.",
                          },
                          {
                            flow: "Internet → payment VLAN",
                            purpose: "None",
                            policy: "Deny inbound entirely: no port forwards, no published management interfaces, no standing vendor tunnels.",
                          },
                        ].map((row) => (
                          <tr key={row.flow}>
                            <th scope="row" className="px-6 py-4 font-semibold text-foreground">{row.flow}</th>
                            <td className="px-6 py-4 leading-relaxed">{row.purpose}</td>
                            <td className="px-6 py-4 leading-relaxed">{row.policy}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <aside className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-6" role="note">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-foreground">
                    <Info className="h-6 w-6 shrink-0 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                    Brand changes the paperwork, not the trust level
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Fiserv and PAX hardware differ in ordering, provisioning, support escalation, and which validated device
                    or solution listing applies. None of that grants broad network trust. Internally confirm the exact
                    approved hardware, firmware, payment application, processor relationship, and encryption solution
                    against current vendor and PCI Security Standards Council material, and take card-data scoping decisions
                    to a qualified assessor rather than to a topology diagram.
                  </p>
                </aside>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-6 text-sm">
                  <SourceLink href="https://www.pcisecuritystandards.org/faqs/1300/">
                    PCI SSC: payment terminals and PCI DSS scope
                  </SourceLink>
                  <SourceLink href="https://www.pcisecuritystandards.org/faqs/1301/">
                    PCI SSC: terminal security assessment guidance
                  </SourceLink>
                  <SourceLink href="https://www.pcisecuritystandards.org/standards/point-to-point-encryption-p2pe/">
                    PCI SSC: validated P2PE solutions
                  </SourceLink>
                  <SourceLink href="https://www.pcisecuritystandards.org/assessors_and_solutions/pin_transaction_devices">
                    PCI SSC: approved PIN transaction devices
                  </SourceLink>
                  <SourceLink href="https://merchants.fiserv.com/en-us/customer-center/">
                    Fiserv: merchant support and security resources
                  </SourceLink>
                  <SourceLink href="https://merchants.fiserv.com/content/dam/s7/firstdata/us/en/cmm/experiences/TransArmor.pdf">
                    Fiserv: encryption and tokenization overview
                  </SourceLink>
                  <SourceLink href="https://www.pax.us/support/security/">PAX: security and support guidance</SourceLink>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="resilient-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Badge variant="outline" className="mb-3">Topology 3 · Highest relative budget</Badge>
                <h2 id="resilient-heading" className="text-3xl font-bold text-foreground">Resilience-focused hierarchy</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
                Duplicate selected paths only when the cost of downtime justifies the hardware, licensing, and operating burden.
              </p>
            </div>

            <Card className="overflow-hidden border-border shadow-lg">
              <CardContent className="p-6 lg:p-10">
                <figure>
                  <div
                    className="rounded-2xl border border-border bg-muted/50 p-5 sm:p-8"
                    role="img"
                    aria-label="Two internet circuits feed a supported SonicWall active standby pair with WAN failover, which connects to a NETGEAR M4300 resilient stack and then to redundant wired links, servers, and multiple wired Ubiquiti access points."
                  >
                    <div className="mx-auto grid max-w-xl grid-cols-2 gap-3">
                      <DiagramNode title="Primary ISP" />
                      <DiagramNode title="Secondary ISP" />
                    </div>
                    <DiagramArrow label="WAN failover" />
                    <div className="mx-auto max-w-lg">
                      <DiagramNode
                        vendor="SonicWall"
                        title="Eligible active / standby HA pair"
                        detail="Identical supported models, matching firmware, and required licensing"
                        emphasized
                      />
                    </div>
                    <DiagramArrow label="validated redundant paths" />
                    <div className="mx-auto max-w-lg">
                      <DiagramNode
                        vendor="NETGEAR"
                        title="M4300 resilient stack"
                        detail="Stacking and optional redundant power on documented models"
                        emphasized
                      />
                    </div>
                    <DiagramArrow label="wired access" />
                    <div className="grid gap-3 border-t border-dashed border-border pt-5 sm:grid-cols-3">
                      <DiagramNode title="Critical wired services" detail="Model-validated LAG where supported" />
                      <DiagramNode vendor="Ubiquiti" title="Wired UniFi AP A" detail="Coverage and client capacity" />
                      <DiagramNode vendor="Ubiquiti" title="Wired UniFi AP B" detail="Coverage and client roaming" />
                    </div>
                  </div>
                  <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                    This is a conceptual redundancy map, not a cabling plan. Follow the exact HA, stacking, power, and uplink prerequisites for each selected SKU.
                  </figcaption>
                </figure>

                <div className="mt-8">
                  <Tradeoffs
                    strengths={[
                      "SonicWall documents secondary-WAN failover, while supported active/standby HA pairs address appliance failure as a separate capability.",
                      "NETGEAR documents resilient stacking and management failover for M4300, plus optional redundant power on selected models.",
                      "Supported NETGEAR LAG or LACP designs can keep traffic moving over surviving member links when one physical link fails.",
                    ]}
                    weaknesses={[
                      "This design requires the most circuits, appliances, switches, links, licensing, rack space, power, configuration, and testing.",
                      "SonicWall HA requires compatible identical appliances and firmware; stateful synchronization is license-dependent on specified models.",
                      "Multiple ordinary UniFi APs improve coverage and supported-client roaming, but they are not automatic AP high availability.",
                    ]}
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm">
                  <SourceLink href="https://www.sonicwall.com/support/technical-documentation/docs/sonicos-7-1-system/Content/Failover_LB/faliover-lb.htm">
                    SonicWall WAN failover
                  </SourceLink>
                  <SourceLink href="https://www.sonicwall.com/support/technical-documentation/docs/sonicos-7-1-high_availability/Content/Topics/High_Availability/Active_Standby_Active_DPI/supported-platform-licensing-ha.htm">
                    SonicWall HA platforms and licensing
                  </SourceLink>
                  <SourceLink href="https://www.downloads.netgear.com/files/GDC/datasheet/en/M4300.pdf">
                    NETGEAR M4300 resilience
                  </SourceLink>
                  <SourceLink href="https://help.ui.com/hc/en-us/articles/32065480092951-UniFi-WiFi-SSID-and-AP-Settings-Overview">
                    Ubiquiti roaming behavior
                  </SourceLink>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="validation-heading">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <ShieldCheck className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
              <h2 id="validation-heading" className="mb-3 text-3xl font-bold text-foreground">Validate before buying or building</h2>
              <p className="mx-auto max-w-3xl text-muted-foreground">
                Vendor families do not guarantee feature parity. Confirm the exact SKU, hardware revision, firmware, license, and topology prerequisites.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "SonicWall",
                  body: "Separate WAN failover from firewall HA in the design. Verify HA eligibility, identical-model requirements, firmware alignment, and stateful-HA licensing.",
                },
                {
                  title: "NETGEAR",
                  body: "Confirm 802.1Q, static LAG, LACP, stacking, and redundant-power support against the exact model. Lower-cost managed models do not all support the same link features.",
                },
                {
                  title: "Ubiquiti",
                  body: "On a third-party NETGEAR switch, manually allow every required VLAN along the AP-to-gateway path. Ubiquiti recommends trunked AP uplinks for the relevant VLANs.",
                },
                {
                  title: "Mixed-vendor testing",
                  body: "Test failover, recovery, tag handling, native VLAN behavior, and management access in the homelab before treating a topology as deployable.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 flex items-center gap-2 font-bold text-foreground">
                    <Info className="h-4 w-4 text-primary" aria-hidden="true" />
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="sources-heading">
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 id="sources-heading" className="mb-3 text-2xl font-bold text-foreground">Verified standards and vendor references</h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Protocol and security claims come from IETF and NIST publications; hardware and service capability statements come
              from the manufacturers and providers; payment segmentation and device-approval claims come from the PCI Security
              Standards Council. Relative budget and failure-domain comparisons are disclosed design
              inferences from the components shown; no pricing claim is implied.
            </p>
            <ul className="grid gap-3 text-sm sm:grid-cols-2">
              <li><SourceLink href="https://www.rfc-editor.org/rfc/rfc3261.html">IETF: Session Initiation Protocol</SourceLink></li>
              <li><SourceLink href="https://www.rfc-editor.org/rfc/rfc3550.html">IETF: RTP and RTCP</SourceLink></li>
              <li><SourceLink href="https://www.rfc-editor.org/rfc/rfc8862.html">IETF: securing RTP media with SIP</SourceLink></li>
              <li><SourceLink href="https://csrc.nist.gov/pubs/sp/800/58/final">NIST: VoIP security considerations</SourceLink></li>
              <li><SourceLink href="https://www.pcisecuritystandards.org/standards/pci-dss/">PCI SSC: PCI DSS standard</SourceLink></li>
              <li><SourceLink href="https://www.pcisecuritystandards.org/document_library/">PCI SSC: scoping and segmentation guidance</SourceLink></li>
              <li><SourceLink href="https://www.pcisecuritystandards.org/assessors_and_solutions/pin_transaction_devices">PCI SSC: approved PIN transaction devices</SourceLink></li>
              <li><SourceLink href="https://help.nextiva.com/article/networking-guidelines">Nextiva: networking guidelines</SourceLink></li>
              <li><SourceLink href="https://www.nextiva.com/support/articles/how-to-set-up-sonicwall-with-nextiva.html">Nextiva: SonicWall recommendations</SourceLink></li>
              <li><SourceLink href="https://www.nextiva.com/resources/voip-speed-test.html">Nextiva: network readiness test</SourceLink></li>
              <li><SourceLink href="https://www.sonicwall.com/support/knowledge-base/kA1VN0000000Fla0AE">SonicWall: VoIP firewall practices</SourceLink></li>
              <li><SourceLink href="https://www.sonicwall.com/support/technical-documentation/docs/sonicos-7-0.1-system/Content/Interfaces/interfaces-subinterfaces.htm">SonicWall: VLAN subinterfaces</SourceLink></li>
              <li><SourceLink href="https://www.sonicwall.com/support/technical-documentation/docs/sonicos-7-1-system/Content/Failover_LB/faliover-lb.htm">SonicWall: WAN failover</SourceLink></li>
              <li><SourceLink href="https://www.sonicwall.com/support/technical-documentation/docs/sonicos-7-1-high_availability/Content/Topics/High_Availability/Active_Standby_Active_DPI/supported-platform-licensing-ha.htm">SonicWall: HA support table</SourceLink></li>
              <li><SourceLink href="https://kb.netgear.com/30918/How-to-configure-an-802-1Q-VLAN-on-a-NETGEAR-Web-Managed-Plus-Switch-using-the-web-interface">NETGEAR: 802.1Q VLAN configuration</SourceLink></li>
              <li><SourceLink href="https://kb.netgear.com/000044355/What-is-link-aggregation-and-how-do-I-set-it-up-in-Insight">NETGEAR: LAG and LACP</SourceLink></li>
              <li><SourceLink href="https://www.downloads.netgear.com/files/GDC/datasheet/en/M4300.pdf">NETGEAR: M4300 datasheet</SourceLink></li>
              <li><SourceLink href="https://help.ui.com/hc/en-us/articles/26136823938583-Creating-UniFi-WiFi-SSIDs">Ubiquiti: SSIDs and VLAN uplinks</SourceLink></li>
              <li><SourceLink href="https://help.ui.com/hc/en-us/articles/32065480092951-UniFi-WiFi-SSID-and-AP-Settings-Overview">Ubiquiti: AP and roaming settings</SourceLink></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-background/10 bg-foreground py-8 text-background/60" role="contentinfo">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="font-bold text-xl text-background">Paulino Tech | 2026</div>
          <nav aria-label="Footer navigation">
            <Link href="/sitemap" className="text-background/70 underline transition-colors hover:text-background">Sitemap</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
