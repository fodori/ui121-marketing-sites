import { parseSiteConfig } from '@ui121-marketing/content-schema'

const config = parseSiteConfig({
  domain: 'ui121.com',
  name: 'UI121',
  tagline: 'The human interface for AI-augmented operations',
  locale: 'en',
  canonical: 'https://ui121.com/',
  gaMeasurementId: undefined,
  layoutFamily: 'B',
  theme: {
    primary: '#1d4ed8',
    secondary: '#0ea5e9',
    accent: '#1d4ed8',
    background: '#f7f5f0',
    foreground: '#0c1222',
    muted: '#64748b',
    fontDisplay: 'Outfit',
    fontBody: 'Inter',
  },
  seo: {
    title: 'UI121 — AI-native human–machine interface | UI121 Ltd',
    description:
      'UI121 is a real-time, API-first platform that connects AI agents and backends with real humans through controlled, dynamic UIs. Built by UI121 Ltd.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  },
  nav: [
    { label: 'Product', href: '#product' },
    { label: 'Use cases', href: '#use-cases' },
    { label: 'Company', href: '#company' },
    { label: 'Contact', href: '#contact' },
  ],
  footerLinks: [
    { label: 'App', href: 'https://app.ui121.com' },
    { label: 'Contact', href: '#contact' },
  ],
  primaryCta: { label: 'Open app', href: 'https://app.ui121.com' },
  secondaryCta: { label: 'Talk to us', href: '#contact' },
  sections: ['hero', 'product', 'use-cases', 'company', 'contact'],
  leadForm: { enabled: true, collection: 'leads', siteId: 'ui121.com' },
  companyLegal: 'UI121 Ltd',
})

export default config
