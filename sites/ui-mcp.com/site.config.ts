import { parseSiteConfig } from '@ui121-marketing/content-schema'

const config = parseSiteConfig({
  domain: 'ui-mcp.com',
  name: "UI MCP",
  tagline: "Connect any AI to human surfaces via MCP",
  locale: 'en',
  canonical: 'https://ui-mcp.com/',
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
    title: "UI MCP — Connect any AI to human surfaces via MCP",
    description: "Connect any AI to human surfaces via MCP. Real-time, API-first, AI-native human–machine interface.",
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
  leadForm: { enabled: false, siteId: 'ui-mcp.com' },
})

export default config
