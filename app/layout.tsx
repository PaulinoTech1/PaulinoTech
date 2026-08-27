import React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site-config"
import "./globals.css"

const defaultTitle = `${SITE_NAME} | ${SITE_TAGLINE}`

export const metadata: Metadata = {
  // Required for the relative URLs below to resolve into absolute ones.
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Alexander Paulino", url: SITE_URL }],
  creator: "Alexander Paulino",
  publisher: SITE_NAME,
  keywords: [
    "SMB IT",
    "cybersecurity",
    "network infrastructure",
    "email security",
    "DMARC",
    "OSINT",
    "systems administration",
    "Active Directory",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
