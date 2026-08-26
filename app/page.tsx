'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Users, Github, Linkedin, Mail, ExternalLink, Star, Menu, X, Cpu, Network, Bot } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Skip Link for Keyboard Navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <header>
        <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50" aria-label="Main navigation">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="font-bold text-xl text-foreground">
                <span className="sr-only">Paulino Tech Home</span>
                <span aria-hidden="true">Paulino Tech</span>
              </a>
            
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-4 text-sm">
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
                <a href="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </a>
                <a href="/deployments" className="text-muted-foreground hover:text-foreground transition-colors">
                  Deployments
                </a>
                <a href="/homelab" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home Lab
                </a>
                <a href="/consulting" className="text-muted-foreground hover:text-foreground transition-colors">
                  Consulting
                </a>
                <a href="/email-security" className="text-muted-foreground hover:text-foreground transition-colors">
                  Email Security
                </a>
                <a href="/osint" className="text-muted-foreground hover:text-foreground transition-colors">
                  OSINT
                </a>
                <a href="/ai-tooling" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Tooling
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div id="mobile-menu" className="lg:hidden py-4 space-y-1 border-t border-border bg-card">
                <a
                  href="#about"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-md mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/experience"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-md mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="/deployments"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-md mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Deployments
                </a>
                <a
                  href="/homelab"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-md mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home Lab
                </a>
                <a
                  href="/consulting"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-md mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Consulting
                </a>
                <a
                  href="/email-security"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-md mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Email Security
                </a>
                <a
                  href="/osint"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-md mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  OSINT
                </a>
                <a
                  href="/ai-tooling"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-md mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AI Tooling
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded-md mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </nav>
      </header>

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
                    <a href="/homelab">
                      Explore My Home Lab
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/vendor-tooling">
                      Vendor Tooling
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/managed-os">
                      Managed Operating Systems
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/osint">
                      OSINT Resources
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/ai-tooling">
                      AI Tooling
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative" aria-hidden="true">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-primary-foreground">
                  <ul className="space-y-4 list-none">
                    <li className="flex items-center gap-3">
                      <Code className="h-6 w-6" aria-hidden="true" />
                      <span className="font-semibold">Modern Tech Stack</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Zap className="h-6 w-6" aria-hidden="true" />
                      <span className="font-semibold">Lightning Fast Development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="h-6 w-6" aria-hidden="true" />
                      <span className="font-semibold">Developer-Focused Solutions</span>
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
                <a href="/homelab">
                  Tour the home lab
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
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
                <a href="/deployments">Explore sanitized network, VoIP, and Nextiva deployment patterns</a>
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
                      <a href="/email-security">
                        Explore the email security architecture
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </a>
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
              <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Build Something Amazing</h2>
              <p className="text-xl text-background/70 max-w-3xl mx-auto">
                Ready to accelerate your development process? Let&apos;s discuss your project.
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

      {/* Footer */}
      <footer className="bg-foreground text-background/60 py-8 border-t border-background/10" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="font-bold text-xl text-background">Paulino Tech | 2026</div>
              <nav aria-label="Footer navigation">
                <ul className="flex gap-4">
                  <li>
                    <a href="/sitemap" className="text-background/70 hover:text-background transition-colors underline">
                      Sitemap
                    </a>
                  </li>
                  <li>
                    <a href="/newsletter" className="text-background/70 hover:text-background transition-colors underline">
                      Newsletter
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <p className="text-center md:text-right text-background/70">
              Resilience made simple, connect on your terms!
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
