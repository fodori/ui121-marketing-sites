import { parseStory } from '@ui121-marketing/content-schema'

export const story = parseStory({
  problemTitle: 'Machines need humans — without rebuilding a UI each time',
  problemBody: "One-to-one human interface for automation. Real-time, API-first, AI-native human–machine interface.",
  solutionTitle: "One-to-one human interface for automation",
  solutionBody: 'A real-time, API-first, AI-native human–machine interface: send a controlled UI, get structured answers, continue automation. Safer than blind generated apps.',
  proofPoints: [
    'AI-native and API-first',
    'Controlled surfaces for humans',
    'Structured answers back to machines',
  ],
})
