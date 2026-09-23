# Reddit r/UXDesign — Unique UI for every user, in real time

- Source: https://www.reddit.com/r/UXDesign/comments/180d9wj/what_if_ai_could_generate_unique_ui_for_every/
- Fetched: 2026-09-23
- Status: partial

## Summary

Direct fetch of the November 2023 thread returned HTTP 403, and the public JSON endpoint was blocked the same way. What follows is reconstructed from search-result extracts that quote the thread itself, not from a full comment dump. Treat quotes and vote counts as incomplete.

The post asks what happens if AI generates a unique interface for every user in real time. The prompt it reacts to, quoted by commenters as “from the article,” describes front-end code generated and shown as exactly what this user needs right now: fitted to the device and input method, to the likely task, to preferences, and to familiarity, while still using an in-house design system so it matches the existing look.

The visible pushback is about the words “exactly” and “perfectly.” Commenters say people and the world are messy, so a wrong prediction needs a recovery path. Consistency, pattern, and predictability are how people navigate and troubleshoot. A unique UI that guesses wrong may be a net loss against a stable one. Several comments stress that AI is not a reliable API: the hard work is the case where the prediction hallucinates.

Another line of replies says personalised UI is already shipping without generative models. Growth teams serve different interfaces via multi-armed bandits, which are algorithm-driven experiments rather than a freshly invented screen. The thread therefore splits into two theses: generated one-off UI, and controlled variation inside a known system.

## Key facts

- Thread: r/UXDesign, title “What if AI could generate unique UI for every user, in real-time?”, about November 2023 (id 180d9wj).
- Fetch status: full page and `.json` blocked (403). Notes are from search extracts of the thread.
- Quoted design target in the discussion: viewport, interaction method, likely task, preferences, experience level, and the in-house design system.
- Objections named in extracts: unpredictability, no recovery when the model is wrong, hallucination, and loss of consistency.
- Counter-example named in extracts: multi-armed bandit personalisation already used in growth design.

## How it works

The imagined system generates front-end code per session from device, task, and preference signals, but is constrained to the company’s design system so the result still looks like the product. Commenters treat that as an aspiration, not a mechanism that is safe by default. The alternative already in production is experimentation: the product chooses among prepared variants using live outcome data, instead of synthesising a new interface. Recovery, in the critics’ view, has to be designed first — a way back to a known layout when the guess is wrong.

## Implications for ui1to1.com / ui121

This thread is early demand for the ui1to1 thesis, and it already contains the objection the brand must answer. People want software that fits them. They also need a UI they can learn, support, and escape. ui121’s declarative canvas is the commenters’ “in-house design system” version: the server can assemble a one-to-one layout from known blocks for this person and this task, without claiming the screen is perfectly predicted. Human-in-the-loop is the recovery path they ask for. If the generated view is wrong, the person corrects it inside the same interface, and the next canvas can follow that correction. Marketing should not promise “exactly what you need right now.” It should promise one connected interface, tailored, still recognizable, and correctable by the human.

> “The front end code is generated and displayed — and it’s exactly what this user needs right now.” — phrasing quoted inside the thread, via search extract
