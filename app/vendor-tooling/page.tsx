'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function VendorTooling() {
  const vendors = [
    {
      category: 'Network Infrastructure',
      items: [
        { name: 'Netgear', model: 'GS Series Switches', type: 'Managed Switches' },
        { name: 'Netgear', model: 'ProSafe Series', type: 'ProSafe Managed Switches' },
        { name: 'Ubiquiti', model: 'UniFi Access Points', type: 'WiFi/Access Points' },
      ],
    },
    {
      category: 'Voice & Communication',
      items: [
        { name: 'Polycom', model: 'VVX Series', type: 'VoIP Phones' },
        { name: 'Nextiva', model: 'Fax Agent', type: 'Cloud Fax Service' },
      ],
    },
    {
      category: 'Security & Surveillance',
      items: [
        { name: 'Amcrest', model: 'UltraHD IP Cameras', type: 'Security Cameras' },
        { name: 'Amcrest', model: 'NVR Systems', type: 'Network Video Recorder' },
      ],
    },
    {
      category: 'Identity & Access Management',
      items: [
        { name: 'Microsoft', model: 'Active Directory', type: 'Directory Services' },
        { name: 'Microsoft', model: 'Intune', type: 'Mobile Device Management' },
        { name: 'Samba', model: 'AD DC', type: 'Open-Source AD Alternative' },
        { name: 'SSSD', model: 'System Security Services Daemon', type: 'Authentication' },
      ],
    },
    {
      category: 'Email & Communication Security',
      items: [
        { name: 'DKIM', model: 'DomainKeys Identified Mail', type: 'Email Authentication' },
        { name: 'SPF', model: 'Sender Policy Framework', type: 'Email Authentication' },
        { name: 'DMARC', model: 'Domain-based Message Authentication', type: 'Email Policy' },
        { name: 'MTA-STS', model: 'Mail Transfer Agent Strict Transport Security', type: 'Email Security' },
        { name: 'GoPhish', model: 'Phishing Framework', type: 'Security Awareness Training' },
      ],
    },
    {
      category: 'Cloud & Productivity',
      items: [
        { name: 'Google', model: 'Google Workspace', type: 'Productivity Suite' },
        { name: 'Google', model: 'Advanced Protection Program', type: 'Account Security' },
      ],
    },
    {
      category: 'Data Loss Prevention & Security',
      items: [
        { name: 'DLP', model: 'Context-Aware Data Loss Prevention', type: 'Data Protection' },
        { name: 'VPN', model: 'Virtual Private Network', type: 'Remote Access Security' },
        { name: 'Hardware Onboarding', model: 'Isolated VLAN Testing', type: 'Device Management' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Skip Link */}
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
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* Main Content */}
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                Vendor Tools & <span className="text-primary">Infrastructure Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A comprehensive overview of the vendor-specific platforms, tools, and hardware I&apos;ve deployed and managed across enterprise SMB environments.
              </p>
            </div>

            <div className="space-y-12">
              {vendors.map((section, idx) => (
                <section key={idx} aria-labelledby={`section-${idx}`}>
                  <h2 id={`section-${idx}`} className="text-2xl font-bold text-foreground mb-6">{section.category}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, itemIdx) => (
                      <article key={itemIdx}>
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card h-full">
                          <CardHeader>
                            <CardTitle className="text-lg text-card-foreground">{item.name}</CardTitle>
                            <CardDescription className="text-primary font-semibold">{item.model}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Badge variant="secondary">{item.type}</Badge>
                          </CardContent>
                        </Card>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Key Capabilities */}
            <section className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10" aria-labelledby="capabilities-heading">
              <h2 id="capabilities-heading" className="text-2xl font-bold text-foreground mb-8">Core Capabilities Across Tooling</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Network Configuration</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-none">
                    <li>Vendor-specific firewall configuration</li>
                    <li>VLAN segmentation and management</li>
                    <li>Guest WiFi isolation</li>
                    <li>QoS and traffic management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Identity & Access</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-none">
                    <li>Active Directory deployment</li>
                    <li>Intune MDM enrollment</li>
                    <li>SSO configuration</li>
                    <li>Group Policy management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Security & Monitoring</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-none">
                    <li>Email authentication protocols</li>
                    <li>Phishing simulations</li>
                    <li>Camera system management</li>
                    <li>VPN and remote access</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background/60 py-8 border-t border-background/10" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-background mb-4 md:mb-0">Paulino Tech</div>
            <p className="text-center md:text-right">
              2026 Paulino Tech. Helping SMBs secure and manage their infrastructure.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
