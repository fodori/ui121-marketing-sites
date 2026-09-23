# Monterail — Generative UI in chatbot interactions

- Source: https://www.monterail.com/blog/revolutionizing-chatbot-interactions-with-generative-ui
- Fetched: 2026-09-23
- Status: ok

## Summary

Maciej Korolik at Monterail (updated 20 August 2026) says most chatbots are text in, text out, which fails when the task needs a choice, a confirmation, a picture, or structured input. Generative UI lets the bot render a form, a selector, a chart, or a summary inside the conversation. The model decides when a component serves better than a paragraph.

The piece is a proof of concept for an imaginary insurer: report car damage and check a claim, using Vercel’s AI SDK 3 and `streamUI` from `ai/rsc`. React Server Components stream the interface from the server the way they stream text. He warns that this helper and package are experimental and not what Vercel recommends for production. The current recommendation he records is AI SDK UI (`useChat` and related hooks): wider framework support, parallel tool calls, and multi-step tools. The architecture is still the lesson.

`submitUserMessage` is a server action. It appends the user turn to AI state (system context, tool results, history) and calls `streamUI`. Text streams into a message component. Interactivity is a tool. `showCarSelector` has a description that tells the model when to use it, a Zod parameter object (empty here), and a `generate` function that first yields a skeleton, loads the user’s cars, writes tool-call and tool-result messages into state, and returns the selector. A click sends a new user message describing the choice, so the component’s output re-enters the same action. Three sibling components follow the same pattern: a parts diagram that standardises names the driver may not know, a claims list on live data, and a summary the person can edit and confirm before submit.

Complexity sits in the prompt. Direct “show me this” requests behave better than multi-step guidance such as walking a claim. He suggests a model tuned to the domain. Business claims: faster completion and fewer errors than pure text or a rigid form; less rebuild cost because a new component is a tool description, not a new flowchart; and a path to agents that guide rather than only answer. Client examples are named at a high level: Cooleaf (engagement data turned into contextual recommendations) and Flink (operational actions chosen from context). Fixed, predictable processes, he says, should stay traditional forms. Next.js is the practical host for the RSC approach; newer `useChat` / `useObject` styles are more framework-agnostic.

## Key facts

- Author: Maciej Korolik; updated 20 August 2026.
- PoC: insurance claim chatbot with four UI tools — car selector, parts diagram, claims list, editable summary.
- Stack of the PoC: Vercel AI SDK 3, `streamUI`, React Server Components, Next.js. Marked experimental; AI SDK UI recommended for new production work.
- Pattern: server action, tools with descriptions, skeleton then data, user gesture written back as a message.
- Reliability: display tasks outperform guided multi-step tasks; prompt tuning is the operational cost.
- When not to use it: processes whose steps are already known and fixed.

## How it works

The model reads the conversation and the tool catalogue. If a tool’s description matches, the server runs it, can stream a placeholder, fetches data, and returns a React node. The client shows that node in the thread. User input is serialised back into the transcript so the next turn knows what was chosen. State is the message list plus tool payloads, updated as the action completes. The developer does not hard-code the path; they constrain the components the model may invoke.

## Implications for ui1to1.com / ui121

This is a practitioner account of streamed, server-driven UI, which is the public pattern JSONUI aligns with. The insurer PoC is human-in-the-loop in miniature: the person selects, confirms, and only then submits. ui1to1.com can tell that story without the chatbot frame. The one interface is the claim, the diagram, and the confirmation, generated for this user, not a text transcript about the claim.

The production caution is useful and honest. Experimental RSC streaming is not the pitch. The durable idea is: known components, model or server chooses which to show, human input comes back as structured state. That is declarative UI. One-to-one means the car list is this customer’s cars and the summary is this claim, on a canvas that stays live after the chat would have ended. Do not reproduce their code samples in marketing.
