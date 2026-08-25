import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Network, 
  Shield, 
  Server, 
  Mail, 
  Camera, 
  Wifi, 
  Lock, 
  FileCheck, 
  AlertTriangle,
  ArrowLeft,
  Smartphone,
  HardDrive,
  Cloud
} from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <header>
        <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="font-bold text-xl text-foreground">
                <span className="sr-only">Paulino Tech Home</span>
                <span aria-hidden="true">Paulino Tech</span>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5" aria-labelledby="page-heading">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">SMB IT Solutions</Badge>
            <h1 id="page-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Enterprise-Grade Solutions for <span className="text-primary">Growing Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Real-world implementations securing and connecting small to medium-sized businesses with enterprise-level infrastructure, 
              advanced security protocols, and vendor-specific configurations.
            </p>
          </div>
        </section>

        {/* Network Infrastructure */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="network-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="network-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Network Infrastructure & Hardware</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Vendor-specific configurations and VLAN segmentation for optimal security and performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article>
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Network className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Network Architecture</CardTitle>
                    <CardDescription>Multi-VLAN segmentation with vendor-specific routing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>SonicWall routers with advanced security services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Netgear managed switches for VLAN segmentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Custom VLAN configurations for department isolation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Wifi className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Wireless Infrastructure</CardTitle>
                    <CardDescription>Secure wireless with guest separation and attestation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Ubiquiti UniFi access points for enterprise WiFi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Guest WiFi with separate VLAN for isolation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Network attestation for enhanced security</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Communications Systems</CardTitle>
                    <CardDescription>VoIP and unified communications infrastructure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Polycom Voice over IP phone systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Nextiva fax agent integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>QoS configurations for voice traffic priority</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* Security & Identity */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted" aria-labelledby="security-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="security-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Security & Identity Management</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive security layers from identity management to endpoint protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <article>
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow bg-card h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Identity & Access Control</CardTitle>
                    <CardDescription>Hybrid cloud and on-premise directory services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Hybrid cloud and on-premise Active Directory architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Shared workstation management with SSO vulnerability mitigation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Google Advanced Protection Program enforcement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Context-aware DLP policies</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow bg-card h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Endpoint Security</CardTitle>
                    <CardDescription>Multi-platform protection and monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Isolated VLAN for equipment onboarding and testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>OS replacement and 24-hour monitoring before deployment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Hardware review and security assessment protocol</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Encrypted attachments with financial partner whitelist</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* Email Security & Workspace */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="email-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="email-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Email Security & Workspace Management</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced email security protocols and Google Workspace deployment
              </p>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/email-security">Explore the email security architecture</Link>
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <article>
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Email Authentication & Security</CardTitle>
                    <CardDescription>Complete email security stack implementation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm">Authentication Protocols</h4>
                      <ul className="grid grid-cols-2 gap-2 list-none" aria-label="Email authentication protocols">
                        <li><Badge variant="secondary" className="justify-center w-full">DKIM</Badge></li>
                        <li><Badge variant="secondary" className="justify-center w-full">SPF</Badge></li>
                        <li><Badge variant="secondary" className="justify-center w-full">DMARC</Badge></li>
                        <li><Badge variant="secondary" className="justify-center w-full">MTA-STS</Badge></li>
                      </ul>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Automated DMARC report concatenator for streamlined review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Email attachment filtering and scanning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Google Workspace enterprise deployment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Security Awareness Training</CardTitle>
                    <CardDescription>Proactive phishing simulation and user education</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>GoPhish platform for phishing simulation campaigns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Regular security awareness training and testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>User behavior monitoring and improvement tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Incident response protocol development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* Surveillance & Remote Access */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted" aria-labelledby="surveillance-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="surveillance-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Surveillance & Remote Access</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Secure remote monitoring and VPN infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <article>
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow bg-card h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Camera className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Security Camera System</CardTitle>
                    <CardDescription>Enterprise surveillance with remote access</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Amcrest security camera deployment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>VPN configured for off-premise surveillance access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Secure on-premise camera network isolation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow bg-card h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Hybrid Infrastructure</CardTitle>
                    <CardDescription>Seamless cloud and on-premise integration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Hybrid cloud and on-premise Active Directory sync</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Secure VPN tunneling for remote workforce</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                        <span>Multi-factor authentication for remote access</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="achievements-heading">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
              <div className="text-center mb-12">
                <h2 id="achievements-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Key Technical Achievements</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Real-world implementations that demonstrate comprehensive IT expertise
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <article className="text-center p-6 bg-card rounded-xl border border-primary/10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <Network className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Network Segmentation</h3>
                  <p className="text-sm text-muted-foreground">Multi-VLAN architecture with guest isolation</p>
                </article>

                <article className="text-center p-6 bg-card rounded-xl border border-primary/10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <FileCheck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email Security</h3>
                  <p className="text-sm text-muted-foreground">Full authentication stack with automated reporting</p>
                </article>

                <article className="text-center p-6 bg-card rounded-xl border border-primary/10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <HardDrive className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Device Onboarding</h3>
                  <p className="text-sm text-muted-foreground">Isolated testing with 24-hour monitoring protocol</p>
                </article>

                <article className="text-center p-6 bg-card rounded-xl border border-primary/10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Endpoint Management</h3>
                  <p className="text-sm text-muted-foreground">Windows, mobile, and on-premise unified control</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-background/70 mb-8 leading-relaxed">
              Let&apos;s discuss how these enterprise-grade solutions can be tailored to your organization&apos;s needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="bg-transparent border-background/20 text-background hover:bg-background/10">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
