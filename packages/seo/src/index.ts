import type { Seo, SiteConfig } from '@ui121-marketing/content-schema'

export type MetaTag = { name?: string; property?: string; content: string }

export const buildMetaTags = (seo: Seo, canonical: string): MetaTag[] => {
  const tags: MetaTag[] = [
    { name: 'description', content: seo.description },
    { property: 'og:title', content: seo.title },
    { property: 'og:description', content: seo.description },
    { property: 'og:type', content: seo.ogType ?? 'website' },
    { property: 'og:url', content: canonical },
    { name: 'twitter:card', content: seo.twitterCard ?? 'summary_large_image' },
    { name: 'twitter:title', content: seo.title },
    { name: 'twitter:description', content: seo.description },
  ]
  if (seo.ogImage) {
    tags.push({ property: 'og:image', content: seo.ogImage })
    tags.push({ name: 'twitter:image', content: seo.ogImage })
  }
  return tags
}

export const buildJsonLd = (config: SiteConfig): Record<string, unknown> => {
  if (config.seo.jsonLd) return config.seo.jsonLd
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: config.canonical,
    description: config.seo.description,
  }
}

export const sitemapEntry = (loc: string, lastmod?: string) => ({
  loc,
  lastmod: lastmod ?? new Date().toISOString().slice(0, 10),
  changefreq: 'weekly' as const,
  priority: 1,
})
