import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft, Briefcase, Server, Wrench, Mail } from "lucide-react"

export default function SitemapPage() {
  const sitePages = [
    {
      category: 'Main',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page with overview of services' },
        { name: 'About', path: '/#about', description: 'Learn about my journey from healthcare to tech' },
        { name: 'Deployments', path: '/#deployments', description: 'View enterprise deployment implementations' },
        { name: 'Consulting', path: '/consulting', description: 'Security consulting services including OSINT and identity protection' },
        { name: 'Newsletter', path: '/newsletter', description: 'Curated technical articles on cybersecurity, networking, and identity protection' },
        { name: 'Contact', path: '/#contact', description: 'Get in touch via email, GitHub, or LinkedIn' },
      ],
    },
    {
      category: 'Experience & Work',
      icon: Briefcase,
      pages: [
        { name: 'Experience', path: '/experience', description: 'Detailed SMB IT implementations and projects' },
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
              <Button variant="outline" size="sm" asChild>
                <a href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  Back to Home
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </header>

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
                            <a
                              href={page.path}
                              className="block p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                            >
                              <span className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 block">
                                {page.name}
                              </span>
                              <span className="text-sm text-muted-foreground">{page.description}</span>
                            </a>
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
                    <a href="/#about">About Me</a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a href="/experience">Experience</a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a href="/vendor-tooling">Vendor Tooling</a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a href="/managed-os">Managed OS</a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a href="/#deployments">Deployments</a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a href="/consulting">Consulting</a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a href="/newsletter">Newsletter</a>
                  </Button>
                </li>
                <li>
                  <Button variant="outline" asChild>
                    <a href="/#contact">Contact</a>
                  </Button>
                </li>
              </ul>
            </nav>
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
                <a href="/sitemap" className="text-background/70 hover:text-background transition-colors underline" aria-current="page">
                  Sitemap
                </a>
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
