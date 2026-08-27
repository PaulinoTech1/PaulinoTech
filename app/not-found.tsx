import Link from "next/link"
import { Compass } from "lucide-react"

import { Button } from "@/components/ui/button"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description: "That page does not exist. Use the links here to find your way back.",
  path: "/404",
})

export default function NotFound() {
  return (
    <div className="bg-background">
      <main id="main-content">
        <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8" aria-labelledby="not-found-heading">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10"
              aria-hidden="true"
            >
              <Compass className="h-7 w-7 text-primary" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Error 404</p>
            <h1
              id="not-found-heading"
              className="mt-3 text-4xl font-bold text-balance text-foreground sm:text-5xl"
            >
              That page isn&apos;t here
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              The link may be out of date, or the page may have moved. The site map lists every
              page, and the full index is in the footer below.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/">Back to home</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/sitemap">Browse the site map</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
