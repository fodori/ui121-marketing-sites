import { parseStory } from '@ui121-marketing/content-schema'

export const story = parseStory({
  problemTitle: 'Software can decide — until it needs a person',
  problemBody:
    'Workflows, backends, and AI agents increasingly run the business. They still stall when they need judgment, an approval, or data only a human can provide. Shipping a custom UI for every process is too slow. Chatbots and static forms are too blunt.',
  solutionTitle: 'UI121: programmable human surfaces',
  solutionBody:
    'UI121 is a real-time, API-first, AI-native human–machine interface. Operators and agents send controlled UIs as tasks. People complete them in a polished web experience — online with live delivery, or offline with sync. Structured answers return so automation continues. Safer than blind generated apps: humans only see approved surfaces.',
  proofPoints: [
    'Three operator channels: web admin, REST API, MCP for AI',
    'Dynamic forms and workflows — change the UI without redeploying a custom front end',
    'Always connected when online; offline collect-and-sync for field work',
    'Built for AI-augmented operations — not another chatbot wrapper',
  ],
})
