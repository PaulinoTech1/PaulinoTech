import { parseFeed } from "@rowanmanning/feed-parser"

const FEED_REVALIDATE_SECONDS = 60 * 60
const FEED_TIMEOUT_MS = 8_000
const MAX_FEED_BYTES = 3_000_000
const MAX_ARTICLE_SUMMARY_LENGTH = 260
const ARTICLES_PER_FEED = 2
const MAX_ARTICLES = 12

export interface NewsFeedSource {
  id: string
  name: string
  category: string
  description: string
  feedUrl: string
  siteUrl: string
  allowedHosts: readonly string[]
}

export interface LiveNewsArticle {
  id: string
  title: string
  source: string
  sourceId: string
  summary: string
  url: string
  category: string
  publishedAt: string | null
}

export interface LiveNewsResult {
  articles: LiveNewsArticle[]
  availableFeedIds: string[]
  checkedAt: string
}

export const NEWS_FEEDS: readonly NewsFeedSource[] = [
  {
    id: "cisa",
    name: "CISA Cybersecurity Advisories",
    category: "Alerts",
    description: "U.S. government alerts, advisories, and defensive guidance.",
    feedUrl: "https://www.cisa.gov/cybersecurity-advisories/all.xml",
    siteUrl: "https://www.cisa.gov/news-events/cybersecurity-advisories",
    allowedHosts: ["cisa.gov"],
  },
  {
    id: "nist",
    name: "NIST Cybersecurity Insights",
    category: "Governance",
    description: "Cybersecurity standards, implementation guidance, and risk-management perspectives.",
    feedUrl: "https://www.nist.gov/blogs/cybersecurity-insights/rss.xml",
    siteUrl: "https://www.nist.gov/blogs/cybersecurity-insights",
    allowedHosts: ["nist.gov"],
  },
  {
    id: "cert-cc",
    name: "CERT/CC Vulnerability Notes",
    category: "Vulnerabilities",
    description: "Technical vulnerability notes from the CERT Coordination Center.",
    feedUrl: "https://kb.cert.org/vuls/atomfeed/",
    siteUrl: "https://kb.cert.org/vuls/",
    allowedHosts: ["cert.org"],
  },
  {
    id: "sans-isc",
    name: "SANS Internet Storm Center",
    category: "Threat Operations",
    description: "Handler diaries and operational observations about current malicious activity.",
    feedUrl: "https://isc.sans.edu/rssfeed_full.xml",
    siteUrl: "https://isc.sans.edu/",
    allowedHosts: ["sans.edu"],
  },
  {
    id: "cis",
    name: "CIS / MS-ISAC Advisories",
    category: "Advisories",
    description: "Action-oriented vulnerability advisories for public and private organizations.",
    feedUrl: "https://www.cisecurity.org/feed/advisories",
    siteUrl: "https://www.cisecurity.org/cybersecurity-threats",
    allowedHosts: ["cisecurity.org"],
  },
  {
    id: "mit-news",
    name: "MIT News Cybersecurity",
    category: "Cybersecurity Research",
    description: "Cybersecurity research, education, systems engineering, privacy, and policy reporting from MIT News.",
    feedUrl: "https://news.mit.edu/topic/mitcyber-security-rss.xml",
    siteUrl: "https://news.mit.edu/topic/cyber-security",
    allowedHosts: ["news.mit.edu"],
  },
  {
    id: "cloudflare",
    name: "Cloudflare Blog",
    category: "Network & Cloud",
    description: "Engineering, Internet infrastructure, application security, and network research.",
    feedUrl: "https://blog.cloudflare.com/rss/",
    siteUrl: "https://blog.cloudflare.com/",
    allowedHosts: ["cloudflare.com"],
  },
  {
    id: "google-security",
    name: "Google Security Blog",
    category: "Security Research",
    description: "Research and product-security work published by Google security teams.",
    feedUrl: "https://blog.google/security/rss/",
    siteUrl: "https://blog.google/security/",
    allowedHosts: ["blog.google"],
  },
  {
    id: "cisco-talos",
    name: "Cisco Talos Intelligence",
    category: "Threat Intelligence",
    description: "Threat research, malware analysis, and incident observations from Cisco Talos.",
    feedUrl: "https://blog.talosintelligence.com/rss/",
    siteUrl: "https://blog.talosintelligence.com/",
    allowedHosts: ["talosintelligence.com"],
  },
  {
    id: "owasp",
    name: "OWASP",
    category: "Application Security",
    description: "Open application-security project, community, and foundation updates.",
    feedUrl: "https://owasp.org/feed.xml",
    siteUrl: "https://owasp.org/news/",
    allowedHosts: ["owasp.org"],
  },
]

