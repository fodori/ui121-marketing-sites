import { parseSiteConfig } from '@ui121-marketing/content-schema'

const config = parseSiteConfig({
  domain: 'ai2ui.uk',
  name: 'AI2UI',
  tagline: 'The gateway between AI and humans',
  locale: 'en',
  canonical: 'https://ai2ui.uk/',
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
    title: 'AI2UI — The gateway between AI and humans',
    description: 'The gateway between AI and humans. Real-time, API-first, AI-native human–machine interface.',
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
  leadForm: { enabled: false, siteId: 'ai2ui.uk' },
})

export default config
