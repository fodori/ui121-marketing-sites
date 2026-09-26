# LEADERS.md — The Voice of Market Leaders in JSON-Defined / Declarative / Server-Driven UI

> Compiled for ui121 (build apps as JSON UI). All quotes are real, verbatim excerpts from official docs, engineering blogs, or product pages. Compiled 2026-09-22. One quote per source was spot-verified against the live page during collection.

---

## 1. Retool

**Website:** https://retool.com
**Sources:**

- https://docs.retool.com/apps/guides/app-management/import-export
- https://docs.retool.com/build/apps

**Quotes:**

- "An app can be exported as either a single JSON file or a Toolscript archive of many files."
- "To export an app from the app IDE, in the App actions menu, click Export to JSON or Export to Toolscript ZIP."
- "Build apps with AI using the new app builder... The agent generates a React-based app consisting of components, themes, and functions that connect to your resources."
- "Use Retool's classic drag-and-drop IDE to build, deploy, and embed apps."

**Note:** Retool treats the entire app as an exportable/importable JSON document ("Replace app with JSON/ZIP") — internal tooling leader whose apps are literally artifacts-of-JSON, though its outward voice is "drag-and-drop / AI-agent," not "apps as config."

---

## 2. Airbnb (Ghost Platform)

**Website:** https://www.airbnb.com — engineering blog: https://medium.com/airbnb-engineering
**Source:** "A Deep Dive into Airbnb's Server-Driven UI System" (Ryan Brooks, Jun 2021) — https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5

**Quotes:**

- "How Airbnb ships features faster across web, iOS, and Android using a server-driven UI system named Ghost Platform 👻."
- "The Ghost Platform (GP) is a unified, opinionated, server-driven UI system that enables us to iterate rapidly and launch features safely across web, iOS, and Android."
- "The backbone of the Ghost Platform is a standardized data model that clients can use to render UI."
- "The result is a universal schema that's capable of rendering all features on Airbnb. This schema is powerful enough to account for reusable sections, dynamic layouts, subpages, actions, and more."
- "How users see Airbnb features on GP vs. how GP sees those same features as screens and sections... A section describes the data of a cohesive group of UI components, containing the exact data to be displayed — already translated, localized, and formatted."

**Note:** The canonical enterprise SDUI voice: server responds with UI descriptions ("sections," "screens"), clients render — one universal JSON schema across web/iOS/Android.

---

## 3. Netflix

**Website:** https://netflix.com — tech blog: https://netflixtechblog.com
**Source:** "Making our Android Studio Apps Reactive with UI Components & Redux" (May 2019) — https://netflixtechblog.com/making-our-android-studio-apps-reactive-with-ui-components-redux-5e37aac3b244

**Quotes:**

- "We believe reactive components are the key foundation to achieve composable UIs that are scalable, reusable, unit testable and AB test friendly."
- "Composable UIs contribute to fast engineering velocity and produce less side effect bugs."
- "Our current player UI in the Netflix Android app is using our first iteration of this componentization architecture."
- "Using a common architecture approach allows us to move very fast by having one platform implement a feature first and the other one follow."

**Note:** Netflix's voice frames UI through composability + declarative component/state architecture (Redux: UI as a function of state) — the same underlying bet as JSON-driven UI, argued in engineering-productivity terms.

---

## 4. Shopify (Remote DOM)

**Website:** https://shopify.dev
**Source:** Remote DOM README (Shopify/open-source) — https://github.com/Shopify/remote-dom

**Quotes:**

- "Remote DOM lets you take a tree of DOM elements created in a sandboxed JavaScript environment, and render them to the DOM in a different JavaScript environment."
- "This allows you to isolate potentially-untrusted code off the main thread, but still allow that code to render a controlled set of UI elements to the main page."
- "Remote DOM also offers a minimal polyfill of key DOM APIs. This lets you use a Web Worker to run JavaScript libraries that would usually need to be run on the top-level HTML page, like Preact and Svelte."

**Note:** Shopify's declarative-UI bet is UI trees defined outside the host surface and rendered inside it — the same host/spec/control-plane pattern as JSON-defined UI, expressed via a DOM abstraction for sandboxed extensions.

---

## 5. Microsoft (Adaptive Cards)

**Website:** https://adaptivecards.io — docs: https://learn.microsoft.com/en-us/adaptive-cards/
**Source:** Adaptive Cards Overview — https://learn.microsoft.com/en-us/adaptive-cards/

**Quotes:**

