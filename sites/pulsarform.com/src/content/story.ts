import { parseStory } from '@ui121-marketing/content-schema'

export const story = parseStory({
  problemTitle: 'Machines need humans — without rebuilding a UI each time',
  problemBody: 'Forms that machines can send on demand. Real-time, API-first, AI-native human–machine interface.',
  solutionTitle: 'Forms that machines can send on demand',
  solutionBody:
    'A real-time, API-first, AI-native human–machine interface: send a controlled UI, get structured answers, continue automation. Safer than blind generated apps.',
  proofPoints: ['AI-native and API-first', 'Controlled surfaces for humans', 'Structured answers back to machines'],
})
