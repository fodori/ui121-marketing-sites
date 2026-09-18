# Strategy & positioning

## Problem

Autonomous systems hit a wall: they need nuanced human judgment, approvals, or missing data. Chatbots and static forms are too rigid. Custom UIs per workflow are slow and expensive.

## Solution (public language)

A real-time, API-first, AI-native human–machine interface. Machines send a **bounded UI** to a person (or group), get structured answers back, and continue.

Safer than “let the model invent an app”: the channel is controlled; humans only see approved surfaces.

Buzzwords to use: **AI-native**, **real-time**, **API-first**, **programmable**, **safer than blind generated UI**.

## Voice rules

| Do                                        | Don't (satellite sites)                |
| ----------------------------------------- | -------------------------------------- |
| Problem → solution → use cases            | Product internals (MQTT, tenant model) |
| Structured UI vs chat dump                | Task API shapes / OpenAPI              |
| Catalog + validation vs free-form HTML    | JSONUI engine deep-dives               |
| Faster / cheaper / safer than custom apps | “UI121” brand (except company site)    |

## Site roles

| Role                | Domains                                         |
| ------------------- | ----------------------------------------------- |
| Click collector     | `human-in-the-loop.uk`                          |
| Company / product   | `ui121.com` (UI121 Ltd; app at `app.ui121.com`) |
| Angle satellites    | All other listed domains                        |
| Marketplace (later) | `helpexpert.me`, `newhuman.store`               |

## Content flexibility

All long copy lives in `src/content/` modules. `site.config.ts` is the switchboard (SEO, GA, nav, section order, theme tokens). Rewrite copy or reorder sections without touching layout components.
