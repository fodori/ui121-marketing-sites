import { parseStory } from '@ui121-marketing/content-schema'

export const story = parseStory({
  problemTitle: 'Machines need humans — without rebuilding a UI each time',
  problemBody: 'Code review as a human task, not a chat dump. Real-time, API-first, AI-native human–machine interface.',
  solutionTitle: 'Code review as a human task, not a chat dump',
  solutionBody:
    'A real-time, API-first, AI-native human–machine interface: send a controlled UI, get structured answers, continue automation. Safer than blind generated apps.',
  proofPoints: ['AI-native and API-first', 'Controlled surfaces for humans', 'Structured answers back to machines'],
})
