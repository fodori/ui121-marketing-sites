import { describe, expect, it } from 'vitest'
import { parseSiteConfig, parseUseCases, parseStory } from './index'

describe('content-schema', () => {
  it('parses a minimal site config', () => {
    const config = parseSiteConfig({
      domain: 'example.com',
      name: 'Example',
      tagline: 'Tag',
      locale: 'en',
      canonical: 'https://example.com/',
      layoutFamily: 'scaffold',
      theme: {
        primary: '#000',
        secondary: '#111',
        accent: '#222',
        background: '#fff',
        foreground: '#000',
        muted: '#666',
        fontDisplay: 'Inter',
        fontBody: 'Inter',
      },
      seo: {
        title: 'Title',
        description: 'Description long enough',
      },
      nav: [],
      primaryCta: { label: 'Go', href: '#' },
      sections: ['hero'],
    })
    expect(config.domain).toBe('example.com')
    expect(config.leadForm.enabled).toBe(false)
  })

  it('parses use cases and story', () => {
    const story = parseStory({
      problemTitle: 'P',
      problemBody: 'B',
      solutionTitle: 'S',
      solutionBody: 'SB',
      proofPoints: ['a'],
    })
    const useCases = parseUseCases([
      {
        id: '1',
        title: 'T',
        audience: 'A',
        problem: 'P',
        howWeSolve: 'H',
        whyBetter: 'W',
      },
    ])
    expect(story.proofPoints).toHaveLength(1)
    expect(useCases[0]?.id).toBe('1')
  })
})
