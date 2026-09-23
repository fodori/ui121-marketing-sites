# Server-driven UI lessons from Airbnb, Netflix, Lyft, and others

- Title: Server-Driven UI: What Airbnb, Netflix, and Lyft Learned Building Dynamic Mobile Experiences
- Source URL: https://medium.com/@aubreyhaskett/server-driven-ui-what-airbnb-netflix-and-lyft-learned-building-dynamic-mobile-experiences-20e346265305
- Fetched: 2026-09-23
- Status: ok

## Summary

Aubrey Haskett, 8 December 2025, collects public engineering write-ups on server-driven UI. The thesis: SDUI is widely attempted at companies with huge mobile audiences, because the server sends UI instructions (JSON or protobuf) and the client renders them, so one backend change hits iOS, Android, and web without a store review. The author warns that blogs lag and some of the detail may be stale.

Apollo's definition, as Haskett quotes it, is the useful contrast. A normal API returns a user with name and email. An SDUI API returns a profile card made of a title section and an image section in a vertical stack. The client stops deciding and starts rendering. A Netflix engineer, Christopher Luu, is cited for calling that client a rendering engine.

The article places products on a spectrum. Full SDUI (Airbnb Ghost Platform) sends component types, layout, style, and actions. Partial SDUI (REI is the example) sends which components and hints, and the client owns native styling. Minimal SDUI is closer to feature flags: content, visibility, and order. Haskett's practical advice is that most successful systems land in the middle, "configuration-driven UI," with maybe 60% of the benefit and 30% of the complexity.

Company sketches, all attributed to public posts rather than new interviews: Airbnb's sections and screens, one GraphQL schema, `SectionComponentType`, native frameworks per platform. Lyft Canvas uses protobuf primitives (buttons, layouts, callbacks) for compact payloads and versioning; engineers are quoted that the platform gets more useful as more teams build on it, and that a server-driven experiment can ship in a day or two versus at least two weeks of client bake time. DoorDash Facets map one facet to one view, with a recursive model flattened for GraphQL; Mosaic (support tooling) lets operations change banners and tags in under a day and some modifications in under an hour. Netflix CLCS / UMA uses JSON plus the Hawkins design system for alerts and interstitials, and explicitly does not drive the main browse UI this way. Uber is credited with about 10x feature velocity on dozens of features, and an ActionCard pattern that let people without mobile experience build screens in about two days. Shopify's Shop app store screen could launch experiments without a weekly release. PhonePe LiquidUI: 130+ screens across nine products, features on old binaries without code changes. Yelp CHAOS uses GraphQL unions for layout variants. Faire documents a protobuf `Component` and `Property` model. Delivery Hero Fluid versions by client headers. Yandex DivKit ships a visual editor, JSON Schema checks, live preview, and a Figma plugin. Spotify HubFramework was deprecated in January 2019; an engineering talk, "The Silver Bullet That Wasn't," is the cautionary tale (iOS-only, abstraction not worth it).

Tradeoffs he repeats: huge payloads (Airbnb mitigates with an operation registry and deferred, above-the-fold responses); empty carousels when children are unknown; new component ids vanishing on old apps; actions that render but fail on tap; debugging across more layers; offline (Picnic on 60fps product grids; Netflix on "what if we cannot reach the server"); QA load because backend UI variants skip the client release train (Lyft, Just Eat). Schema split: GraphQL (Airbnb, DoorDash, Yelp) versus protobuf (Lyft, Faire), with a claimed 40–60% payload cut for protobuf. Fallbacks: server-embedded simpler components, or client registries that skip unknown types, always log them, never crash. Tooling before scale is treated as non-optional.

Open-source starting points named: DivKit, Stac (Flutter), Beagle (ZupIT), Ensemble UI. Good first screens: help, onboarding, promos, CMS content. Bad fits: offline-first, games, video, photo editing, heavy animation, tiny teams, features that rarely change.

## Key facts

- Date: 8 December 2025. Author: Aubrey Haskett. Secondary survey, not a vendor post.
- Spectrum: full, partial, minimal. Author's bet: partial / configuration-driven is where most wins land.
- Velocity figures as reported: Lyft experiments in 1–2 days vs 2+ weeks client-side; DoorDash Mosaic banners under a day, some edits under an hour; Uber ~10x on dozens of features; PhonePe 130+ screens.
- Netflix limit: messaging and interstitials, not the main catalog browser.
- Failure case: Spotify HubFramework, deprecated January 2019.
- Payload: protobuf cited at roughly 40–60% smaller than JSON.
- Client contract: send version headers; server chooses the response; unknown components must not crash.

## How it works

The server publishes a description of components and layout. A local catalog maps types to native widgets. Versioning lives on the server: the client advertises what it can render; the server omits or substitutes. Caching and deferred sections deal with latency. Testing shifts to screenshot and golden-file checks because the UI that ships is not the UI that was in the binary.

## Implications for jsonapp.com / ui121

This is the industry briefing a marketer can mine without pretending ui121 has Airbnb's traffic. Safe claims: several large apps moved frequently changing screens to server-defined UI; the client is a renderer; start with content and forms, not the hardest interaction. Unsafe claims: every screen, every company, JSON specifically (Lyft chose protobuf), or "no engineering left."

ui121's JSON UI is closer to full SDUI for the screens it owns (the form is the schema) and closer to partial SDUI for anything still native. Say that. The Spotify deprecation is the honesty line: a generic layout engine that tries to be HTML usually loses. Domain components plus a schema beat a second browser.

> "The client becomes what Netflix engineer Christopher Luu calls a rendering engine."
