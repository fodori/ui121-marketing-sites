# jsonapp.com — BUILD APPS AS JSON UI

## Main goal
jsonapp.com is a small, focused project whose pitch is exactly the angle we're researching: **"Markup language in JSON to define a full featured application, like a Browser. Simple as that."** The jsonapp.com site (and its Android viewer app, `com.jsonapp.viewer` on Google Play) renders a special JSON structure *as a working application*. The JSON payload defines:

- Data-driven application & component-driven UI
- Navigation inside the application (pages)
- Internationalisation (i18n)
- Data store + data management
- HTTP and MQTT communication
- A module structure
- Theme-able styles

In other words: the *entire application* — screens, state, data wiring, theming, networking — is a JSON document, and a generic runtime viewer executes it. It targets quick use cases: prototypes, API testers, and simple mobile applications. This is the "browser for a JSON app format" model (analogous to Jasonette/Jsonelle and to server-driven UI): the same runtime, many different JSON-defined apps.

## The problem today
1. **App development is expensive and slow.** Building even a modest mobile app means native iOS + Android + web codebases, release cycles, app-store review, and large engineering teams. Every product change costs a release.
2. **Low-code platforms lock you in.** Retool, Power Apps, Bubble, Appsmith etc. solve "apps from configuration" but store the definition in proprietary visual canvases. The *definition* of the app is not a portable, open, AI-friendly artifact — it's a walled garden.
3. **Configuration lives in code, not data.** Most configurable apps today hardcode screens in Swift/Kotlin/JSX. Teams that want per-customer or per-tenant customization must fork code or build bespoke "feature flag" layers.
4. **JSON UI is proven but fragmented.** Adaptive Cards, Slack Block Kit, Airbnb's Ghost Platform, Shopify's remote-dom, JSON Forms — each solves one slice (cards, messages, forms, extensions) with its own schema. There is no mainstream, end-user-facing "one JSON file = one app" format with a universal viewer.
5. **AI-era mismatch.** LLMs generate and reason about JSON extremely well, but today's app platforms demand code, SDKs, and IDEs. The definition format that AI can write fluently (JSON) is not the format apps are built in.

## How JSON-as-app helps
- **One artifact, any client.** A JSON app definition is platform-agnostic data; the viewer is the only native code. Ship once, run anywhere the viewer exists (jsonapp.com ships a single Android viewer that renders every JSON app).
- **Zero-code authoring.** A prototype or internal tool becomes an editable JSON document rather than a project skeleton — perfect for API testing, dashboards, and simple mobile utilities.
- **Server-driven updates.** Because the app *is* data, features ship by serving new JSON — no release cycle, matching what Airbnb/Netflix/Lyft validated at scale with server-driven UI.
- **Auditable, diff-able, versionable.** JSON configs live happily in git, get code-reviewed, and can be validated with JSON Schema.
- **Customizable per user/tenant.** End users or admins can safely tweak a JSON payload (with schema validation) the way low-code tools promise, but without a proprietary canvas.

## What's cutting edge here
- **Server-driven UI (SDUI) at web scale.** Airbnb's Ghost Platform, Netflix, Lyft, Expedia and Flipkart all moved core mobile surfaces to backend-defined UI. That pattern is now mainstream engineering practice.
- **Declarative JSON UI standards.** Microsoft Adaptive Cards (JSON UI snippets exchanged between apps/services), Slack Block Kit (JSON layout blocks), JSON Forms (JSON Schema-driven forms for React/Angular/Vue) prove the "UI as data" contract works across ecosystems.
- **"Browser for apps" runtimes.** Jasonette/Jsonelle pioneered "JSON markup → native app" exactly like jsonapp.com; newer entrants (StemJSON, BDUI Go) are reviving it as an open spec for AI-generated, server-driven, end-user-customizable apps.
- **JSON-driven React Native.** ClearTax's BLACK app and many teams render entire screens from JSON payloads so anyone on the team can change layout without a release.
- **AI generation convergence.** The 2025+ wave: LLMs + JSON Schema = apps generated as data. Spec-driven development and "RIP low-code" debates (HN, late 2025) frame JSON-defined apps as the successor to visual low-code.
- **Open declarative specs for AI-built apps.** StemJSON explicitly markets itself as "open declarative JSON specification for AI-generated, server-driven, end-user-customizable native mobile apps" — a direct signal of where the market is heading.

## ui121 fit
ui121's thesis — applications defined as JSON data-driven UIs — sits directly on the pattern jsonapp.com demonstrates:

- **Same core idea, broader scope.** jsonapp.com proves a generic JSON viewer can run full apps (navigation, data store, HTTP/MQTT, i18n, theming). ui121 can adopt the same "one runtime, many JSON apps" architecture but target richer, production-grade apps and modern web/mobile stacks.
- **Differentiator: AI-native authoring.** jsonapp.com's JSON is hand-authored; ui121 should position the JSON UI as the *interface between the user and an AI builder* — the AI writes/edits the JSON, the runtime renders it, the user tweaks it. That's the layer none of the incumbents (Retool, Adaptive Cards, Block Kit) own.
- **Differentiator: openness.** Low-code stores definitions privately; ui121's JSON is portable, inspectable, and git-friendly — a strong wedge against Retool/Bubble lock-in.
- **Market proof to cite.** Airbnb/Netflix/Lyft SDUI adoption, Adaptive Cards' ubiquity in Microsoft 365, Slack Block Kit, and JSON Forms' enterprise use are all evidence that "apps as JSON" is a validated, growing paradigm — not a fringe idea.
- **Positioning line:** "Low-code without the walled garden: ui121 apps are JSON — readable by humans, writable by AI, renderable anywhere."

## Why it's brilliant
1. **The browser analogy is proven and irresistible.** HTML turned documents into data fetched from anywhere; JSON-as-app does the same for applications. The browser needed no code changes per website — ui121's runtime needs no code changes per app.
2. **JSON is the universal interface — especially for AI.** LLMs are trained on billions of JSON structures, generate it reliably, and can be constrained by JSON Schema. An app format in JSON is *the* format machines (and increasingly humans) can manipulate safely.
3. **Update latency collapses to zero.** UI is served, not shipped. Product teams iterate at API speed; end users never download anything.
4. **Democratizes app building safely.** Schema-validated JSON means non-engineers can build, and validation guarantees safety — the promise of low-code without proprietary lock-in or shadow-IT chaos.
5. **Big Tech already voted.** Microsoft, Slack, Airbnb, Netflix, Lyft, Shopify, and ClearTax all shipped JSON-defined UI systems in production. The idea is de-risked; what's missing is the consumer/first-class "app = a JSON file + a great runtime" product — exactly the gap jsonapp.com sketches in miniature and ui121 can own.
