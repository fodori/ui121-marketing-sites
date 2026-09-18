import { parseStory } from '@ui121-marketing/content-schema'

export const story = parseStory({
  problemTitle: 'Machines need humans — without rebuilding a UI each time',
  problemBody: "Data-driven surfaces with pre-built blocks and MCP. Safer generative UI for humans in production.",
  solutionTitle: "Generated UI — from data, not free-form HTML.",
  solutionBody: 'A real-time, API-first, AI-native human–machine interface: send a controlled UI, get structured answers, continue automation. Safer than blind generated apps.',
  proofPoints: [
    'AI-native and API-first',
    'Controlled surfaces for humans',
    'Structured answers back to machines',
  ],
})
