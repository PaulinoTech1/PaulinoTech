import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createPageMetadata } from "@/lib/metadata"
import { Home, Briefcase, Wrench, Search, BrainCircuit } from "lucide-react"

export const metadata = createPageMetadata({
  title: "Site Map",
  description:
    "Every page on Paulino Tech in one place, grouped by experience, tools and systems, security and intelligence, and AI and automation.",
  path: "/sitemap",
})

export default function SitemapPage() {
  const sitePages = [
    {
      category: 'Main',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page with overview of services' },
        { name: 'About', path: '/#about', description: 'Learn about my journey from healthcare to tech' },
        { name: 'Deployments', path: '/deployments', description: 'Compare sanitized network, VoIP, and payment terminal patterns, including Nextiva, SIP/RTP, voice VLAN, segmented Fiserv and PAX card terminals, firewall, budget, and resilience tradeoffs' },
        { name: 'Consulting', path: '/consulting', description: 'Security consulting services including OSINT and identity protection' },
        { name: 'Newsletter', path: '/newsletter', description: 'Current cybersecurity and infrastructure reporting from verified live RSS and Atom feeds' },
        { name: 'Contact', path: '/#contact', description: 'Get in touch via email, GitHub, or LinkedIn' },
      ],
    },
    {
      category: 'Experience & Work',
      icon: Briefcase,
      pages: [
        { name: 'Experience', path: '/experience', description: 'Detailed SMB IT implementations and projects' },
        { name: 'My Home Lab', path: '/homelab', description: 'Sanitized equipment, topology, and SMB scenarios spanning Proxmox, Windows, local AI, Raspberry Pi, ARRIS cable service, SonicWall, NETGEAR switching, and Ubiquiti Wi-Fi' },
      ],
    },
    {
      category: 'Tools & Systems',
      icon: Wrench,
      pages: [
        { name: 'Vendor Tooling', path: '/vendor-tooling', description: 'Hardware and vendor-specific tools expertise' },
        { name: 'Managed Operating Systems', path: '/managed-os', description: 'Operating systems deployment and management' },
      ],
    },
    {
      category: 'Security & Intelligence',
      icon: Search,
      pages: [
        { name: 'Email Security', path: '/email-security', description: 'Layered email controls plus hands-on Google Workspace, Zoho Mail, and Proton Mail operational experience' },
        { name: 'OSINT Resources', path: '/osint', description: 'Defensive tools for exposure monitoring, credential security, asset context, and network detection' },
      ],
    },
    {
      category: 'AI & Automation',
      icon: BrainCircuit,
      pages: [
        { name: 'AI Tooling', path: '/ai-tooling', description: 'A regularly reviewed guide to coding agents, research tools, private data, and local models' },
      ],
    },
  ]

  return (
    <div className="bg-background">
      <main id="main-content">
        {/* Sitemap Content */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="page-heading">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 id="page-heading" className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Site Map</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Navigate through all pages and sections of Paulino Tech
              </p>
            </div>

            {/* Sitemap Categories */}
            <div className="space-y-8">
              {sitePages.map((section) => (
                <Card key={section.category} className="border-2 border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <section.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-2xl text-foreground">{section.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <nav aria-label={`${section.category} pages`}>
                      <ul className="grid md:grid-cols-2 gap-4 list-none">
                        {section.pages.map((page) => (
                          <li key={page.path}>
                            <Link href={page.path}
                              className="block p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                            >
                              <span className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 block">
                                {page.name}
                              </span>
                              <span className="text-sm text-muted-foreground">{page.description}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <nav className="mt-16 pt-8 border-t border-border" aria-labelledby="quick-links-heading">
              <h2 id="quick-links-heading" className="text-2xl font-bold text-foreground mb-6 text-center">Quick Links</h2>
              <ul className="flex flex-wrap justify-center gap-4 list-none">
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/#about">About Me</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/experience">Experience</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/homelab">Home Lab</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/vendor-tooling">Vendor Tooling</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/managed-os">Managed OS</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/deployments">Deployments</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/consulting">Consulting</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/email-security">Email Security</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/osint">OSINT Resources</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/ai-tooling">AI Tooling</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/newsletter">Newsletter</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <Link href="/#contact">Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>
    </div>
  )
}
