import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Cpu, Github, Laptop, Linkedin, Mail, Network, ShieldCheck } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="bg-background">
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
                  Keeping SMBs <span className="text-primary">Secure & Connected</span> Through Expert IT Solutions
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  I specialize in IT infrastructure, cybersecurity, and network management for small and medium-sized businesses. 
                  Let&apos;s build resilient systems that protect your business and enable growth.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button size="lg" asChild>
                    <Link href="/homelab">
                      Explore My Home Lab
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/vendor-tooling">
                      Vendor Tooling
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/managed-os">
                      Managed Operating Systems
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/osint">
                      OSINT Resources
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/ai-tooling">
                      AI Tooling
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-primary-foreground">
                  <h2 id="focus-heading" className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/80">
                    Where I focus
                  </h2>
                  <ul className="mt-6 space-y-6 list-none" aria-labelledby="focus-heading">
                    <li className="flex items-start gap-4">
                      <Network className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold">Network &amp; Infrastructure</h3>
                        <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">
                          Segmented VLANs, firewall policy, managed switching, and Wi-Fi that keep guest, voice, and
                          payment traffic apart.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold">Identity &amp; Email Security</h3>
                        <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">
                          Hybrid Active Directory and SSO, MFA architecture, and SPF, DKIM, DMARC, MTA-STS, and DLP
                          enforcement.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Laptop className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold">Endpoints &amp; Continuity</h3>
                        <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">
                          Managed operating systems, reviewed hardware onboarding, monitoring, and documented recovery
                          paths.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-card" aria-labelledby="about-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From healthcare to tech: A journey of continuous learning and growth
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">My Journey into Tech</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My career path is unconventional. I started in medicine as a Certified Nursing Assistant, helping patients
                directly in healthcare. However, I felt drawn to technology and made the leap into IT. That decision changed
                everything. I landed my first IT role and grew rapidly within it—not because it was easy, but because I was
                committed to learning every aspect of the business.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Working at a growing SMB meant my role evolved alongside the company. What started as general IT support
                expanded to include infrastructure, system administration, networking, and ultimately cybersecurity. This
                organic growth exposed me to the full technology stack, teaching me how every piece connects and why security
                and infrastructure matter just as much as code.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Core Expertise</h4>
                <ul className="flex flex-wrap gap-2" aria-label="Core expertise areas">
                  <li><Badge variant="secondary">Networking</Badge></li>
                  <li><Badge variant="secondary">Cybersecurity</Badge></li>
                  <li><Badge variant="secondary">Systems Admin</Badge></li>
                  <li><Badge variant="secondary">Infrastructure</Badge></li>
                  <li><Badge variant="secondary">Cloud Security</Badge></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Home Lab Section */}
        <section id="homelab" className="bg-muted py-20" aria-labelledby="homelab-heading">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Hands-on environment</Badge>
              <h2 id="homelab-heading" className="mb-5 text-3xl font-bold text-foreground sm:text-4xl">
                Built to test before production
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                My lab combines a Ryzen 9 workstation, Proxmox VE, Windows, an RTX 3090 for local LLMs, Raspberry Pi
                nodes, an ARRIS SURFboard modem, SonicWall firewall, NETGEAR switch, Ubiquiti U6 Pro Wi-Fi access point,
                and embedded hardware. It gives me a controlled place to connect endpoint, server, identity, and network
                decisions the way an SMB has to.
              </p>
              <p className="mb-7 leading-relaxed text-muted-foreground">
                The public view is intentionally sanitized, and the lab stays separate from client and production data.
              </p>
              <Button asChild>
                <Link href="/homelab">
                  Tour the home lab
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { icon: Cpu, title: "Compute", detail: "Windows, Proxmox, virtual systems, and local AI" },
                { icon: Network, title: "Network", detail: "SURFboard cable edge, SonicWall policy, NETGEAR switching, and UniFi Wi-Fi" },
                { icon: Bot, title: "Edge", detail: "Raspberry Pi and Arduino services, telemetry, and automation" },
              ].map((item) => (
                <Card key={item.title} className="border-border bg-card">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deployments Section */}
        <section id="deployments" className="py-20 bg-card" aria-labelledby="deployments-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="deployments-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Deployment Experience</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                High-level infrastructure and security work with sensitive production details intentionally withheld
              </p>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/deployments">Explore sanitized network, VoIP, and Nextiva deployment patterns</Link>
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <article>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-card h-full">
                  <div className="relative h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center" aria-hidden="true">
                    <div className="text-primary-foreground text-6xl font-bold">AD</div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Hybrid Active Directory Deployment</CardTitle>
                    <CardDescription>
                      Enterprise-grade identity management with on-premise and cloud integration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
                      <li><Badge variant="outline">Active Directory</Badge></li>
                      <li><Badge variant="outline">Microsoft Intune</Badge></li>
                      <li><Badge variant="outline">Samba/SSSD</Badge></li>
                      <li><Badge variant="outline">SSO</Badge></li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li>Hybrid cloud and on-premise Active Directory integration</li>
                      <li>Secure SSO implementation with vulnerability mitigation</li>
                      <li>Shared workstation management and access control</li>
                    </ul>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-card h-full">
                  <div className="relative h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center" aria-hidden="true">
                    <div className="text-primary-foreground text-6xl font-bold" role="img" aria-label="Shield icon">&#128737;</div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Email Security Infrastructure</CardTitle>
                    <CardDescription>
                      Comprehensive email security with advanced threat protection and compliance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
                      <li><Badge variant="outline">DKIM/SPF/DMARC</Badge></li>
                      <li><Badge variant="outline">MTA-STS</Badge></li>
                      <li><Badge variant="outline">DLP</Badge></li>
                      <li><Badge variant="outline">GoPhish</Badge></li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li>DKIM, SPF, DMARC, and MTA-STS configuration</li>
                      <li>Automated DMARC report concatenator for compliance review</li>
                      <li>Email attachment filtering with whitelisted financial partners</li>
                      <li>GoPhish phishing simulations for security awareness</li>
                    </ul>
                    <Button variant="link" className="mt-4 h-auto p-0" asChild>
                      <Link href="/email-security">
                        Explore the email security architecture
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-card h-full">
                  <div className="relative h-48 bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center" aria-hidden="true">
                    <div className="text-primary-foreground text-6xl font-bold" role="img" aria-label="Globe icon">&#127760;</div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Network Infrastructure</CardTitle>
                    <CardDescription>
                      Segmented network architecture with enterprise-grade equipment and security
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
                      <li><Badge variant="outline">SonicWall</Badge></li>
                      <li><Badge variant="outline">Netgear</Badge></li>
                      <li><Badge variant="outline">Ubiquiti</Badge></li>
                      <li><Badge variant="outline">VLANs</Badge></li>
                      <li><Badge variant="outline">VoIP/SIP</Badge></li>
                      <li><Badge variant="outline">Nextiva</Badge></li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li>SonicWall routers with vendor-specific configurations</li>
                      <li>Netgear switches and Ubiquiti access points</li>
                      <li>VLAN segmentation with guest WiFi isolation</li>
                      <li>Nextiva-aware voice VLAN, SIP/RTP, NAT, QoS, and firewall policy</li>
                      <li>VPN configured for off-premise surveillance access</li>
                    </ul>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-card h-full">
                  <div className="relative h-48 bg-gradient-to-br from-accent/80 to-primary/80 flex items-center justify-center" aria-hidden="true">
                    <div className="text-primary-foreground text-6xl font-bold" role="img" aria-label="Lock icon">&#128274;</div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Hardware Security & Onboarding</CardTitle>
                    <CardDescription>
                      Secure equipment deployment with isolation testing and monitoring protocols
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
                      <li><Badge variant="outline">Security Review</Badge></li>
                      <li><Badge variant="outline">Isolated VLAN</Badge></li>
                      <li><Badge variant="outline">OS Replacement</Badge></li>
                      <li><Badge variant="outline">Monitoring</Badge></li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li>Hardware review before onboarding on isolated VLAN</li>
                      <li>OS replacement and 24-hour monitoring period</li>
                      <li>Google Advanced Protection Program enforcement</li>
                      <li>Context-aware DLP for data loss prevention</li>
                    </ul>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-foreground text-background" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Secure Your Infrastructure</h2>
              <p className="text-xl text-background/70 max-w-3xl mx-auto">
                Have a network, identity, or email security question worth a second opinion? Reach out and we&apos;ll
                talk it through.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-background/70 mb-8 leading-relaxed">
                  Whether you&apos;re an SMB looking to secure your infrastructure or need expert IT guidance, I&apos;m here to help you succeed.
                </p>

                <address className="space-y-4 not-italic">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Email</p>
                      <a href="mailto:alex@paulinotech.com" className="text-background/70 hover:text-background transition-colors underline">
                        alex@paulinotech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                      <Github className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">GitHub</p>
                      <a 
                        href="https://github.com/PaulinoTech1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-background/70 hover:text-background transition-colors underline"
                      >
                        @PaulinoTech1
                        <span className="sr-only"> (opens in new tab)</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                      <Linkedin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/alexander-paulino-066b3b32a?fromQR=1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-background/70 hover:text-background transition-colors underline"
                      >
                        Alexander Paulino
                        <span className="sr-only"> (opens in new tab)</span>
                      </a>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
