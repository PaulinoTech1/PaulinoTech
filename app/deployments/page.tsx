import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  CheckCircle2,
  CircleDollarSign,
  ExternalLink,
  Info,
  ShieldCheck,
  XCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Network Deployment Topologies | Paulino Tech",
  description:
    "Sanitized homelab network topology examples using SonicWall, NETGEAR, and Ubiquiti, with budget-led strengths, weaknesses, and vendor documentation.",
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
              Network Topologies, <span className="text-primary">Budget First</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
              Budget is usually the largest design constraint. These patterns show what changes as funding moves
              from essential connectivity, to segmentation, to duplicated failure paths—while staying within
              SonicWall, NETGEAR, and Ubiquiti tooling.
            </p>
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
                    aria-label="Internet connects to a SonicWall gateway with zones and VLAN subinterfaces, then through an 802.1Q trunk to a NETGEAR managed switch that separates staff, servers, cameras and IoT, and Ubiquiti staff and guest wireless networks."
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
                    <div className="grid gap-3 border-t border-dashed border-border pt-5 sm:grid-cols-2 lg:grid-cols-4">
                      <DiagramNode title="Staff VLAN" detail="Managed workstations" />
                      <DiagramNode title="Server VLAN" detail="Local services" />
                      <DiagramNode title="Camera / IoT VLAN" detail="Restricted devices" />
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
            <h2 id="sources-heading" className="mb-3 text-2xl font-bold text-foreground">Verified vendor references</h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Capability statements above come from the manufacturers. Relative budget and failure-domain comparisons are disclosed design inferences from the components shown; no pricing claim is implied.
            </p>
            <ul className="grid gap-3 text-sm sm:grid-cols-2">
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
