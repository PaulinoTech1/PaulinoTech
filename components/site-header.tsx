'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { ANCHOR_NAV, PRIMARY_NAV, SECONDARY_NAV, SITE_NAME } from "@/lib/site-config"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Route changes leave the disclosure open otherwise, since the header never unmounts.
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileMenuOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [mobileMenuOpen])

  const mobileLinks = [...PRIMARY_NAV, ...SECONDARY_NAV, ...ANCHOR_NAV]

  return (
    <header>
      <nav
        className="fixed top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl text-foreground">
              <span className="sr-only">{SITE_NAME} Home</span>
              <span aria-hidden="true">{SITE_NAME}</span>
            </Link>

            <div className="hidden items-center gap-4 text-sm lg:flex">
              {PRIMARY_NAV.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "font-medium text-foreground"
                        : "text-muted-foreground transition-colors hover:text-foreground"
                    }
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/#contact"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </div>

            <button
              type="button"
              className="p-2 text-foreground lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="max-h-[calc(100vh-4rem)] space-y-1 overflow-y-auto border-t border-border bg-card py-4 lg:hidden"
            >
              {mobileLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`mx-2 block rounded-md px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary ${
                      isActive ? "bg-primary/10 font-medium text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
