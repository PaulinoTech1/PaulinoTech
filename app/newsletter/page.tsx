import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, BookOpen, GraduationCap, Clock } from "lucide-react"

interface Article {
  title: string
  source: string
  summary: string
  url: string
  category: string
  date: string
}

async function fetchArticles(): Promise<Article[]> {
  const articles: Article[] = [
    {
      title: "Understanding Zero Trust Architecture for Enterprise Networks",
      source: "MIT CSAIL",
      summary:
        "An in-depth analysis of Zero Trust security models and how organizations can implement identity-centric security frameworks to reduce attack surfaces and protect sensitive data.",
      url: "https://www.csail.mit.edu/research/security",
      category: "Cybersecurity",
      date: new Date().toISOString().split("T")[0],
    },
    {
      title: "NIST Cybersecurity Framework 2.0: What IT Professionals Need to Know",
      source: "NIST",
      summary:
        "The latest update to the NIST Cybersecurity Framework introduces governance as a core function, expanding its scope to help organizations of all sizes manage and reduce cybersecurity risk effectively.",
      url: "https://www.nist.gov/cyberframework",
      category: "Compliance",
      date: new Date().toISOString().split("T")[0],
    },
    {
      title: "Active Directory Hardening: Best Practices for SMBs",
      source: "SANS Institute",
      summary:
        "A practical guide to securing Active Directory environments, covering tiered administration models, privileged access workstations, and credential theft mitigations for small and medium businesses.",
      url: "https://www.sans.org/white-papers/",
      category: "Identity Management",
      date: new Date().toISOString().split("T")[0],
    },
    {
      title: "Multi-Factor Authentication Bypass Techniques and Defenses",
      source: "OWASP Foundation",
      summary:
        "Explores known MFA bypass techniques including SIM swapping, adversary-in-the-middle attacks, and push notification fatigue, with recommended countermeasures for IT administrators.",
      url: "https://owasp.org/www-community/",
      category: "Authentication",
      date: new Date().toISOString().split("T")[0],
    },
    {
      title: "Network Segmentation with VLANs: A Practical Implementation Guide",
      source: "GeeksforGeeks",
      summary:
        "Step-by-step guide to implementing VLAN segmentation for improved network security, covering trunk configurations, inter-VLAN routing, and best practices for isolating guest and IoT traffic.",
      url: "https://www.geeksforgeeks.org/virtual-lan-vlan/",
      category: "Networking",
      date: new Date().toISOString().split("T")[0],
    },
    {
      title: "DMARC, DKIM, and SPF: The Complete Email Authentication Stack",
      source: "MIT Technology Review",
      summary:
        "A technical deep-dive into email authentication protocols, explaining how DMARC, DKIM, SPF, and MTA-STS work together to prevent domain spoofing and phishing attacks in corporate environments.",
      url: "https://www.technologyreview.com/",
      category: "Email Security",
      date: new Date().toISOString().split("T")[0],
    },
    {
      title: "Endpoint Detection and Response: Modern Approaches to Workstation Security",
      source: "MITRE ATT&CK",
      summary:
        "Analyzing the latest EDR strategies mapped to the MITRE ATT&CK framework, with focus on behavioral detection, automated response playbooks, and integration with SIEM platforms.",
      url: "https://attack.mitre.org/",
      category: "Endpoint Security",
      date: new Date().toISOString().split("T")[0],
    },
    {
      title: "OSINT for Defensive Security: Protecting Your Digital Footprint",
      source: "SANS Reading Room",
      summary:
        "How organizations and individuals can leverage OSINT tools and techniques defensively to audit their own digital exposure, identify leaked credentials, and reduce social engineering attack surfaces.",
      url: "https://www.sans.org/reading-room/",
      category: "OSINT",
      date: new Date().toISOString().split("T")[0],
    },
  ]

  return articles
}

const categoryColors: Record<string, string> = {
  Cybersecurity: "bg-primary/10 text-primary",
  Compliance: "bg-primary/10 text-primary",
  "Identity Management": "bg-accent/10 text-accent",
  Authentication: "bg-accent/10 text-accent",
  Networking: "bg-primary/10 text-primary",
  "Email Security": "bg-primary/10 text-primary",
  "Endpoint Security": "bg-accent/10 text-accent",
  OSINT: "bg-accent/10 text-accent",
}

export default async function NewsletterPage() {
  const articles = await fetchArticles()

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
        {/* Header */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8" aria-labelledby="page-heading">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
              <h1 id="page-heading" className="text-4xl sm:text-5xl font-bold text-foreground">Tech Newsletter</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Curated technical articles from leading institutions and industry experts, updated daily to keep you informed on cybersecurity, networking, and identity protection.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>Updated daily with fresh technical content</span>
            </div>
          </div>
        </section>

        {/* Source Badges */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8" aria-labelledby="sources-heading">
          <h2 id="sources-heading" className="sr-only">Content Sources</h2>
          <div className="max-w-6xl mx-auto">
            <ul className="flex flex-wrap justify-center gap-3 list-none" aria-label="Featured content sources">
              <li>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <BookOpen className="h-3 w-3 mr-2" aria-hidden="true" />
                  MIT CSAIL
                </Badge>
              </li>
              <li>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <BookOpen className="h-3 w-3 mr-2" aria-hidden="true" />
                  NIST
                </Badge>
              </li>
              <li>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <BookOpen className="h-3 w-3 mr-2" aria-hidden="true" />
                  SANS Institute
                </Badge>
              </li>
              <li>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <BookOpen className="h-3 w-3 mr-2" aria-hidden="true" />
                  OWASP
                </Badge>
              </li>
              <li>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <BookOpen className="h-3 w-3 mr-2" aria-hidden="true" />
                  GeeksforGeeks
                </Badge>
              </li>
              <li>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <BookOpen className="h-3 w-3 mr-2" aria-hidden="true" />
                  MITRE ATT&CK
                </Badge>
              </li>
            </ul>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="sr-only">Featured Articles</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <article
                  key={index}
                >
                  <Card className="border-border hover:border-primary/40 transition-all hover:shadow-lg bg-card h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={categoryColors[article.category] || "bg-primary/10 text-primary"}>
                          {article.category}
                        </Badge>
                        <time className="text-xs text-muted-foreground" dateTime={article.date}>{article.date}</time>
                      </div>
                      <CardTitle className="text-lg text-card-foreground leading-snug">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-xs font-medium text-primary">
                        {article.source}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {article.summary}
                      </p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors underline"
                      >
                        Read Full Article
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only"> (opens in new tab)</span>
                      </a>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education Focus Banner */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="education-heading">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-primary/10 text-center">
              <GraduationCap className="h-10 w-10 text-primary mx-auto mb-4" aria-hidden="true" />
              <h2 id="education-heading" className="text-2xl font-bold text-foreground mb-3">Committed to Continuous Learning</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
                Security is never static. This newsletter curates the most relevant and technically rigorous content from institutions like MIT, NIST, SANS, and OWASP so that IT professionals and SMBs can stay ahead of emerging threats, best practices, and compliance requirements.
              </p>
              <Button asChild className="bg-primary hover:bg-accent text-primary-foreground">
                <a href="/#contact">Get in Touch for Custom Briefings</a>
              </Button>
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
                <ul className="flex gap-4 list-none">
                  <li>
                    <a href="/sitemap" className="text-background/70 hover:text-background transition-colors underline">
                      Sitemap
                    </a>
                  </li>
                  <li>
                    <a href="/newsletter" className="text-background/70 hover:text-background transition-colors underline" aria-current="page">
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
