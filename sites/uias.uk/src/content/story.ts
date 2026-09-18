import { parseStory } from '@ui121-marketing/content-schema'

export const story = parseStory({
  problemTitle: 'Machines need humans — without rebuilding a UI each time',
  problemBody: 'UI as a service for workflows and agents. Real-time, API-first, AI-native human–machine interface.',
  solutionTitle: 'UI as a service for workflows and agents',
  solutionBody:
    'A real-time, API-first, AI-native human–machine interface: send a controlled UI, get structured answers, continue automation. Safer than blind generated apps.',
  proofPoints: ['AI-native and API-first', 'Controlled surfaces for humans', 'Structured answers back to machines'],
})
