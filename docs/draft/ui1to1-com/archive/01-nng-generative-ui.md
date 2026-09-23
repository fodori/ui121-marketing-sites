# NN/g — Generative UI and Outcome-Oriented Design

- Source: https://www.nngroup.com/articles/generative-ui/
- Fetched: 2026-09-23
- Status: ok

## Summary

Kate Moran and Sarah Gibbons (Nielsen Norman Group, 22 March 2024) argue that generative UI is a real-time interface built for one person in one moment, not a faster way for designers to draw the same screen for everyone. Their definition is an interface that artificial intelligence assembles dynamically so the experience fits that user’s needs and context. The article’s headline claim is that this moves design from serving many people with one layout to tailoring for the individual.

They separate two ideas that marketing often collapses. Generative UI benefits the end user: every session can be a custom interface. AI-assisted design benefits the product team: tools such as Uizard, Canonic, and Vercel’s v0 turn prompts or sketches into mockups and prototypes. Those tools speed production. Generative UI, they say, will matter more because it changes what the user actually sees.

Their flight-booking sketch shows the mechanism. A frequent flyer with dyslexia gets a readable font and contrast from her profile. She asks aloud for flights to Chicago. The system assumes her home airport, warns about a crowded event, ranks options by cost and duration, flags a missing window seat, and collapses red-eye flights she never takes. The point is scale: one airline might do this for a power user by hand, but generative UI is what makes the same depth plausible for about 190 million yearly flyers.

The design job then shifts from widgets to outcomes. Designers stop specifying every filter and results page for an average customer. They set guardrails: what must show, what should show, what must never show, and which goals the generated interface has to satisfy. Personas and journeys get wider because the system can hold more profiles. Research and testing become more important, not less, because the interface is no longer a fixed artefact.

## Key facts

- Authors: Kate Moran and Sarah Gibbons; published 22 March 2024.
- GenUI output is a live interface for one end user; AI-assisted design output is mockups and code for the team.
- Named design tools: UIzard, Canonic, v0 by Vercel.
- Scale example: equally personal flight booking for roughly 190 million yearly Delta flyers.
- Short-term risks: model hallucinations and bias, compute cost if interfaces are generated live for huge audiences, privacy from the context required, and usability loss when the layout changes every visit.
- Designers become authors of constraints and outcomes, not of every microinteraction.

## How it works

The article is a design argument, not a product architecture. The proposed loop is: collect enough intent and profile context, generate a layout that emphasises what this person cares about, hide or collapse what they consistently reject, and keep human-authored rules so the model cannot invent an unsafe or off-brand screen. Traditional design optimises one experience for the majority. Outcome-oriented design specifies the result (book the right flight, with the constraints this traveller actually has) and lets the system assemble the interaction.

They also warn that familiarity is a feature. People learn where things live. A constantly rebuilt UI can force relearning. The practical design problem is how much personalisation to allow before the interface stops being predictable.

## Implications for ui1to1.com / ui121

This is the cleanest outside citation for the one-to-one claim: one frozen layout cannot make anyone perfectly happy, and the industry’s own usability authority now says the future is an interface built for the individual. ui1to1.com can use that sentence as the problem, then show the product answer. JSONUI is declarative UI — a structured description the server sends and the client renders — so each person, role, and moment can get a different canvas without shipping a new app. That matches NN/g’s “design the constraints, not every pixel” shift, and it sits on the safer side of their own warning: a known component set stays familiar even when the arrangement is personal.

The flight example is also a human-in-the-loop story. The system proposes, warns, and ranks; the person still chooses. ui121’s canvas is that moment made general: the interface is where the human acts, not a chat transcript about the action. Marketing should quote the personalisation thesis and the 190-million scale line, then contrast chat-only answers with a surface you can actually use.

> “GenUI promises highly personalized interfaces — a move from designing for many to tailoring for the individual.” — Kate Moran and Sarah Gibbons, NN/g
