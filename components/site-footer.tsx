import Link from "next/link"

import { FOOTER_SECTIONS, SITE_NAME } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer
      className="border-t border-background/10 bg-foreground py-12 text-background/60"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-bold text-xl text-background">{SITE_NAME}</p>
            <p className="mt-3 max-w-xs leading-relaxed text-background/70">
              Resilience made simple, connect on your terms!
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <div className="grid gap-8 sm:grid-cols-3">
              {FOOTER_SECTIONS.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-background">
                    {section.heading}
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-background/70 transition-colors hover:text-background"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6">
          <p className="text-background/70">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
