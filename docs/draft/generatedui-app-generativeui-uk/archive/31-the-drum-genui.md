# The screen’s days are numbered — The Drum

- Source: https://www.thedrum.com/opinion/the-screen-s-days-are-numbered-genui-will-be-the-next-big-leap-customer
- Fetched: 2026-09-23
- Status: ok

## Summary

Richard Trigg, design partner at Tangent, 5 June 2025, in The Drum. The piece is a six-minute opinion column, not a technical spec. His claim: for twenty years the screen was a fixed layout, even when responsive design resized it, because it was built for an average user. In 2025 that assumption is failing. Generative UI, powered by models, modular design systems, and an expectation of personal experience, assembles an interface from intent instead of pre-building a screen for every journey.

Examples are sector sketches, not case studies with metrics. A travel site changes the landing experience with live weather. A banking app surfaces the next action for a keen saver. An enterprise dashboard rearranges itself for role and priorities. The line he wants is that screens respond to people, not only to device width.

Customer-experience effects he lists: personalisation without a matrix of segments and the research cost that goes with them; less friction because the next action is already on screen; inclusion, if type size, contrast, and simpler layout can follow need without a settings hunt; and a continuous optimisation loop, because every interaction is feedback, not a quarterly research project.

The risks are the useful half. Brand consistency breaks if every user sees a different composition, so the work moves from pages to boundaries: stronger components, clearer rules. Real-time adaptation needs clean data and fast infrastructure; lag and wild guesses destroy trust. If the interface changes because of sensitive history or intent, the user has to see why, with opt-out and control. He tells CX teams to start with one sticky journey — onboarding, a long form, a static dashboard — label it beta, and fix design systems, content structure, and data hygiene first. Generative systems, he says, are only as smart as those inputs. The close is that first movers set the expectation of what good feels like.

## Key facts

- Published 5 June 2025. Author: Richard Trigg, Tangent. About 6 minutes.
- Opinion, not a protocol or a measured case study.
- Method shift: from pages to component systems and boundaries.
- Preconditions he names: design system, content structure, data hygiene.
- Trust requirements: explanation, opt-out, user control when personal data drives the layout.
- Suggested pilot: one high-friction journey, labelled beta.

## How it works

No algorithm is specified. The operating picture is a library of modular components plus logic that chooses and arranges them from user intent, context, and live data. Designers spend their effort on the rules and the blocks. The column does not mention MCP, A2UI, or iframes.

Section outline: fixed screens versus systems; a plain-language definition; four CX effects; brand, technical, and transparency challenges; how to pilot.

## Implications for generatedui / ui121

Trigg is describing ui121’s product to a CX audience without the acronyms. generatedui.uk can translate his “boundaries not pages” line into the catalog: pre-built blocks, intent in, layout out, brand rules enforced by what the agent is allowed to request. His pilot advice is a sales motion — one form or one dashboard, labelled, measured — which matches human-in-the-loop blocks better than a promise to regenerate the whole site. The transparency requirement is a feature requirement: when a block appears because of context, the UI should be able to say why. Do not import his weather and banking sketches as ui121 case studies.
