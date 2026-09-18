import { parseSiteConfig } from '@ui121-marketing/content-schema'

const config = parseSiteConfig({
  domain: 'human-in-the-loop.uk',
  name: 'Human in the Loop',
  tagline: 'Machines stall. Humans finish the step.',
  locale: 'en',
  canonical: 'https://human-in-the-loop.uk/',
  gaMeasurementId: undefined,
  layoutFamily: 'A',
  theme: {
    primary: '#ff5c33',
    secondary: '#7cf0ff',
    accent: '#ff5c33',
    background: '#07080c',
    foreground: '#e8e6e1',
    muted: '#8b90a0',
    fontDisplay: 'Syne',
    fontBody: 'DM Sans',
  },
  seo: {
    title: 'Human in the Loop — AI-native human–machine interface',
    description:
      'When automation needs judgment, approval, or missing data, send a controlled UI to a real human and get structured answers back. Real-time. API-first. AI-native.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  },
  nav: [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Use cases', href: '#use-cases' },
    { label: 'Waitlist', href: '#waitlist' },
  ],
  footerLinks: [{ label: 'Privacy', href: '#waitlist' }],
  primaryCta: { label: 'Join the waitlist', href: '#waitlist' },
  secondaryCta: { label: 'See use cases', href: '#use-cases' },
  sections: ['hero', 'problem', 'solution', 'use-cases', 'proof', 'waitlist'],
  leadForm: { enabled: true, collection: 'leads', siteId: 'human-in-the-loop.uk' },
})

export default config
