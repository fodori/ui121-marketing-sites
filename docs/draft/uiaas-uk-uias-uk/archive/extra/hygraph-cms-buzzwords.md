# Content-management buzzwords

- Source: https://www.hygraph.com/blog/the-real-deal-about-content-management-buzzwords
- Fetched: 2026-09-23
- Status: ok

## Summary

Tim, Hygraph developer relations and a MACH Alliance Tech Council member, originally writing in September 2023 and updated 12 June 2026, defines the labels and then tells the reader to ignore them until the architecture is clear. MACH is microservices, API-first, cloud-native, and headless, a vendor badge Adobe, Sitecore, and WordPress will not wear. Composable means the brand assembles modules and can swap them. A DXP is usually one vendor’s suite. DXC is the no-code layer on a composable stack: a light frontend SDK or frontend-as-a-service, a page builder, and API connectors (Uniform is the example). DXO orchestrates APIs and decisions without a WYSIWYG (Conscia is the example).

His real sequence is maturity, then specialist systems, then content federation into one query endpoint, then a headless CMS, and only then a visual composer if the team needs it.

## Key facts

- Jamstack is his example of a label that faded; he says Netlify, which coined it, now says composable.
- Federation keeps PIM, DAM, commerce, and search in place and presents one simpler API to the frontend.
- DXC is called website-leaning: without a native SDK, mobile is the customer’s problem.

## How it works

Pick tools the team can operate. Federate their data. Query that from a headless CMS. Add experimentation at the edge or in an orchestrator. Do not buy a label that skips the data model.

## Implications for uiaas.uk / ui121

DXC’s “frontend as a service” is the phrase closest to ui121, and Tim says it often stops at the website. A UK UI service should answer the mobile hole he names. Federation is also the integration story: ui121 should consume a content or commerce API, not replace it. Avoid leading with MACH; lead with who can change a screen on a phone without a release.