- "Adaptive Cards are an open card exchange format enabling developers to exchange UI content in a common and consistent way."
- "A whole new way to deliver UI: Adaptive Cards are platform-agnostic snippets of UI, authored in JSON, that apps and services can openly exchange. When delivered to a specific app, the JSON is transformed into native UI that automatically adapts to its surroundings."
- "It helps design and integrate light-weight UI for all major platforms and frameworks."

**Note:** The single most on-message voice for JSON-defined UI in the industry: UI authored in JSON, exchanged openly, rendered to native UI that adapts per platform.

---

## 6. Stripe (Elements)

**Website:** https://stripe.com
**Source:** Elements docs — https://docs.stripe.com/payments/elements

**Quotes:**

- "Stripe Elements is a set of prebuilt UI components for building your web checkout flow."
- "It's available as a feature of Stripe.js, our foundational JavaScript library for building payment flows."
- "Stripe.js tokenizes sensitive payment details within an Element without ever having them touch your server."

**Note:** Stripe's voice is "prebuilt, embeddable UI components" — declarative composition of hosted UI for a critical workflow; the equivalent of "don't build the UI, declare and embed it."

---

## 7. Bubble

**Website:** https://bubble.io
**Sources:**

- https://bubble.io/ (homepage)
- https://manual.bubble.io/ (docs)

**Quotes:**

- "Bubble: Build web & mobile apps with the only no-code AI app builder" (homepage title)
- "Bubble is a visual tools that lets you design your app by dragging and dropping elements such as text, buttons, links, tables and even maps on a page." (manual.bubble.io; typo theirs)
- "Whether you want to create an elaborate presentation page with images and animations or a simple signup form, it's all done by combining different elements in a way that your users find useful and visually pleasing."
- "Bubble is not only a no-code platform, but a complete hosting solution that automatically scales as needed."

**Note:** The low-code leader speaks "visual, drag-and-drop elements" — never "JSON" — but functionally every Bubble app is a declarative element tree + workflow config, proving the market buys apps-as-configuration without JSON vocabulary.

---

## 8. JSON Forms (EclipseSource)

**Website:** https://jsonforms.io
**Source:** https://jsonforms.io/ (homepage)

**Quotes:**

- "More forms. Less code."
- "Declare your forms as JSON based on a JSON Schema."
- "JSON Forms is a JSON Schema based approach for creating forms. It comes with off the shelf support for React, Angular and Vue."
- "JSON Forms has a modular architecture and can be customized on every level. The core functionality is pure Javascript and therefore independent from any UI framework."

**Note:** The purest open-source expression of the thesis: data schema (JSON Schema) + UI schema (JSON) + renderer, framework-agnostic.

---

## 9. JSON Schema (Open Standards Org)

**Website:** https://json-schema.org
**Source:** "What is JSON Schema?" — https://json-schema.org/overview/what-is-jsonschema

**Quotes:**

- "JSON Schema is a declarative language for defining structure and constraints for JSON data."
- "JSON Schema allows developers to describe the structure, constraints, and data types of existing JSON data."
- "JSON Schema supports the creation of machine and human readable documentation."

**Note:** The standards body behind the "declarative language for JSON" vocabulary that all the above build on — the anchor for an "apps as JSON + schema" pitch.

---

## 10. Mobile Native Foundation

**Website:** https://mobilenativefoundation.org
**Source:** https://mobilenativefoundation.org/

**Quotes:**

- "Improving engineering for large-scale mobile applications."
- "The Mobile Native Foundation provides a place to collaborate on open source projects and discuss wide ranging topics in order to improve processes and technologies for large-scale Android and iOS applications."

**Note:** Not a declarative-UI project per se (it's build/dev-infra collaboration across large Android & iOS orgs); included as the cross-platform-native community whose members (incl. Airbnb, Netflix, Lyft, Shopify practitioners) drive server-driven UI adoption. Treat as community/adjacent voice, not a JSON-UI voice.

---

## Cross-cutting voice summary (positioning cues for ui121)

1. **"Authored in JSON → rendered as native UI"** is Microsoft's exact framing; Airbnb proves it at Airbnb-scale with a "universal schema."
2. **Leaders avoid the word "JSON" toward buyers** (Retool: drag-and-drop/AI; Bubble: visual/no-code) — the JSON story is told to developers, the "no code, instant app" story to the market.
3. **Recurring value words:** composable, reusable, platform-agnostic, ship faster, safely, consistent, one place (backend) for business logic.
4. **The control-plane pattern** (Shopify Remote DOM, Adaptive Cards, Ghost): untrusted/remote definitions rendered inside a controlled host — a strong security-and-governance argument ui121 can reuse.
