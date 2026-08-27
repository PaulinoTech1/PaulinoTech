import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createPageMetadata } from "@/lib/metadata"
import { Monitor, Server, Laptop, HardDrive } from "lucide-react"

export const metadata = createPageMetadata({
  title: "Managed Operating Systems",
  description:
    "Operating systems I deploy and manage across server, workstation, and mobile infrastructure, from Windows Server 2022 and Windows 11 Pro to Ubuntu and macOS.",
  path: "/managed-os",
})

const operatingSystems = [
  {
    category: 'Server Infrastructure',
    icon: Server,
    items: [
      { 
        name: 'Windows Server 2022', 
        edition: 'Azure Datacenter Edition', 
        useCase: 'Confidential information storage and secure data management',
        features: ['Azure Arc Integration', 'Advanced Security', 'Hybrid Cloud']
      },
    ],
  },
  {
    category: 'Asset Management Systems',
    icon: HardDrive,
    items: [
      { 
        name: 'Windows 10 Enterprise', 
        edition: '2021 LTSC', 
        useCase: 'Keyper System for asset management including dealer plates, keys, and inventory tracking',
        features: ['Long-term Servicing', 'Enterprise Security', 'Legacy Application Support']
      },
    ],
  },
  {
    category: 'Workstation Deployments',
    icon: Monitor,
    items: [
      { 
        name: 'Windows 11 Pro', 
        edition: 'Latest Build', 
        useCase: 'Primary workstation operating system for daily operations',
        features: ['Modern UI', 'TPM 2.0 Security', 'BitLocker Encryption']
      },
      { 
        name: 'Ubuntu', 
        edition: '24.04 LTS', 
        useCase: 'Legacy workstation support for hardware that cannot support Windows 11 Pro',
        features: ['Long-term Support', 'Resource Efficient', 'Open Source']
      },
    ],
  },
  {
    category: 'Remote & Mobile',
    icon: Laptop,
    items: [
      { 
        name: 'macOS', 
        edition: 'Latest Release', 
        useCase: 'Remote deployment support for distributed workforce and mobile users',
        features: ['Cross-platform Integration', 'Remote Management', 'Secure by Design']
      },
    ],
  },
]

export default function ManagedOSPage() {
  return (
    <div className="bg-background">
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8" aria-labelledby="page-heading">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Operating Systems</Badge>
            <h1 id="page-heading" className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Managed Operating Systems
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade operating system management across diverse infrastructure environments
            </p>
          </div>
        </section>

        {/* Operating Systems Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="os-heading">
          <h2 id="os-heading" className="sr-only">Operating Systems by Category</h2>
          <div className="max-w-6xl mx-auto space-y-12">
            {operatingSystems.map((category, idx) => {
              const IconComponent = category.icon
              return (
                <section key={idx} aria-labelledby={`category-${idx}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 id={`category-${idx}`} className="text-2xl font-bold text-foreground">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((os, osIdx) => (
                      <article key={osIdx}>
                        <Card className="border-primary/20 hover:border-primary/40 transition-colors h-full">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="text-xl mb-1">{os.name}</CardTitle>
                                <Badge variant="outline" className="mb-3">{os.edition}</Badge>
                              </div>
                            </div>
                            <CardDescription className="text-base leading-relaxed">
                              {os.useCase}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div>
                              <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                              <ul className="space-y-2 list-none">
                                {os.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </article>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </section>

        {/* Capabilities Overview */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="capabilities-heading">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle id="capabilities-heading" className="text-2xl">OS Management Capabilities</CardTitle>
                <CardDescription>
                  Comprehensive operating system administration across multiple platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Deployment & Configuration</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li>Automated OS deployment</li>
                      <li>Group Policy management</li>
                      <li>Configuration standardization</li>
                      <li>Image management & updates</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Security & Compliance</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li>Patch management</li>
                      <li>Security hardening</li>
                      <li>Compliance monitoring</li>
                      <li>Access control enforcement</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Support & Maintenance</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                      <li>Cross-platform expertise</li>
                      <li>Troubleshooting & diagnostics</li>
                      <li>Performance optimization</li>
                      <li>Legacy system support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
