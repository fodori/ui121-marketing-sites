import { parseSiteConfig } from '@ui121-marketing/content-schema'

const config = parseSiteConfig({
  domain: 'uias.uk',
  name: "UI as a Service",
  tagline: "UI as a service for workflows and agents",
  locale: 'en',
  canonical: 'https://uias.uk/',
  gaMeasurementId: undefined,
  layoutFamily: 'scaffold',
  theme: {
  "primary": "#38bdf8",
  "secondary": "#818cf8",
  "accent": "#38bdf8",
  "background": "#0b1220",
  "foreground": "#e2e8f0",
  "muted": "#94a3b8",
  "fontDisplay": "Inter",
  "fontBody": "Inter"
},
  seo: {
    title: "UI as a Service — UI as a service for workflows and agents",
    description: "UI as a service for workflows and agents. Real-time, API-first, AI-native human–machine interface.",
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
  leadForm: { enabled: false, siteId: 'uias.uk' },
})

export default config
