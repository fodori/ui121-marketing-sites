# Mobile Native Foundation discussion #47 — SDUI strategies

- Title: Server-driven UI (or Backend driven UI) strategies
- Source URL: https://github.com/MobileNativeFoundation/discussions/discussions/47
- Fetched: 2026-09-23
- Status: ok

## Summary

Opened 8 March 2021 by Felipe Costa (OLX Brasil, mobile platform), discussion #47 asks practitioners how they do server-driven or backend-driven UI. The thread is a working debate, not a tutorial: where the pattern pays, where teams pulled back, and what they wish they had scoped first. It runs for years of replies (into 2025) and is the best "honest positioning" source in this set.

Molotov (ilansas) drives navigation from the server for desktop, iOS, Android, and smart TV, including dialogs via Actions, but moved most mobile UI off a fully generic model because the app became too abstract and was not faster to build. They kept dynamic navigation and variable button and text content. Airbnb's Ryan Brooks (rbro112), who later wrote the Ghost Platform post, lists pros: one response for every client, features that reach old binaries, A/B tests by changing one backend, shared layouts and sections, business logic in Actions, and a shared GraphQL schema that fixed earlier polymorphism bugs. Cons: screenshot and E2E tests still miss dynamic responses; core section changes can break other screens; GraphQL payloads get huge (operation registry and deferred responses as mitigation); developers need mocks and docs or they cannot see what they are building; UI becomes generic and business logic must leave the view. His conclusion: powerful once launched, painful to migrate, not worth it for a small team without a platform group. Real apps stay mixed. He expects Jetpack Compose and SwiftUI to fit SDUI better because they are already declarative.

Lyft's Keith Fang (kxfang) gives the motivations that marketing should quote carefully: rider clients officially supported for up to about two years, so behaviour must change without an update; complex copy and help screens should live once on the server; experiments in a day or two instead of a two-week client bake. Downsides he makes teams confront: API surface explosion and versioning (they were not on GraphQL); store review still cares about large feature changes; high upfront cost with no early business win; some formerly easy client tweaks now need both sides, especially local state; custom animation and accessibility get harder when the client does not know what it is drawing; slow first paint; collisions while a screen is half migrated. Recommendations: agree flexibility with design and product first; start simple; keep the API small (send text, let the client style it, unless restyling without a release is a real requirement); pick abstraction level (buttons versus cards) to match the need; validate responses so server authors do not have to read client code; automate snapshot tests. Canvas, described as internal in 2021, is protobuf primitives plus renderers plus a feature-agnostic template service, used where they must not wait for a client release. Fancy motion and client state stay outside it.

Zalando's Kandel Vijaya describes AppCraft as three knobs: data, design, and behaviour. The web is the extreme (full parameterization plus script). They parameterize all three but constrain design (typed animations) and behaviour (a fixed event and action set: tap, scroll-end, deeplink, track). The question he leaves is whether a truly powerful backend-driven UI is just a browser. Sampingan used JSON Schema draft 7 for wizard forms, with `ui:order` because JSON objects are unordered, and section jumps stored as data. Beagle is plugged as an open-source SDUI API. REA Group (alexhayes) renders with SwiftUI, Compose, and React, a small flexbox-like subset tied to the design system, and a state tree that actions mutate (insert on press, navigation, sockets, forms, logging, payments). Hot reload fell out of the socket work with no extra client change. A 2025 reply says that implementation is not open source. Versioning consensus across Daniel Dao and alexhayes: the server reads client headers (framework, app, OS, device) and sends only what that client can draw; unknown components are omitted, not crashed; fallbacks are a server problem.

## Key facts

- Discussion opened 8 March 2021. 24 comments and further replies on the fetched page.
- Airbnb pros/cons in-thread match the later Ghost Platform article (same engineer).
- Lyft: consumer apps supported up to ~2 years; server experiment 1–2 days vs ~2 weeks client bake.
- Lyft Canvas (2021): internal, protobuf, hybrid with macro components long-term.
- Zalando AppCraft: data + constrained design + constrained behaviour. Explicit "are we building a browser?" test.
- REA Group: declarative native renderers, state tree, actions for navigation through payments. Not open source.
- Repeated rule: components must already be in the binary; the server only passes props and composition.

## How it works

There is no single architecture in the thread. The shared mechanism is a schema the client already knows how to render, plus server-chosen composition and actions. Teams differ on grain size (navigation only, forms, sections, or near-flexbox) and on payload (GraphQL, protobuf, JSON Schema). State is the hard part: read-only screens are easy; text fields and local edits push teams either to round-trip the server or to keep a client state tree the server is allowed to patch.

## Implications for jsonapp.com / ui121

Use this thread to keep the jsonapp.com pitch honest. Leaders who run SDUI at scale also say it can slow a team down, bloat APIs, and fail accessibility if the catalog is too generic. ui121's advantage, if stated carefully, is a narrow catalog (task UI, forms, actions) with schema validation, not a promise to replace SwiftUI.

The Zalando line is the positioning test: if the JSON can express anything, you have reinvented the browser and lost the design system. jsonapp.com should say the format is expressive enough for apps and strict enough that a host can render it safely. The Lyft "send text, not pixels" rule is how ui121 should talk about theming: the document names intent, the runtime owns look.

> "If we build backend driven UI truly powerful, would it be closer to how Web Browser work?"
