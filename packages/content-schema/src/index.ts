import { z } from 'zod'

export const SeoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  ogImage: z.string().optional(),
  ogType: z.string().default('website'),
  twitterCard: z.enum(['summary', 'summary_large_image']).default('summary_large_image'),
  jsonLd: z.record(z.unknown()).optional(),
})

export const NavItemSchema = z.object({
  label: z.string(),
  href: z.string(),
})

export const CtaSchema = z.object({
  label: z.string(),
  href: z.string(),
})

export const ThemeTokensSchema = z.object({
  primary: z.string(),
  secondary: z.string(),
  accent: z.string(),
  background: z.string(),
  foreground: z.string(),
  muted: z.string(),
  fontDisplay: z.string(),
  fontBody: z.string(),
})

export const LeadFormConfigSchema = z.object({
  enabled: z.boolean(),
  collection: z.string().optional(),
  siteId: z.string().optional(),
})

export const StorySchema = z.object({
  problemTitle: z.string(),
  problemBody: z.string(),
  solutionTitle: z.string(),
  solutionBody: z.string(),
  proofPoints: z.array(z.string()).min(1),
})

export const UseCaseSchema = z.object({
  id: z.string(),
  title: z.string(),
  audience: z.string(),
  problem: z.string(),
  howWeSolve: z.string(),
  whyBetter: z.string(),
  mediaHint: z.string().optional(),
})

export const SiteConfigSchema = z.object({
  domain: z.string(),
  name: z.string(),
  tagline: z.string(),
  locale: z.string().default('en'),
  canonical: z.string().url(),
  gaMeasurementId: z.string().optional(),
  layoutFamily: z.enum(['A', 'B', 'C', 'D', 'scaffold']),
  theme: ThemeTokensSchema,
  seo: SeoSchema,
  nav: z.array(NavItemSchema),
  footerLinks: z.array(NavItemSchema).default([]),
  primaryCta: CtaSchema,
  secondaryCta: CtaSchema.optional(),
  sections: z.array(z.string()),
  leadForm: LeadFormConfigSchema.default({ enabled: false }),
  companyLegal: z.string().optional(),
})

export type Seo = z.infer<typeof SeoSchema>
export type NavItem = z.infer<typeof NavItemSchema>
export type Cta = z.infer<typeof CtaSchema>
export type ThemeTokens = z.infer<typeof ThemeTokensSchema>
export type LeadFormConfig = z.infer<typeof LeadFormConfigSchema>
export type Story = z.infer<typeof StorySchema>
export type UseCase = z.infer<typeof UseCaseSchema>
export type SiteConfig = z.infer<typeof SiteConfigSchema>

export const parseSiteConfig = (input: unknown): SiteConfig => SiteConfigSchema.parse(input)
export const parseStory = (input: unknown): Story => StorySchema.parse(input)
export const parseUseCases = (input: unknown): UseCase[] => z.array(UseCaseSchema).min(1).parse(input)
