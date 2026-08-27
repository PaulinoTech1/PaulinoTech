import type { ReactNode } from "react"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Cable,
  CheckCircle2,
  CircuitBoard,
  Cpu,
  ExternalLink,
  HardDrive,
  Info,
  Laptop,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "My Home Lab",
  description:
    "A sanitized look at the Windows, Proxmox, ARRIS SURFboard, SonicWall, NETGEAR, Ubiquiti, and local-AI equipment I use to model SMB infrastructure, plus ARM and microcontroller boards chosen to emulate IoT and alarm-class devices.",
  path: "/homelab",
})

function EquipmentCard({
  icon: Icon,
  label,
  title,
  children,
}: {
  icon: typeof Cpu
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <Card className="h-full border-border bg-card shadow-sm">
      <CardHeader>
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10" aria-hidden="true">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{label}</p>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

function TopologyNode({
  title,
  detail,
  highlighted = false,
}: {
  title: string
  detail: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-4 text-center shadow-sm ${
        highlighted ? "border-primary/40 bg-primary/10" : "border-border bg-card"
      }`}
    >
      <p className="font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
    </div>
  )
}

function TopologyArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-2 text-muted-foreground" aria-hidden="true">
      {label ? <span className="mb-1 text-[11px] font-bold uppercase tracking-widest">{label}</span> : null}
      <ArrowDown className="h-5 w-5" />
    </div>
  )
}

const scenarios = [
  {
    icon: ShieldCheck,
    title: "Wired, wireless & firewall policy",
    description:
      "Build wired and wireless test zones, evaluate guest and client isolation, restrict east-west traffic, and validate least-privilege rules where the selected interfaces and topology support them.",
  },
  {
    icon: Laptop,
    title: "Identity & endpoint hardening",
    description:
      "Stand up directory-service labs, separate user and administrative roles, test policy changes, and coordinate Windows endpoint controls with server protection.",
  },
  {
    icon: Server,
    title: "Virtual systems & recovery",
    description:
      "Use Proxmox VE to create disposable Windows and Linux systems, test service dependencies, take snapshots, and rehearse rollback before a change reaches production.",
  },
  {
    icon: Network,
    title: "Logging & incident response",
    description:
      "Generate known activity, centralize useful logs, tune baselines, and walk through detection, containment, evidence preservation, and recovery without waiting for a real incident.",
  },
  {
    icon: Bot,
    title: "Private AI experimentation",
    description:
      "Use the RTX 3090 for local LLM inference and automation experiments where model choice, resource use, data handling, and failure modes can be observed directly.",
  },
  {
    icon: CircuitBoard,
    title: "Linux & embedded testing",
    description:
      "Use Raspberry Pi and Arduino systems for small services, serial telemetry, automation, and authorized security validation across resource-constrained devices.",
  },
]

export default function HomeLabPage() {
  return (
    <div className="bg-background">
      <main id="main-content">
        <section className="px-4 pb-8 pt-24 sm:px-6 lg:px-8" aria-labelledby="disclosure-heading">
          <div className="mx-auto flex max-w-6xl gap-4 rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-6" role="note">
            <Info className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 id="disclosure-heading" className="mb-2 text-lg font-bold text-foreground">Sanitized lab view</h2>
              <p className="leading-relaxed text-muted-foreground">
                This is my test environment, not a customer topology or production certification. I keep client and
                production data out of the lab, isolate authorized security testing, and intentionally omit addressing,
                credentials, serial numbers, remote-access paths, management interfaces, and exact firewall rules.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 pt-10 sm:px-6 lg:px-8" aria-labelledby="page-heading">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">My home lab</Badge>
              <h1 id="page-heading" className="mb-6 text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
                A compact lab for rehearsing <span className="text-primary">real SMB problems</span>
              </h1>
              <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">
                A custom workstation, cable modem, firewall, switch, Wi-Fi access point, Raspberry Pi nodes, and embedded
                hardware give me a safe place to build, break, observe, and restore common single-site small-business
                infrastructure patterns before those decisions affect users.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#equipment">
                    See the equipment
                    <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/deployments">
                    View sanitized designs
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="border-primary/30 bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Network className="h-6 w-6 text-primary" aria-hidden="true" />
                  What this lab represents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {[
                    "A Windows workstation or Proxmox virtualization host",
                    "A DOCSIS cable edge, business firewall, and wired and wireless access layer",
                    "Windows, Linux, ARM, and embedded endpoints",
                    "Security, observability, automation, and recovery workflows",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                  It can model many common SMB scenarios, but it does not pretend to reproduce every organization&apos;s
                  scale, staffing, legacy systems, regulatory duties, availability requirements, or production pressure.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="equipment" className="bg-muted px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="equipment-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 id="equipment-heading" className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Equipment inventory</h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
                The hardware is useful because each component supports a repeatable lab role. Outcomes still depend on
                configuration, test design, operational maturity, and whether anyone acts on the evidence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <EquipmentCard icon={Cpu} label="Core compute" title="Custom-built workstation">
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li><strong className="text-foreground">CPU:</strong> AMD Ryzen 9 5900X</li>
                  <li><strong className="text-foreground">Memory:</strong> 64 GB DDR4</li>
                  <li><strong className="text-foreground">GPU:</strong> NVIDIA GeForce RTX 3090 for local LLM inference</li>
                  <li><strong className="text-foreground">Boot environments:</strong> Windows and Proxmox VE</li>
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  The same machine can serve as a Windows workstation or a virtualization host. Because it is dual-boot,
                  those host environments do not run on this hardware at the same time.
                </p>
              </EquipmentCard>

              <EquipmentCard icon={HardDrive} label="Storage" title="Multiple storage tiers">
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li><strong className="text-foreground">1 TB</strong> Samsung 980 NVMe SSD</li>
                  <li><strong className="text-foreground">2 TB</strong> Samsung 870 QVO SATA SSD</li>
                  <li><strong className="text-foreground">Additional</strong> Crucial P3 Plus NVMe SSD</li>
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  Multiple storage devices give VM disks, local model files, test datasets, and working systems room to
                  be separated instead of competing for one drive. Proxmox snapshots support testing and rollback; they
                  are not presented here as a replacement for an independent backup.
                </p>
              </EquipmentCard>

              <EquipmentCard icon={Network} label="Network core" title="Cable edge, firewall, and network access">
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li><strong className="text-foreground">Modem:</strong> ARRIS SURFboard SB8200 DOCSIS 3.1 cable modem</li>
                  <li><strong className="text-foreground">Firewall:</strong> SonicWall TZ270</li>
                  <li><strong className="text-foreground">Switch:</strong> NETGEAR ProSAFE JGS524 24-port Gigabit Ethernet switch</li>
                  <li><strong className="text-foreground">Wireless:</strong> Ubiquiti UniFi U6 Pro (U6-Pro) Wi-Fi 6 access point</li>
                  <li><strong className="text-foreground">Host networking:</strong> PCIe Ethernet network interface card</li>
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  The U6 Pro adds wireless-policy, guest-isolation, and Wi-Fi client testing. It requires PoE, but its
                  power source is not shown because an injector or PoE switch path was not specified.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The NIC&apos;s exact controller, speed, and port configuration are not named because the marketplace
                  metadata does not provide a model I can verify reliably. The original{` `}
                  <a
                    href="https://www.newegg.com/p/14U-00T0-00RF9?Item=9SIC7ZSM1J3626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  >
                    Newegg listing
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>{` `}
                  is preserved as a reference rather than turning a guess into a specification.
                </p>
              </EquipmentCard>

              <EquipmentCard icon={CircuitBoard} label="Edge & embedded" title="Two Pi nodes and an Arduino">
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li><strong className="text-foreground">Raspberry Pi 5:</strong> Kali Linux for authorized lab testing</li>
                  <li><strong className="text-foreground">Raspberry Pi 5:</strong> general-purpose Raspberry Pi/Linux node</li>
                  <li><strong className="text-foreground">Development board:</strong> Arduino Uno</li>
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  Neither board is here as a hobby project. Both were chosen because they match the architecture of
                  device classes an SMB actually has to secure, which is explained below. The Arduino is not presented
                  as a network endpoint because no Ethernet or Wi-Fi interface was specified.
                </p>
              </EquipmentCard>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground">Why these two boards specifically</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                An x86 virtual machine is a poor stand-in for an embedded device. It has the wrong instruction set, far
                more resources than the real thing, and none of the constraints that make these devices hard to secure.
                Both boards were picked to close that gap.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10" aria-hidden="true">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Raspberry Pi: IoT emulation on matching architecture</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Effectively every IoT endpoint I have worked with runs an ARM processor, and the Pi runs the same
                      architecture on comparable resources. That makes it a credible stand-in for the class rather than
                      a rough approximation.
                    </p>
                    <p className="font-medium text-foreground">Device classes modelled on it:</p>
                    <ul className="space-y-1.5 pl-4">
                      <li className="list-disc">Network printers and multifunction devices</li>
                      <li className="list-disc">IP security cameras</li>
                      <li className="list-disc">Digital video recorders</li>
                      <li className="list-disc">Wi-Fi connected thermostats</li>
                    </ul>
                    <p>
                      Those four cover most of what actually turns up on a small business network without anybody
                      deciding it should be there. They tend to ship with default credentials, no practical patch path,
                      and a habit of reaching outbound to a vendor cloud. Questions worth asking of a real one, such as
                      what it contacts on first boot, how it behaves confined to a segmented VLAN, and what breaks when
                      its outbound path is blocked, get answered here rather than in production.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10" aria-hidden="true">
                      <CircuitBoard className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Arduino: the tier below Linux</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      Alarm panels, door controllers, and sensor boards generally sit a tier below anything running a
                      general-purpose operating system. They are microcontroller-class: no shell, no package manager, no
                      way to install an agent, and often no means of patching in the field.
                    </p>
                    <p>
                      The Arduino closely represents that tier, which makes it the right place to reason about what can
                      and cannot be done to secure a device with no room for the tooling every other control assumes.
                      For that class the answer is usually network placement and physical control rather than anything
                      installed on the device.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="topology-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <Cable className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
              <h2 id="topology-heading" className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Conceptual lab topology</h2>
              <p className="mx-auto max-w-3xl leading-relaxed text-muted-foreground">
                This shows equipment roles, not live addressing, cable paths, VLAN IDs, or firewall policy. Logical
                segmentation is used only where the selected interfaces and switch capabilities support it.
              </p>
            </div>

            <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-muted/60 p-5 sm:p-8">
              <TopologyNode title="Cable service handoff" detail="Provider coax connection" />
              <TopologyArrow label="DOCSIS link" />
              <TopologyNode title="ARRIS SURFboard SB8200" detail="DOCSIS 3.1 cable modem without integrated Wi-Fi" highlighted />
              <TopologyArrow label="Ethernet handoff" />
              <TopologyNode title="SonicWall TZ270" detail="Firewall policy, segmentation, VPN, and traffic visibility" highlighted />
              <TopologyArrow label="wired access" />
              <TopologyNode title="NETGEAR ProSAFE JGS524" detail="24-port Gigabit Ethernet access layer" highlighted />
              <TopologyArrow label="isolated test roles" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <TopologyNode title="Workstation / Proxmox" detail="Windows workflows or virtual lab services, depending on boot environment" />
                <TopologyNode title="Kali Pi" detail="Authorized validation from an isolated security-testing node" />
                <TopologyNode title="General-purpose Pi" detail="Linux services, monitoring, and automation" />
                <TopologyNode title="Ubiquiti UniFi U6 Pro" detail="Wi-Fi 6 access point; PoE power path intentionally not shown" />
              </div>
              <TopologyArrow label="local bench connection" />
              <TopologyNode title="Arduino Uno" detail="USB or serial experiments unless a separate network interface is added" />
            </div>
          </div>
        </section>

        <section className="bg-card px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="scenarios-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 id="scenarios-heading" className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">What I can simulate and validate</h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
                The goal is not to collect hardware. It is to connect endpoint, server, identity, network, and human
                considerations in one controlled environment.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {scenarios.map((scenario) => (
                <Card key={scenario.title} className="border-border bg-background">
                  <CardHeader>
                    <scenario.icon className="mb-2 h-7 w-7 text-primary" aria-hidden="true" />
                    <CardTitle className="text-xl">{scenario.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-muted-foreground">
                    {scenario.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="method-heading">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Badge variant="secondary" className="mb-4">How I use it</Badge>
              <h2 id="method-heading" className="mb-5 text-3xl font-bold text-foreground sm:text-4xl">Test the decision, not just the tool</h2>
              <p className="leading-relaxed text-muted-foreground">
                A tool only creates value when its alerts, controls, and recovery steps fit the people operating it. Lab
                work lets me check configuration behavior and operational handoffs together, while keeping claims tied to
                evidence rather than a product feature list.
              </p>
            </div>
            <ol className="space-y-4">
              {[
                ["1", "Scope and isolate", "Define the system, data, trust boundary, and success criteria before creating traffic or changing controls."],
                ["2", "Baseline normal activity", "Observe expected behavior first so an alert can be evaluated against something meaningful."],
                ["3", "Make one controlled change", "Apply a policy, configuration, service, or simulated failure with a documented rollback path."],
                ["4", "Validate and recover", "Confirm the intended control works, check side effects, review the evidence, and prove the environment can return to a known state."],
                ["5", "Document the boundary", "Record what the test demonstrates, what it does not demonstrate, and which assumptions must be rechecked in a real organization."],
              ].map(([number, title, description]) => (
                <li key={number} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground" aria-hidden="true">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-foreground px-4 py-20 text-background sm:px-6 lg:px-8" aria-labelledby="next-heading">
          <div className="mx-auto max-w-4xl text-center">
            <h2 id="next-heading" className="mb-4 text-3xl font-bold sm:text-4xl">From lab pattern to business decision</h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-background/70">
              Explore the sanitized designs this equipment supports, the email controls that coordinate with endpoints,
              or the local-AI tradeoffs I evaluate on the RTX 3090.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/deployments">Deployment patterns</Link>
              </Button>
              <Button variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background" asChild>
                <Link href="/email-security">Email security</Link>
              </Button>
              <Button variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background" asChild>
                <Link href="/ai-tooling">AI tooling</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
