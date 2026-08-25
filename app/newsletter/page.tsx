import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  GraduationCap,
  RefreshCw,
  Rss,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getLiveNews, NEWS_FEEDS } from "@/lib/news-feeds"

export const metadata: Metadata = {
  title: "Tech Newsletter | Paulino Tech",
  description:
    "Current cybersecurity, networking, identity, cloud, and application-security headlines pulled from verified publisher RSS and Atom feeds.",
}

export const revalidate = 3600

const categoryColors: Record<string, string> = {
  Alerts: "bg-destructive/10 text-destructive",
  Governance: "bg-primary/10 text-primary",
  Vulnerabilities: "bg-destructive/10 text-destructive",
  "Threat Operations": "bg-accent/10 text-accent",
  Advisories: "bg-destructive/10 text-destructive",
  "Cybersecurity Research": "bg-primary/10 text-primary",
  "Network & Cloud": "bg-primary/10 text-primary",
  "Security Research": "bg-accent/10 text-accent",
  "Threat Intelligence": "bg-accent/10 text-accent",
  "Application Security": "bg-primary/10 text-primary",
}

const articleDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
})

const checkedAtFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  timeZone: "UTC",
  timeZoneName: "short",
})

export default async function NewsletterPage() {
  const { articles, availableFeedIds, checkedAt } = await getLiveNews()
  const availableFeeds = new Set(availableFeedIds)
  const unavailableFeedCount = NEWS_FEEDS.length - availableFeedIds.length

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <nav
          className="fixed top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md"
          aria-label="Main navigation"
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="font-bold text-xl text-foreground">
              <span className="sr-only">Paulino Tech Home</span>
              <span aria-hidden="true">Paulino Tech</span>
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="px-4 pb-12 pt-32 sm:px-6 lg:px-8" aria-labelledby="page-heading">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
              <h1 id="page-heading" className="text-4xl font-bold text-foreground sm:text-5xl">Tech Newsletter</h1>
            </div>
            <p className="mx-auto mb-5 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              Current technical reporting pulled directly from publisher-maintained RSS and Atom feeds&mdash;not
              fabricated headlines or links to generic landing pages.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <RefreshCw className="h-4 w-4" aria-hidden="true" />
                Cached for up to one hour
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Last feed check:{" "}
                <time dateTime={checkedAt}>{checkedAtFormatter.format(new Date(checkedAt))}</time>
              </span>
            </div>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6 lg:px-8" aria-labelledby="feed-status-heading">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-border bg-muted/50 p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 id="feed-status-heading" className="font-bold text-foreground">Publisher feed status</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {availableFeedIds.length} of {NEWS_FEEDS.length} feeds responded during this refresh.
                  </p>
                </div>
                <a href="#live-feeds" className="text-sm font-semibold text-primary underline hover:text-accent">
                  View direct feed links
                </a>
              </div>

              {unavailableFeedCount > 0 && (
                <div className="mt-4 flex gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-relaxed text-muted-foreground">
                  <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                  <p>
                    {unavailableFeedCount} {unavailableFeedCount === 1 ? "publisher feed is" : "publisher feeds are"}
                    {" "}temporarily unavailable from this server. No replacement or invented article is shown; use the
                    direct source links below to check the publisher.
                  </p>
                </div>
              )}

              <ul className="mt-5 flex list-none flex-wrap gap-3" aria-label="Configured publisher feeds">
                {NEWS_FEEDS.map((source) => {
                  const available = availableFeeds.has(source.id)

                  return (
                    <li key={source.id}>
                      <a href={source.feedUrl} target="_blank" rel="noopener noreferrer">
                        <Badge variant="secondary" className="px-3 py-2 text-sm hover:bg-primary/10">
                          <span
                            className={`mr-2 h-2 w-2 rounded-full ${available ? "bg-emerald-500" : "bg-amber-500"}`}
                            aria-hidden="true"
                          />
                          {source.name}
                          <span className="sr-only">
                            {available ? ": available at last check" : ": unavailable at last check"}; opens its live feed in a new tab
                          </span>
                        </Badge>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="articles-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <h2 id="articles-heading" className="text-3xl font-bold text-foreground">Latest from the feeds</h2>
                <p className="mt-2 text-muted-foreground">Publisher timestamps are shown in UTC. Items are sorted newest first.</p>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {articles.length} current {articles.length === 1 ? "item" : "items"}
              </p>
            </div>

            {articles.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {articles.map((article) => (
                  <article key={article.id}>
                    <Card className="h-full border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg">
                      <CardHeader>
                        <div className="mb-2 flex items-start justify-between gap-4">
                          <Badge className={categoryColors[article.category] || "bg-primary/10 text-primary"}>
                            {article.category}
                          </Badge>
                          {article.publishedAt ? (
                            <time className="shrink-0 text-xs text-muted-foreground" dateTime={article.publishedAt}>
                              {articleDateFormatter.format(new Date(article.publishedAt))}
                            </time>
                          ) : (
                            <span className="shrink-0 text-xs text-muted-foreground">Date not supplied</span>
                          )}
                        </div>
                        <CardTitle className="text-lg leading-snug text-card-foreground">{article.title}</CardTitle>
                        <CardDescription className="text-xs font-medium text-primary">{article.source}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline transition-colors hover:text-accent"
                        >
                          Read at source
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          <span className="sr-only">: {article.title} (opens in a new tab)</span>
                        </a>
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-8 text-center">
                <TriangleAlert className="mx-auto mb-3 h-8 w-8 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground">The live preview is temporarily unavailable</h3>
                <p className="mx-auto mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                  The page will try again on its next refresh. Open a publisher&apos;s RSS or Atom endpoint in the verified
                  feed directory below instead of relying on stale fallback headlines.
                </p>
              </div>
            )}
          </div>
        </section>

        <section id="live-feeds" className="bg-muted px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="live-feeds-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-9 max-w-3xl text-center">
              <Rss className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
              <h2 id="live-feeds-heading" className="text-3xl font-bold text-foreground">Verified live feed directory</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                These are direct publisher-maintained RSS or Atom endpoints. Add them to a feed reader or open the
                publisher site for additional context.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {NEWS_FEEDS.map((source) => {
                const available = availableFeeds.has(source.id)

                return (
                  <Card key={source.id} className="flex h-full flex-col border-border bg-card">
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <Badge variant="outline">{source.category}</Badge>
                        <span className={`text-xs font-semibold ${available ? "text-emerald-700 dark:text-emerald-400" : "text-amber-700 dark:text-amber-400"}`}>
                          {available ? "Responding" : "Retry pending"}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{source.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col">
                      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{source.description}</p>
                      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 text-sm">
                        <a
                          href={source.feedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-primary underline hover:text-accent"
                        >
                          <Rss className="h-3.5 w-3.5" aria-hidden="true" />
                          RSS / Atom
                          <span className="sr-only"> for {source.name} (opens in a new tab)</span>
                        </a>
                        <a
                          href={source.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-primary underline hover:text-accent"
                        >
                          Publisher site
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          <span className="sr-only">: {source.name} (opens in a new tab)</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="method-heading">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center lg:p-12">
              <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-primary" aria-hidden="true" />
              <h2 id="method-heading" className="mb-3 text-2xl font-bold text-foreground">How this newsletter stays honest</h2>
              <p className="mx-auto mb-4 max-w-3xl leading-relaxed text-muted-foreground">
                Headlines, summaries, dates, and article links come from each publisher&apos;s feed. Article URLs are
                restricted to that publisher&apos;s domain, feed failures are shown instead of hidden, and unavailable
                sources are never replaced with invented stories.
              </p>
              <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Automated inclusion is not an endorsement. Read the original article, confirm publication dates, and
                verify high-impact security or compliance decisions against primary documentation.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-accent">
                <Link href="/#contact">Get in Touch for Custom Briefings</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-background/10 bg-foreground py-8 text-background/60" role="contentinfo">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <div className="font-bold text-xl text-background">Paulino Tech | 2026</div>
            <nav aria-label="Footer navigation">
              <ul className="flex list-none gap-4">
                <li>
                  <Link href="/sitemap" className="text-background/70 underline transition-colors hover:text-background">
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/newsletter"
                    className="text-background/70 underline transition-colors hover:text-background"
                    aria-current="page"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <p className="text-center text-background/70 md:text-right">Resilience made simple, connect on your terms!</p>
        </div>
      </footer>
    </div>
  )
}
