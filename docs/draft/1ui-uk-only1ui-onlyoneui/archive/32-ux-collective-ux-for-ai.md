# UX Collective — Are we doing UX for AI the right way?

- **Source:** https://uxdesign.cc/are-we-doing-ux-for-ai-the-right-way-aea01e14138e
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Katya Korovkina’s UX Collective essay (27 January 2026) says 2026 is already being described as a year of AI fatigue, and that chatbot-first thinking is a wrong default. Conversational UI cannot replace most existing patterns. She grants the appeal: ChatGPT’s early blank box, talk of screen-free devices, and apps pulled into chat (with the caveat that a booking often still finishes on the original website). She then argues many personal and work tasks need rich, multi-modal interaction that a transcript cannot support.

Her test is a set of questions, starting from Google’s conversational-fit checklist. Accessibility: chat forces people to write the problem, and she cites literacy research that nearly half of adults in wealthy countries struggle with complex text, plus Jacob Nielsen’s point that this turns users into prompt engineers. Discoverability: ordering food by voice fails when you need to see the menu; recognition beats recall, and spoken lists vanish. Reliability: “change the renewal to one year and apply the standard discount” is ambiguous without fields, versions, and an explicit confirm. Necessity: fetching a video transcript through an agent that wanders third-party sites can be slower than a paste-and-click tool. Sustainability: minutes of model calls for a job a specialised service would finish cheaply are wasted energy.

Agents, in her definition, pursue a goal across tools with a person still accountable. She maps a human-in-the-loop lifecycle — set up, delegate, execute, observe, intervene, confirm, complete, learn and disengage — and says each stage needs an interface choice, not only chat. She names canvas, contextual, modular, and simulation layouts as part of that set. Failure examples: backlash to AI-generated ads, LinkedIn removing shallow prompt chips, Meta pushing an AI entry point users could not easily dismiss. Success examples: Microsoft 365 Copilot’s inline pattern, credited in part for reach into 70% of the Fortune 500, and Notion AI’s contextual actions that show what the model can do without a blank prompt. The close is that AI UX will be a layered system of tools and safeguards, and that products fail when they are not shaped to the job.

Section outline: the zero-UI promise; six fit questions; what agents still need from UX; the cost of getting the pattern wrong.

## Key facts

- Published 27 January 2026, Katya Korovkina, UX Collective.
- Chatbot-first is treated as a misconception, not as the end state of UX.
- Literacy claim: nearly half of adults in wealthy countries struggle with complex texts (OECD-style comparison discussed in the article).
- Usability principles used: recognition over recall; high-precision work needs visible fields and confirmation.
- HITL stages listed: set up, delegate, execute, observe, intervene, confirm, complete, learn and disengage.
- Patterns beyond chat named: canvas, contextual UI, modular UI, simulation.
- Adoption anecdote: Microsoft 365 Copilot in 70% of the Fortune 500, attributed partly to inline interaction; Notion AI cited for contextual actions.

## How it works

A team should pick an interaction pattern by checking whether conversation is accessible, discoverable, reliable, necessary, and sustainable for that job. Where it is not, the agent still helps — it can highlight, draft, or call an API — but the human sees structure: a canvas, a module, or inline suggestions in the tool they already use. Service design maps the handoffs so the system knows when to act, pause, explain, or step back. Generative output stays probabilistic, so guardrails and visible state are part of the interface, not a disclaimer under a chat log.

## Implications for the one-UI domains / ui121

This is the anti-chat citation for only1ui.com. Tasks need structured UI. ui121’s canvas is one of the non-chat layouts she says agent lifecycles require: the confirm step is a form, the observe step is a chart or a page, the intervene step is an editable task, all on one surface so the employee is not learning a new pattern per agent. Inline Copilot and Notion’s contextual actions are “AI inside the current UI.” The one-UI claim goes a step further: the current UI becomes universal, so inline help and generated tasks share a component language. Use her precision example (the contract renewal) as the reason a JSON form beats a sentence. Her thesis, in paraphrase: chatbot-first design makes AI products harder, because many jobs need a structured surface rather than a transcript.
