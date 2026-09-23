# Lyft — the journey to server-driven UI at Bikes and Scooters

- Source: https://eng.lyft.com/the-journey-to-server-driven-ui-at-lyft-bikes-and-scooters-c19264a0378e
- Fetched: 2026-09-23
- Status: ok
- Recovered because: https://lyft.github.io (source 07) returns 404 and does not host this essay.

## Summary

Alex Hartwell and Tim Miko, 9 March 2023, describe why Lyft Bikes and Scooters stopped sending business objects to the phone and started sending view descriptions. The reasons they name are business complexity, release speed, and being able to staff a feature on either client or server. The history is a pile-up of vehicle types. Dockless scooters in Denver in 2018 mapped ride state straight onto UI. Electric bikes added an enum. The Motivate acquisition added docked city systems (Citi Bike and the rest) inside the Lyft codebase, so behaviour changed by vehicle and by app. Hybrid docking broke the enum: the same “e-bike” did not mean the same hardware. Mobile engineers could not keep the switch statements honest.

Their first step was what they call server-supplemented UI, earlier nicknamed capabilities. The server returned booleans, localised strings, image URLs, alerts, and panels, while the client still owned the screen. A generic station message (image, title, description, deep link) started as an offline notice and was reused for valet stations and membership sales. An `is_reservable` flag turned reservations on per market without a client change. It shipped MVPs faster and looked more generic than they wanted.

Early 2022, integrating Spin scooters, forced the next step. Spin’s locks and ride states did not match Lyft’s hardware models, and those models had UI fields mixed into platform APIs that the web also consumed. They defined server-driven UI as moving most business and display logic to the server, so the client does what it is told and does not need to know what a bike ride is for the screen in front of the user. The test they give: you are in SDUI when the API returns view models, not business models. Rideshare had already been doing a version of this.

They put a backend-for-frontend, `lbsbff`, in front of the golden-path panels (supply, unlock, ride status, end ride) and left the rest alone so a bad idea could be undone. The BFF fetches upstream data and returns view representations. Three primitives were enough. Declarative components are protobuf descriptions of native views, closer to HTML, with no domain knowledge on the client. They reused a help-flow framework from another Lyft team. Semantic components are an escape hatch: the server names a known client layout and sends the data to fill it, because animations and fully local interaction are hard to describe on the wire. Many semantic components are still configurable (images, text, colours, actions) while the layout stays on the device. Actions are separate commands — a deep link or a registered client flow such as unlock — configured by the server and executed by the client. Actions chain (show an alert, then a button action). Decoupling action from layout let one component serve a new entry point with a BFF change and no app release.

They did not have one company-wide SDUI framework. Teams experimented, then shared capabilities (which client versions understand which components), rich text, and the panel. The closer they got, the more a shared block library looked worth building.

## Key facts

- Authors: Alex Hartwell and Tim Miko. 9 March 2023. Lyft engineering on Medium (`eng.lyft.com`).
- Stated motives: complexity, release velocity, flexible staffing.
- Intermediate pattern: server-supplemented UI (capabilities, localised strings, generic panels).
- SDUI definition they use: most business and display logic moves to the server; clients render view models.
- Service: `lbsbff`, scoped to bikes and scooters panels, not a big-bang rewrite.
- Wire format: protobuf. Two component kinds plus actions.
- Sharing started with versioned capabilities and rich text, not a single framework.

## How it works

The phone hits `lbsbff` instead of the bikes platform APIs. The BFF merges upstream data into a tree of components. A declarative component is drawn from primitives. A semantic component is a named native view plus hydration data. A tap, load, or toggle fires an action the client already knows how to run, with server-supplied arguments (for example which bike, and whether to open the QR scanner). New features prefer new compositions of existing components and actions. Missing primitives get added once and then reused. Client version still matters: capabilities say what that build can render.

## Implications for uiaas.uk / ui121

Lyft’s own line is the product argument. Variation that used to be client enums becomes a server payload, and the client becomes a renderer. `uiaas.uk` is that renderer as a service: one contract, many surfaces, changes without a store release. Their split is the practical limit to copy. Generic blocks cover the feed and the panel. A few semantic components stay native where animation and local control matter. Actions are the task, separate from the layout, which is the same cut ui121 makes between a JSON surface and what the human does on it.
