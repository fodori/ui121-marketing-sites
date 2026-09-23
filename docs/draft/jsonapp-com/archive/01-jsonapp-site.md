# JSONApp site

- Title: JSONApp site
- Source URL: https://www.jsonapp.com/
- Fetched: 2026-09-23
- Status: ok

## Summary

jsonapp.com is a short product page, hosted as a Google Site, that states a single idea: a special JSON structure can be viewed as a full application. The page addresses people who want a prototype, an API tester, or a mobile application, and it describes the runtime as a viewer for that JSON, compared in the page's own words to a browser.

The feature list is the useful part. The author claims the JSON can express a data-driven application, a component-driven UI, in-app page navigation, internationalisation, a data store, data management, HTTP and MQTT communication, a module structure, and themeable styles. That is a full-app claim, not a form or card claim. Screens, state, networking, and look are all supposed to live in the markup.

The page is thin on mechanism. It does not publish a schema, an example document, a viewer download, or a demo. Contact is a single mailbox, support@jsonapp.com. A related privacy page on the same site describes JSONApp as a free mobile app plus website and platform, and names Google Play Services plus Microsoft App Center analytics and crash reporting as third parties. The homepage itself, as fetched, does not show a Play Store link.

## Key facts

- Pitch on the page: a markup language in JSON that defines a full application, "like a Browser."
- Intended jobs: prototype, API tester, mobile application.
- Named capabilities: data-driven app, component UI, pages, i18n, data store, data management, HTTP, MQTT, modules, themeable style.
- Contact: support@jsonapp.com.
- Privacy page (same site): free app; device-side personal data; Play Services and App Center analytics/crashes; no DPO; contact the same mailbox.
- No public schema, sample JSON, or live viewer URL on the homepage.

## How it works

The page describes a generic viewer that interprets a private JSON dialect and turns it into an application. Navigation is "pages" inside that application. Data is not only displayed: there is a store and a management layer. The network story is both request/response (HTTP) and a messaging protocol (MQTT), which implies the JSON can describe live updates, not only static screens. Modules and themes suggest the document can be split and restyled without rewriting the viewer.

What is not specified is the contract: component names, how actions bind to HTTP or MQTT, how the store is scoped, or whether the JSON is fetched remotely on each open. The product is presented as already existing (a free mobile app) rather than as an open specification.

## Implications for jsonapp.com / ui121

This is the namesake of the research angle: one JSON document is the app, and a viewer is the only native binary. ui121 can use the same sentence — markup in JSON, like a browser — but should not lean on this site as proof of a mature product. The page is a feature checklist without a published schema or examples.

The checklist is still a useful product outline for a JSON app runtime: pages, components, i18n, a local store, HTTP plus a realtime channel, modules, and themes. MQTT is the distinctive item versus most server-driven UI write-ups, which stop at HTTP or GraphQL. ui121 already has MQTT in the product; a jsonapp.com story can say the app definition and the live channel are the same family of data.

Positioning gap: jsonapp.com does not mention AI, JSON Schema, or an open spec. ui121's wedge is an inspectable, schema-checked JSON UI that an agent can write, which this page only sketches.
