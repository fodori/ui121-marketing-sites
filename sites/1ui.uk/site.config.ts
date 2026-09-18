import { parseSiteConfig } from '@ui121-marketing/content-schema'

const config = parseSiteConfig({
  domain: '1ui.uk',
  name: "1UI",
  tagline: "One UI for every machine-driven surface",
  locale: 'en',
  canonical: 'https://1ui.uk/',
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
    title: "1UI — One UI for every machine-driven surface",
    description: "One UI for every machine-driven surface. Real-time, API-first, AI-native human–machine interface.",
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
  leadForm: { enabled: false, siteId: '1ui.uk' },
})

export default config
