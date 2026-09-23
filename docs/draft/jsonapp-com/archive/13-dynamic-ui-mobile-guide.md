# Dynamic UI for mobile engineers (practical SDUI guide)

- Title: Dynamic UI for Mobile Engineers: a practical guide to server-driven interfaces
- Source URL: https://medium.com/@ericomartin.0785/dynamic-ui-for-mobile-engineers-a-practical-guide-to-server-driven-interfaces-e3016709178e
- Fetched: 2026-09-23
- Status: ok

## Summary

Eric Ibu, 4 December 2025, writes a practical Android guide to dynamic UI, also called server-driven UI. The problem is release cadence: regulations, copy, and experiments should not wait for a store build. The contract is a JSON or protobuf description of screens and components, rendered by a small local catalog. The server decides what appears; the client decides how it looks inside platform rules. He is explicit that this is not HTML inside native UI.

Benefits he lists: compliance fields (a tax id) can appear or hide from the server; cohorts and regions get different schemas; business logic moves off the binary. Failure modes: huge payloads, pixel-level control, brittle UIs. The recommended renderer is Jetpack Compose, mapping a sealed set of types (text, input, button, list, image, container) plus a small layout DSL (columns, rows, spacing). Props he wants on each node: type, key, label, validations, visibility rules, style token. Form values sit in a typed state map. Unknown types fall back or are skipped and logged. The schema itself is versioned.

Where to store the UI: Firebase-style remote config for small JSON and rollouts; a CMS or REST service when non-developers edit richer layouts; a database plus CDN, with signed payloads, at production scale. For fintech or health he prefers REST plus HMAC so a bad admin console cannot inject a screen that skips checks. Server validation stays mandatory: format, required fields, business rules, idempotency. No PII or secrets in the config, and no embedded code. Performance: reference style tokens instead of repeating style objects, cache with ETag, ship a tiny fallback schema for cold start, log schema version and fallback rate. Testing: a local schema playground, unit tests per primitive, integration tests for version upgrades and unknown types, flags for rollback. Do not use SDUI for games, heavy animation, or pixel-perfect marketing screens. His rollout order is announcements and promos, then forms.

## Key facts

- Date: 4 December 2025. Author: Eric Ibu. Audience: Android / Compose.
- Contract fields he names: type, key, label, validations, visibilityRules, styleToken.
- Hosting ladder: remote config, CMS/REST, signed CDN.
- Security: HMAC-signed schema, server-side validation, no executable payload, no PII in config.
- UX: ETag cache, bundled fallback, observability on schema id and fallback.
- Checklist: small schema, Compose renderer, versioned signed endpoint, cache, metrics, tests, low-risk screens first.

## How it works

A screen document lists components. The app decodes them into a sealed type and a Compose tree. Buttons emit action names (`submit`) rather than code. The client may pre-check a field, then the server validates again. If the document is newer than the app understands, the unknown node is dropped. Operators change the document; users do not update the app for those changes.

## Implications for jsonapp.com / ui121

This is the implementation checklist ui121 can publish without claiming a new invention: a closed component set, style tokens, signed documents, server-side validation, fallbacks, and a playground. It matches ui121's existing split (JSON UI model plus a renderer, validation on the server). The jsonapp.com angle is to show the document, not the Compose code.

The regulated-domain point is a sales line: instant copy and field changes matter in finance and health, and signing the JSON is how you let AI or an admin edit UI without letting them skip checks.

> "This is not arbitrary HTML-in-native: it's a schema + renderer approach."
