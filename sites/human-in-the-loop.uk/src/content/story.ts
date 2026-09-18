import { parseStory } from '@ui121-marketing/content-schema'

export const story = parseStory({
  problemTitle: 'Automation hits a wall',
  problemBody:
    'Agents and workflows know what to ask — until they need nuanced judgment, an approval, or a field only a human has. Chatbots dump the mess into a conversation. Static forms freeze the moment. Custom UIs for every process burn months and still lag the AI.',
  solutionTitle: 'A controlled surface for human input',
  solutionBody:
    'Send a bounded, programmable UI to the right person or group. They answer on a polished surface — online in real time, or offline then sync. You get structured data back so the machine can continue. AI-native and API-first, without trusting blind generated HTML on your users.',
  proofPoints: [
    'Real-time when online; collect-and-sync when the network drops',
    'API-first for backends, workflows, and AI agents',
    'Catalog-backed UI — safer than free-form generated apps',
    'One channel for approvals, exceptions, inspections, and reviews',
  ],
})
