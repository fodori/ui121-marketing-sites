# Thesys — The new role of frontend engineers in the age of generative UI

- **Source:** https://www.thesys.dev/blogs/the-new-role-of-frontend-engineers-in-the-age-of-generative-ui
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Rabi’s Thesys essay (published 20 June 2025, updated 30 July 2025, about 15 minutes) says frontend work is moving from painting fixed screens to building the system that generates screens. Generative UI, in this piece, means an interface produced at runtime by a model from the user’s intent and context, not a release of pre-drawn pages. The same person asking about regional sales gets a chart for that question; if the model needs more input, it can surface a form. The interface becomes part of the exchange instead of a shell around a text answer.

Thesys treats the “AI-UI gap” as why many AI programmes stall. The essay cites a figure, via its own related writing, that 74% of companies have not seen tangible value from AI initiatives and only 26% have moved past pilots. A Boston Consulting Group 2024 point is used for a different split: about 70% of AI-project challenges are people and process, about 10% are the algorithms. The conclusion they want is that adoption fails when the front of the product cannot keep up with open-ended model behaviour.

The new skill stack is prompt work, orchestration around the model, and UI schema modelling. An engineer defines the components the model may request — a chart or a form described as structured data — and keeps that contract robust. CSS and React do not disappear. They move up a level: the engineer designs the components and the renderer, then guides the model with the schema. Day to day, the workflow starts with the contract and a system prompt, then a rendering layer that turns model output into real components. Thesys names its C1 API and React SDK as one way to stream those component outputs. Testing becomes a loop of queries, proposed UI, and adjustments to prompt, schema, or component code.

The static HTML of the URL is mostly a shell; this note follows the rendered article text retrieved on the same date. Related posts listed beside it are a blog index, not separate chapters of this essay. The companion piece requested in the source list is saved separately.

Section outline: what generative UI is; why the AI-UI gap matters; skills from CSS to schemas; the AI-native workflow; what stays of classic frontend craft.

## Key facts

- Author and dates: Rabi; 20 June 2025, updated 30 July 2025.
- Definition used: UI generated in real time by AI for the user’s context (they point at a Nielsen Norman Group wording for the same idea).
- 74% of companies yet to see tangible AI value; 26% beyond pilots (figure as used in the essay).
- BCG 2024, as used here: ~70% of AI-project difficulty is people and process; ~10% is algorithms.
- Engineer’s new artefact: a component contract (chart, form, table) the model fills as structured data.
- Named product path: C1 API streaming UI outputs into a React SDK.
- Contrast example: a fixed analytics dashboard versus a chart or form created for the question just asked.

## How it works

The team decides which UI types are legal. The model answers a user by emitting a structured request for one of those types, plus the data. Frontend code maps that request onto a real component, manages state, and streams partial results. The model does not hand-write the design system on each request. It selects and fills. Engineers iterate by running realistic questions and tightening the schema when the model picks the wrong block. That is “crafting the system that crafts interfaces,” which is the sentence the essay is built to land.

## Implications for the one-UI domains / ui121

This is the cutting-edge half of the one-UI story. onlyoneui.com can say the industry is already moving frontend jobs from screens to renderers. ui121 is that renderer as a product: a universal JSON canvas with a governed catalogue (pages, forms, charts, tasks) so an agent or a backend fills a schema instead of shipping a new app. Thesys still wraps the idea in a chat-adjacent API for AI apps. ui121’s domain angle is broader and stricter: every enterprise task, not only the AI moment, collapses onto one surface, and the schema is the governance boundary (accessibility, brand, allowed actions) that free-form HTML would skip. The 74% / people-and-process figures support “UI decides whether AI pays off,” which the companion note develops.