function isAllowedHost(hostname: string, allowedHosts: readonly string[]): boolean {
  const normalizedHostname = hostname.toLowerCase()

  return allowedHosts.some((allowedHost) => {
    const normalizedAllowedHost = allowedHost.toLowerCase()
    return normalizedHostname === normalizedAllowedHost || normalizedHostname.endsWith(`.${normalizedAllowedHost}`)
  })
}

function normalizeArticleUrl(value: string | null, source: NewsFeedSource): string | null {
  if (!value) return null

  try {
    const url = new URL(value, source.siteUrl)

    if (!isAllowedHost(url.hostname, source.allowedHosts)) return null
    if (url.protocol !== "http:" && url.protocol !== "https:") return null

    url.protocol = "https:"
    url.username = ""
    url.password = ""

    return url.toString()
  } catch {
    return null
  }
}

function cleanText(value: string | null): string {
  if (!value) return ""

  return value
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;|&#34;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim()
}

function summarize(value: string | null, fallback: string): string {
  const text = cleanText(value) || fallback

  if (text.length <= MAX_ARTICLE_SUMMARY_LENGTH) return text

  const shortened = text.slice(0, MAX_ARTICLE_SUMMARY_LENGTH - 1)
  const lastSpace = shortened.lastIndexOf(" ")
  const boundary = lastSpace > MAX_ARTICLE_SUMMARY_LENGTH * 0.7 ? lastSpace : shortened.length

  return `${shortened.slice(0, boundary).trimEnd()}\u2026`
}

function toIsoDate(value: Date | null): string | null {
  if (!value || Number.isNaN(value.getTime())) return null
  return value.toISOString()
}

function toTimestamp(value: string | null): number {
  if (!value) return 0

  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? 0 : timestamp
}

async function fetchFeed(source: NewsFeedSource): Promise<LiveNewsArticle[]> {
  const response = await fetch(source.feedUrl, {
    headers: {
      Accept: "application/rss+xml, application/atom+xml, application/xml, text/xml;q=0.9, */*;q=0.1",
      "User-Agent": "PaulinoTech-Newsletter/1.0 (+https://paulinotech.com)",
    },
    next: { revalidate: FEED_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(FEED_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(`Feed returned HTTP ${response.status}`)
  }

  const contentType = response.headers.get("content-type")?.toLowerCase()
  if (contentType && !contentType.includes("xml") && !contentType.includes("rss") && !contentType.includes("atom")) {
    throw new Error("Feed returned an unexpected content type")
  }

  const contentLength = Number(response.headers.get("content-length") ?? 0)
  if (contentLength > MAX_FEED_BYTES) {
    throw new Error("Feed exceeded the response-size limit")
  }

  const xml = await response.text()
  if (!xml.trim() || xml.length > MAX_FEED_BYTES) {
    throw new Error("Feed was empty or exceeded the response-size limit")
  }

  const feed = parseFeed(xml)

  return feed.items
    .map((item) => {
      const url = normalizeArticleUrl(item.url, source)
      const title = cleanText(item.title)

      if (!url || !title) return null

      const publishedAt = toIsoDate(item.published ?? item.updated)

      return {
        id: `${source.id}:${item.id ?? url}`,
        title,
        source: source.name,
        sourceId: source.id,
        summary: summarize(item.description ?? item.content, source.description),
        url,
        category: source.category,
        publishedAt,
      } satisfies LiveNewsArticle
    })
    .filter((article): article is LiveNewsArticle => article !== null)
    .sort((a, b) => toTimestamp(b.publishedAt) - toTimestamp(a.publishedAt))
    .slice(0, ARTICLES_PER_FEED)
}

export async function getLiveNews(): Promise<LiveNewsResult> {
  const results = await Promise.allSettled(
    NEWS_FEEDS.map(async (source) => ({
      source,
      articles: await fetchFeed(source),
    })),
  )

  const availableFeedIds: string[] = []
  const combinedArticles: LiveNewsArticle[] = []

  for (const result of results) {
    if (result.status !== "fulfilled") continue

    availableFeedIds.push(result.value.source.id)
    combinedArticles.push(...result.value.articles)
  }

  const seenUrls = new Set<string>()
  const articles = combinedArticles
    .sort((a, b) => toTimestamp(b.publishedAt) - toTimestamp(a.publishedAt))
    .filter((article) => {
      if (seenUrls.has(article.url)) return false
      seenUrls.add(article.url)
      return true
    })
    .slice(0, MAX_ARTICLES)

  return {
    articles,
    availableFeedIds,
    checkedAt: new Date().toISOString(),
  }
}
