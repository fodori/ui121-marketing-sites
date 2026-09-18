import { parseSiteConfig } from '@ui121-marketing/content-schema'

const config = parseSiteConfig({
  domain: 'askmeapi.com',
  name: "AskMe API",
  tagline: "Ask a human. Get structured answers.",
  locale: 'en',
  canonical: 'https://askmeapi.com/',
  gaMeasurementId: undefined,
  layoutFamily: 'C',
  theme: {
  "primary": "#22c55e",
  "secondary": "#a3e635",
  "accent": "#22c55e",
  "background": "#050806",
  "foreground": "#ecfdf5",
  "muted": "#86efac",
  "fontDisplay": "JetBrains Mono",
  "fontBody": "IBM Plex Sans"
},
  seo: {
    title: "AskMe API — Ask a human. Get structured answers.",
    description: "API-first human interface: servers and AI agents ask people or groups through one programmable channel.",
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
  leadForm: { enabled: false, siteId: 'askmeapi.com' },
})

export default config
