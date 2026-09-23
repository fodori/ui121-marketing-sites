# Airbnb Ghost Platform (server-driven UI)

- Source: https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-8423941019c8
- Fetched: 2026-09-23
- Status: partial

## Summary

The URL printed in the source list returns 404. The same essay is live under a different Medium slug ending `842244c5f5`. Notes below are from that page, fetched the same day. Author Ryan Brooks, 29 June 2021, Airbnb engineering.

The problem is the usual client-driven listing page. Each of web, iOS, and Android turns listing data into its own UI, the implementations drift, and mobile users do not see a change until they install a new build. Ghost Platform (named for Guest and Host) sends both the data and the presentation in one response. The backend decides layout, which sections appear, what they show, and what happens on tap, for all three clients at once.

By the time of the post, Ghost Platform was about a year old and already under search, listing pages, and checkout. The author still calls it early. The roadmap he names is nested sections, better discovery of existing pieces in Figma, and editing sections without code.

## Key facts

- One shared GraphQL schema for web, iOS, and Android, served through Airbnb’s data mesh Viaduct. Client frameworks are TypeScript, Swift, and Kotlin.
- Two response ideas: sections (a cohesive block of already localised, formatted data) and screens (where those sections sit, plus modal versus full-screen and logging).
- `SectionComponentType` lets one data model render in more than one visual treatment (a plain title versus a Plus-styled title).
- Screens pick a layout per form factor (compact versus wide) through an `ILayout`. Placements point at section ids instead of inlining the same section twice, which keeps the payload smaller.
- `IAction` lets the server name what a tap or swipe does. Some actions are generic (navigate, scroll). Features can add their own.
- A tech talk, “Re-engineering Travel,” covers the same system; the post points viewers to roughly the 31-minute mark.

## How it works

A feature backend fills a `GPResponse`: a list of sections wrapped with status and logging, and one or more screens. The client framework parses that, finds a section component for each `SectionComponentType`, and builds UI with no knowledge of neighbouring sections. It then finds the screen whose id is `ROOT`, chooses the layout for the device, and drops each section into a placement (nav, main, footer in the single-column example). Clicks call a shared action handler with the action object from the payload.

Section outline: why client-driven UI fails; what SDUI changes; Ghost Platform and the shared schema; sections; screens and layouts; actions; a full response walked through; what was still unfinished.

## Implications for uiaas.uk / ui121

This is the canonical in-house proof that a server can own an interface across web and native. It is also proof of the cost: a universal schema, three native renderers, and a year of platform work before the core journeys moved over. ui121’s offer is that work already done and sold as a service. Ghost Platform’s own next step (edit sections without a code change) is the product sentence for `uiaas.uk`. Do not link the 404 slug; link the live Medium id if a citation is needed.
