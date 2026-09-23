# Infrastructure for news sites

- Source: https://www.hygraph.com/blog/infrastructure-for-news-websites
- Fetched: 2026-09-23
- Status: ok

## Summary

A component map for modern news properties: live tickers and streams, weather, entertainment, lifestyle, and sport, each fed by outside data. The hard parts are localisation, many APIs, analytics, and permissions for journalists, editors, photographers, and readers.

The architecture advice is a headless content core plus specialist feeds, role-based access, and presentation that can differ by device. Hygraph is the suggested content system of record, not the video CDN or the weather feed.

## Key facts

- Live news may need a player, a streaming origin, a CDN, and chat.
- Weather, wires, social, scores, and odds are separate integrations with compatibility, performance, and security costs.
- Visualisation (charts and maps) and engagement analytics are called out as product requirements.
- RBAC is the control for who may publish what.

## How it works

Editors manage stories and media in the CMS. External APIs fill widgets the CMS does not own. The site or app queries both. Locales change language and cultural framing, not only words. Permissions gate the newsroom.

## Implications for uiaas.uk / ui121

A news app is a server-driven layout with slots for live data. That is a reference customer for UI-as-a-service: the desk changes the arrangement of tickers and stories without an app release, while wires stay external. ui121 does not need to be the wire; it needs to be the layout contract.
