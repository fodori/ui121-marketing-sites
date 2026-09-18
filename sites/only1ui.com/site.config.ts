import { parseSiteConfig } from '@ui121-marketing/content-schema'

const config = parseSiteConfig({
  domain: 'only1ui.com',
  name: "Only1UI",
  tagline: "Only one UI channel for AI and workflows",
  locale: 'en',
  canonical: 'https://only1ui.com/',
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
    title: "Only1UI — Only one UI channel for AI and workflows",
    description: "Only one UI channel for AI and workflows. Real-time, API-first, AI-native human–machine interface.",
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
  leadForm: { enabled: false, siteId: 'only1ui.com' },
})

export default config
