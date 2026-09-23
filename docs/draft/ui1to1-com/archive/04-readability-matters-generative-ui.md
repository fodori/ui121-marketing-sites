# Readability Matters — Generative UI Meets Better Readability

- Source: https://readabilitymatters.org/articles/generative-ui-meets-better-readability
- Fetched: 2026-09-23
- Status: ok

## Summary

Marjorie Jordan and Kathy Crowley (25 July 2025) argue that digital content is already customised, but the way it is printed on screen is still one format for everyone. That mismatch costs churn, engagement, and support. Generative UI, as NN/g framed it, is their proposed fix: stop designing for an average reader and format the reading experience for each person.

They lean on a large evidence base. The Readability Consortium and partner researchers have more than 35 peer-reviewed studies showing that font, size, letter spacing, line height, and weight change reading speed, accuracy, and comprehension — and that the helpful setting is not the same for every reader. Gains are often in the double digits, vary by person and context, and reduce load and fatigue. The business translation they offer is retention, time on page, inclusivity, and lower support cost, including in education, finance dashboards, and healthcare portals, not only long articles.

They define generative UI, citing NN/g, as a system that configures the interface in real time from intent, device, or task — distinct from using AI to help designers draw screens. An Andreessen Horowitz piece they reference says the shift is from hand-built layouts per breakpoint or segment to rules and constraints that assemble the right screen on demand. They then extend profile-based generation into what they call perceptual generative UI: using signals of load, attention, confusion, and fatigue (including eye-movement patterns) to retune typography while someone is reading. Their example is a tablet session where hesitations and backward eye movements trigger wider letter spacing, more line height, and a change of font, then further small adjustments.

A practical stack, in their words, starts with a short calibration, then behavioural refinement, the same preferences on every device, different settings per content type, context such as light and time of day, quiet background optimisation, and privacy by processing preferences locally or with little sharing. They also point at WCAG text resize, spacing, and reflow, and at Universal Design for Learning’s text-format guidance.

## Key facts

- Authors: Marjorie Jordan and Kathy Crowley; 25 July 2025.
- Evidence claim: 35+ peer-reviewed studies; the consortium page they point to involves 100+ researchers. Founders of The Readability Consortium named here: Adobe, Google, University of Central Florida, and Readability Matters.
- NN/g scale line they repeat: personalisation at the level of about 190 million yearly flyers is what makes the individual example feasible.
- Example adjustment: letter spacing and line height increased by 15%, plus a wider sans-serif, in response to reading-struggle signals.
- Named products: Adobe Target and Sensei with Real-Time CDP; Thesys C1, which generates different UIs at runtime from intent and context.
- Builder actions they list: audit static UX, capture behaviour that could drive live UI changes, and look at APIs that assemble components in real time.

## How it works

Today, responsive design mostly changes layout for screen size, and accessibility menus wait for the reader to find them. Their generative model starts from stated preferences, watches reading behaviour, and reflows type without a settings hunt. Perceptual signals are an extra input on top of a stored profile. The system is modular, so lighting, fatigue, or a shift from news to a dashboard can change the format without a new design project. They stress that the best version may be invisible: the person stays on the content.

## Implications for ui1to1.com / ui121

This is the accessibility face of one-to-one UI. ui1to1.com can say the single interface is not a single look. The same canvas can present the same task in the type, spacing, and density that this person actually reads. JSONUI already describes presentation as data, so font, spacing, and contrast can be part of the person’s interface rather than a global theme.

The article also warns against free-form generation. Their building blocks are profiles, rules, and component assembly — the same shape as a declarative canvas. ui121 should not promise eye-tracking. It can promise that one-to-one includes how the work is shown, that preferences travel with the person, and that humans stay in control of the format. Education, finance, and healthcare are the verticals they name; those are also places where a live task surface beats a static page.
