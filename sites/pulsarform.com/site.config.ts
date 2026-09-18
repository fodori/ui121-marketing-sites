import { parseSiteConfig } from '@ui121-marketing/content-schema'

const config = parseSiteConfig({
  domain: 'pulsarform.com',
  name: 'Pulsar Form',
  tagline: 'Forms that machines can send on demand',
  locale: 'en',
  canonical: 'https://pulsarform.com/',
  gaMeasurementId: undefined,
  layoutFamily: 'scaffold',
  theme: {
    primary: '#38bdf8',
    secondary: '#818cf8',
    accent: '#38bdf8',
    background: '#0b1220',
    foreground: '#e2e8f0',
    muted: '#94a3b8',
    fontDisplay: 'Inter',
    fontBody: 'Inter',
  },
  seo: {
    title: 'Pulsar Form — Forms that machines can send on demand',
    description: 'Forms that machines can send on demand. Real-time, API-first, AI-native human–machine interface.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  },
  nav: [
    { label: 'Overview', href: '#overview' },
    { label: 'Use cases', href: '#use-cases' },
  ],
  footerLinks: [],
  primaryCta: { label: 'Get updates', href: '#overview' },
  sections: ['hero', 'overview', 'use-cases'],
  leadForm: { enabled: false, siteId: 'pulsarform.com' },
})

export default config
