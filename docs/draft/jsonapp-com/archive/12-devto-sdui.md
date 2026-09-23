# DEV Community — Server Driven UI (Nishant Keshav)

- Title: Server Driven UI
- Source URL: https://dev.to/nishant_keshav/server-driven-ui-3l0p
- Fetched: 2026-09-23
- Status: ok

## Summary

Nishant Keshav, 7 July 2025, writes a beginner explainer. He jokes that SDUI is not "CSS files stored on the backend." The problem is a payment-app redesign: today you change layout and business logic in the client, ship a store update, and hope people install it. Many do not. SDUI sends the UI definition as JSON (or another format). The app is a renderer.

His worked example is a product listing. Traditionally the app downloads products and the developer’s row layout paints them. Adding star ratings, a sale treatment, or a horizontal featured strip means code, QA, store review on two platforms, then a wait for updates. Some users update immediately, some never. With SDUI the response is a list view of row views, each with text, images, spacing, alignment, colour, and copy. The pixels match the old screen, but the change is a server edit measured in days or hours, and iOS and Android stay in lockstep.

Advantages he lists: updates without a download, per-user UI, A/B tests, one schema for Android, iOS, and web. Disadvantages, which he spends real space on: the backend becomes a UI controller and couples to the client; rich animation and custom components get harder and you lose React or Vue’s component tooling; bugs hide in malformed JSON; you pay for an extra round trip and a fatter payload unless you cache; you lose typeahead, previews, and debuggers unless you build them; backend engineers must learn layout; drag-and-drop and advanced charts usually fall back to native code. His conclusion is a trade: runtime flexibility against complexity, performance, and developer experience. Good fits are CMS pages, forms, and onboarding. Bad fits are animation, rich interaction, and fast frontend-only iteration. He ends with "use at your own risk" and points at PhonePe write-ups plus Airbnb and Swiggy as further reading. Those outbound posts were not expanded here; this URL is a single article.

## Key facts

- Date: 7 July 2025. Author: Nishant Keshav. DEV Community.
- Definition: client renders UI structure sent by the server, usually JSON.
- Release pain he enumerates: write, test, submit, store review, user update, twice for iOS and Android.
- SDUI response in the example includes layout properties (spacing, alignment, colour), not only domain data.
- Recommended scope: CMS, forms, onboarding. Not animation or highly custom interaction.
- Further reading named but not fetched as extras: PhonePe parts 1 and 2, Airbnb, Swiggy.

## How it works

The server stores UI definitions. The client parses them into buttons, fields, labels, and containers. A listing screen asks for a view tree instead of a product array. Changing a row is a change to that tree. The article does not specify a schema, versioning, or a component catalog beyond the idea of views inside views.

## Implications for jsonapp.com / ui121

This is the plain-language version of the pitch, including the objections. A jsonapp.com page can use the listing-screen story (weeks of dual-platform release versus a JSON edit) and should repeat his limit: forms and flows, not a second animation framework. ui121 already is that form-and-task scope. Cite the primary Airbnb article for scale, and this post only as an accessible explainer.

> "The client app becomes a renderer that reads the UI structure sent by the server and displays it accordingly."
