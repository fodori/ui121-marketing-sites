# Hosting (planned — not wired in this phase)

## Intent

- One Firebase project (optional) with **multiple Hosting sites**
- Independent deploy per domain: `firebase deploy --only hosting:<target>`
- Separate **GA4** property/stream per domain for independent measurement
- Static Astro `dist/` only — no SSR adapter required

## Suggested map

| Domain               | Hosting target   | Build output                      |
| -------------------- | ---------------- | --------------------------------- |
| human-in-the-loop.uk | `hitl`           | `sites/human-in-the-loop.uk/dist` |
| ui121.com            | `ui121`          | `sites/ui121.com/dist`            |
| …                    | slug from domain | `sites/<domain>/dist`             |

## Preview

Until Firebase is wired: `yarn site:preview <domain>` (`astro preview`).

## Leads

React island → Firebase JS SDK (Firestore) when configured. No custom Express API in this repo.
