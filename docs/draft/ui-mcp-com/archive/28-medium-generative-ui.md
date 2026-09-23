# Generative UI

- **Source:** https://medium.com/@Treze413/generative-ui-the-interface-is-starting-to-build-itself-10110a762fa8
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Pedro Rodrigues, 11 September 2026, argues that models can understand a request and still answer with a wall of text. Generative UI closes that gap by assembling the interface as part of the answer. For decades the interface was designed before the user arrived. Chat moved the interaction into a text box and left the screen behind.

His mortgage example: “compare these three mortgages” should return a comparison with actions such as calculate a 20-year cost or change the loan amount, not three paragraphs. A trip to Porto should arrive as a map, itinerary, food, weather, and activities, then change when the user says Saturday should be easier, that it will rain, or that a child is coming. The interface is part of the conversation, not a fixed site map.

He quotes Google’s direction, in paraphrase, as a move from pre-rendered templates to interfaces built for the current intent, either by picking components or by generating structure. Google’s A2UI is his example of agents describing UI as data that different clients render. He warns that unlimited HTML from a model is the wrong end of the spectrum. Three levels: pick from an approved library, describe cards and tables in a schema, or generate more freely. More freedom means more risk to consistency, security, accessibility, and predictability. Muscle memory matters: if the screen rebuilds every time, people lose the button they just learned. Good generative UI knows when not to change.

Why now: models understand intent, agents can act, and protocols can carry a structured interface. He names A2UI, AG-UI, and MCP Apps as the set that makes this feel like an architecture rather than a demo. Starting points he links: Google Cloud’s “What is Generative UI?” and a commercetools talk by Gus Iwanaga on intent-driven UX. Those links were not expanded into extra notes; they are pointers inside one essay, not a docs hub.

## Key facts

- Date: 11 September 2026. Author: Pedro Rodrigues.
- Spectrum: pick components, describe a schema, or generate freely.
- Protocols he groups: A2UI, AG-UI, MCP Apps.
- Design-system shift: from pages to a vocabulary an agent can speak.
- Risk he flags: rebuilding the UI so often that people cannot learn it.

## How it works

The user states an intent. The system chooses or describes an interface, the person acts on it, and the next interface can change. MCP Apps are the transport that can deliver that interface into a host the person is already using. A2UI, as he describes it, keeps the description structured so each client paints with its own components. The model does not have to emit raw HTML for the idea to work.

## Implications for ui-mcp.com / ui121

This is the forward-looking paragraph for ui-mcp.com: MCP Apps deliver a UI; generative UI decides which UI. ui121 already sits on design systems, which this essay says become the vocabulary agents assemble. Position ui121 on the “pick” and “describe” end of the spectrum — approved components, accessible, on brand — and treat freeform generated HTML as the risk case MCP’s sandbox exists to contain. The Porto and mortgage stories are customer-language demos, not protocol demos.

> “Design the system that generates the interface.” — Pedro Rodrigues, 11 September 2026
