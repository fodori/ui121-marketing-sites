import { parseSiteConfig } from '@ui121-marketing/content-schema'

const config = parseSiteConfig({
  domain: 'generatedui.app',
  name: "Generated UI",
  tagline: "Generated UI — from data, not free-form HTML.",
  locale: 'en',
  canonical: 'https://generatedui.app/',
  gaMeasurementId: undefined,
  layoutFamily: 'D',
  theme: {
  "primary": "#a855f7",
  "secondary": "#f472b6",
  "accent": "#a855f7",
  "background": "#0a0612",
  "foreground": "#faf5ff",
  "muted": "#c4b5fd",
  "fontDisplay": "Space Grotesk",
  "fontBody": "Manrope"
},
  seo: {
    title: "Generated UI — Generated UI — from data, not free-form HTML.",
    description: "Data-driven surfaces with pre-built blocks and MCP. Safer generative UI for humans in production.",
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
  leadForm: { enabled: false, siteId: 'generatedui.app' },
})

export default config
