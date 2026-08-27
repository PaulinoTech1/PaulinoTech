import type { Metadata } from "next"

import { OG_IMAGE, SITE_NAME } from "@/lib/site-config"

/**
 * Builds the per-page metadata every route needs: a unique title, a description,
 * a canonical URL, and matching Open Graph / Twitter cards.
 *
 * `title` is passed through the root layout's `%s | Paulino Tech` template, so
 * pass the bare page name here. Social cards need the full string, so the site
 * name is appended explicitly for those.
 *
 * Defining `openGraph` here replaces the block inherited from the root layout,
 * including the preview image Next injects from `app/opengraph-image.tsx`, so
 * that image is re-attached explicitly below.
 */
export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  }
}
