# VThink — JSON-based dynamic UI in React Native

- Title: Building a JSON-Based Dynamic UI in React Native
- Source URL: https://www.vthink.co.in/blogs/building-a-json-based-dynamic-ui-in-react-native
- Fetched: 2026-09-23
- Status: ok

## Summary

Santhosh Viswanathan, 15 April 2025, on the VThink blog, describes defining a React Native interface as JSON so the UI can change without a store submission. He positions it for frequent UI changes, A/B tests, and personalization. Benefits: remote updates, per-user customization, a path for non-developers, and dynamic themes.

The mechanism is a tree. Each node has a type (View, Text, Button), props (style, text, title, and an onPress name), and children. A recursive function maps type strings onto React Native components and renders children the same way. Unknown types return null. Events are not functions in the JSON. The button’s onPress is a string such as "handleButtonPress", and a separate handler switches on that string (the sample alerts). Remote delivery is a fetch of a UI JSON URL into state, which re-renders. The post also sketches project setup (React Native CLI, an optional JSON tree viewer) but that is boilerplate around the pattern.

Use cases: CMS-driven content, light and dark themes, experiments, low-code edits by business teams, e-commerce layouts, and multi-tenant UI. Practices at the end: cache the JSON, validate before render, try/catch around parse, keep structures reusable. The article does not discuss versioning, signing, accessibility, or what happens when the type string is a component the app has never shipped.

## Key facts

- Date: 15 April 2025. Author: Santhosh Viswanathan. Publisher: VThink.
- Node shape: type, props, children.
- Types in the sample: View, Text, Button.
- Actions: string names dispatched by a client switch, not executable code.
- Remote: fetch a JSON URL and store it in React state.
- Stated uses: CMS, theming, A/B, low-code, commerce, multi-tenant apps.
- Safety notes in the post: cache, validate, catch parse errors, modular JSON.

## How it works

On load, the app requests a document. A recursive renderer walks the tree, picks a component, spreads props, and maps children. For buttons it replaces the string handler with a real function. If the document changes on the server, the next fetch changes the tree. Layout is whatever the JSON nests. The component set is whatever the switch statement knows.

## Implications for jsonapp.com / ui121

This is a vendor tutorial of the pattern jsonapp.com states in one paragraph. Use it as evidence the recipe is now a common agency blog topic (2025), not a 2017 experiment. Do not treat the sample as production guidance: spreading props through and mapping type strings directly is how a JSON UI becomes an injection bug. ui121’s story should be the validated catalog version of this tree.

Multi-tenant UI is the line that matches ui121’s product. The post names it; ui121 can show it, with schema checks the tutorial only mentions.

> "Instead of hardcoding UI elements in JSX, developers can structure the UI using a JSON object and render components dynamically."
