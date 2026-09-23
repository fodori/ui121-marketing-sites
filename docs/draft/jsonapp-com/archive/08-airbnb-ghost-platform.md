# Airbnb Engineering — Ghost Platform server-driven UI

- Title: A deep dive into Airbnb's server-driven UI system
- Source URL: https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5
- Fetched: 2026-09-23
- Status: ok

## Summary

Ryan Brooks, 29 June 2021, describes Ghost Platform (GP), Airbnb's server-driven UI system for guest and host features. The problem he sets up is the usual split: the backend sends listing data, and each of web, iOS, and Android turns that data into UI. That duplicates listing-specific logic, lets clients drift, and ties every layout change to a mobile release. SDUI sends the UI and the data together. The client draws what it is given and does not need to know it is "a listing."

GP is one opinionated system with native frameworks in TypeScript, Swift, and Kotlin. Teams share sections, layouts, and actions, many of them backward compatible, and move business logic to the backend. The schema is one GraphQL schema for all three clients, served through Airbnb's data-service mesh, Viaduct. Brooks says the result is a universal schema that can render Airbnb features: reusable sections, dynamic layouts, subpages, and actions.

A response has sections and screens. A section is a cohesive group of UI data, already translated, localized, and formatted. A screen places those sections, and says whether the presentation is a popover, a modal, or full screen, plus logging. Sections are a GraphQL union wrapped in a SectionContainer (status, logging, data). `SectionComponentType` lets one data model render more than one way: a title section can be a normal title or a Plus-styled title. Section components are platform classes that map one component type to UI and do not receive feature business logic. Screens use `LayoutsPerFormFactor` so compact and wide layouts differ; the client picks using density and rotation. Placements point at section ids instead of inlining section data, so the same section can appear in more than one layout without repeating the payload. `IAction` is how a tap or swipe is defined in the response. GP routes generic actions (navigate, scroll to a section). Features can add their own action types and handlers.

At the time of the post, GP was about a year old and already under most of the heavily used surfaces: search, listing pages, and checkout. Next steps he names: nested sections, Figma-linked discoverability, and WYSIWYG editing so some feature changes need no code. He also points at an Airbnb tech talk, "Re-engineering Travel," with the GP overview starting around minute 31.

## Key facts

- Author: Ryan Brooks. Date: 29 June 2021. System name: Ghost Platform (guest + host).
- Clients: web (TypeScript), iOS (Swift), Android (Kotlin). One shared GraphQL schema via Viaduct.
- Primitives: sections (data + component type), screens (layout, placements, presentation, logging), actions (`IAction`).
- Layout: `LayoutsPerFormFactor` with compact and wide `ILayout`s. Placements reference section ids.
- Example layout: `SingleColumnLayout` with nav, main, and footer placements. Root screen id is `ROOT`.
- Adoption claim: a majority of the most-used features (search, listing, checkout) after about a year.
- Roadmap in the post: nested sections, design-tool discoverability, WYSIWYG section editing.

## How it works

The feature backend implements a `GPResponse`: a list of sections and a list of screens. Client GP code fetches it, finds section components by `SectionComponentType`, builds UI with no surrounding feature context, then a layout renderer drops those UIs into placements. Clicks call `GPActionHandler` with the action object from the section. Styling of many sections stays in the client design system; the server decides which section, which component type, which copy, and which action.

This is coarser than a Jasonette label-and-stack language. Airbnb's atom is a section (a card or block of UI), not a single text node. That choice is the scalability lesson.

## Implications for jsonapp.com / ui121

Cite this as scale proof: a consumer marketplace rendered its main flows from one schema across three clients, and shipped layout changes from the server. ui121 should copy the structure, not the GraphQL: a screen is placements of reusable sections, actions are data, unknown types must not crash, and one response serves every client.

Do not claim ui121 is Ghost Platform. GP still needs native section components in the binary. New visual primitives are a client release; new arrangements of known sections are not. That is the honest version of "no release." jsonapp.com's "full app in JSON" is the fine-grained end of the same spectrum. A marketer can say ui121 sits between a toy markup and Airbnb's section model: JSON the author or an AI can edit, rendered by a catalog the product owns.

> "The Ghost Platform (GP) is a unified, opinionated, server-driven UI system that enables us to iterate rapidly and launch features safely across web, iOS, and Android."
