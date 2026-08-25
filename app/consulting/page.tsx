import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, UserCheck, Lock, Fingerprint, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function ConsultingPage() {
  const services = [
    {
      title: 'Personal OSINT Assessments',
      description: 'Comprehensive evaluation of your digital footprint and publicly available information to identify security vulnerabilities and privacy risks.',
      icon: UserCheck,
      features: [
        'Social media exposure analysis',
        'Data breach monitoring',
        'Public records assessment',
        'Digital footprint mapping',
        'Privacy risk identification',
      ],
    },
    {
      title: 'Digital Account Risk Hardening',
      description: 'Strengthen your online accounts against unauthorized access through comprehensive security audits and implementation of best practices.',
      icon: Shield,
      features: [
        'Account security audit',
        'Password policy implementation',
        'Session management review',
        'Recovery method verification',
        'Security setting optimization',
      ],
    },
    {
      title: 'Digital Identity Protection',
      description: 'Protect your digital identity from theft, impersonation, and unauthorized use through proactive monitoring and defense strategies.',
      icon: Fingerprint,
      features: [
        'Identity theft prevention strategies',
        'Personal information protection',
        'Dark web monitoring',
        'Credit monitoring setup',
        'Identity recovery planning',
      ],
    },
    {
      title: 'MFA Architecture',
      description: 'Design and implement robust multi-factor authentication systems tailored to your security requirements and user experience needs.',
      icon: Lock,
      features: [
        'MFA strategy development',
        'Authentication method selection',
        'Implementation guidance',
        'User adoption planning',
        'Backup authentication setup',
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
              <Button variant="ghost" asChild>
                <a href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Back to Home
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8" aria-labelledby="page-heading">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Security Consulting</Badge>
            <h1 id="page-heading" className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Consulting Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert guidance on digital security, identity protection, and authentication architecture to keep you and your organization secure.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <article key={index}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card h-full">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4" aria-hidden="true">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 list-none">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Consulting Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted" aria-labelledby="why-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="why-heading" className="text-3xl font-bold text-foreground mb-6 text-center">Why Security Consulting Matters</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                In today&apos;s digital landscape, security threats are constantly evolving. Whether you&apos;re an individual concerned 
                about identity theft or a business protecting sensitive data, having a security expert assess and harden your 
                digital presence is crucial.
              </p>
              <p className="leading-relaxed">
                My consulting services focus on practical, actionable security improvements that make a real difference. From 
                understanding what information about you is publicly available through OSINT assessments, to implementing 
                enterprise-grade MFA architecture, I help clients at every level strengthen their security posture.
              </p>
              <p className="leading-relaxed">
                With hands-on experience managing security for SMBs and deep expertise in identity protection, account hardening, 
                and authentication systems, I provide personalized guidance tailored to your specific needs and risk profile.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl font-bold text-foreground mb-4">Ready to Strengthen Your Security?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s discuss how we can improve your digital security posture.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-accent text-primary-foreground">
              <a href="/#contact">Get in Touch</a>
            </Button>
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
                <a href="/sitemap" className="text-background/70 hover:text-background transition-colors underline">
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
