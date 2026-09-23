# DoorDash — generic server-driven UI components (Facets)

- Source: https://careersatdoordash.com/blog/improving-development-velocity-with-generic-server-driven-ui-components/
- Fetched: 2026-09-23
- Status: ok
- Recovered because: https://developer.doordash.com (source 08) is the Drive delivery API, not this essay.

## Summary

Ashwin Kachhara, 24 August 2021, on the Discovery Platform team, explains Facets, DoorDash’s second attempt at server-driven UI for the consumer apps. An earlier homepage system, Display Modules, had sped experiments but still coupled UI components to backend data models, used a mixed array that broke deserialization, and could not rank every kind of content the same way. They also wanted to stop shipping the same business rules separately on iOS and Android, and to stop waiting on store review for layout changes. Mobile releases cannot be rolled back instantly, and old app versions linger.

The design rule is to send view models, not restaurant objects. A Facet maps one-to-one to a view. In protobuf it carries an id, a component id from a library, text slots (title, subtitle, accessory, description, plus a custom map), image slots (main, icon, background, accessory), a click action (name plus data), nested child Facets, a logging bag, layout, and style. Style later lined up with their design-language types so colour and size did not hide in an untyped struct. The untyped custom struct stayed as an escape hatch they tried not to use. Logging attributes travel with the view so the client does not reconstruct store id or delivery fee just to emit analytics. The id is unique in the response so clients can diff the tree and so Android can cache rows.

They tried it first on a non-critical surface: collection tiles on the homepage and the landing pages those tiles open. The homepage stayed on Display Modules, with one new module that wrapped a Facet. The new landing page was Facets end to end. They defined only the components that launch needed, not a complete library up front. They had looked at John Sundell’s talk, Spotify’s deprecated HubFramework, and Instacart. They had not read Airbnb’s write-up yet and later found it similar.

The homepage rewrite for new verticals (convenience, grocery, not only restaurants) forced sections, pagination, and partial reload. A section has an id, header Facets, body Facets, and layout. A load-content action carries an offset. A FacetFactory plus a layout engine turns the payload into native views. New components did not need a new API shape. Engineers mapped the view onto the existing text, image, and event slots. Parallel iOS and Android work got faster because the payload was already a view model.

The hard part is old clients. A build that does not know a new Facet id drops it. A carousel whose children are all unknown becomes an empty box. A known view with an unknown navigation action renders and then fails on tap. Their fix is semantic versioning of what the client can render (component set and action set), sent on the request, plus client rules: omit a container if no child is recognised, and omit a Facet whose navigation action is unknown. They treat “this phone has an older native component” as ordinary version lag, and “this phone has never heard of this Facet id” as the SDUI-specific bug.

The close of the piece is the business claim. The upfront cost is a layout engine and a component library. After that, pages are arranged by backend deploys. Client code is reused, mobile release trains matter less, and they can keep changing layout while new verticals come online.

## Key facts

- Author: Ashwin Kachhara. 24 August 2021. DoorDash careers/engineering blog.
- Unit: a Facet, one view, protobuf, nested children.
- Prior art they name: Display Modules, Sundell, Spotify HubFramework, Instacart. Airbnb noticed later.
- First production test: collection carousels and landing pages, not the whole homepage.
- Later: homepage feed split into sections for multiple verticals, with paging and section reload.
- Versioning: client declares supported Facets and actions. Unknown containers and unknown navigations are omitted.

## How it works

The backend builds a tree of Facets whose fields are view slots, not menu or store records. The client looks up `component.id` in a factory, binds text and images, and runs the named action on click. Nested Facets become children. Sections group a header and a body so one area can reload. Pagination is an action that asks for the next offset. Analytics keys ride along so the view stays ignorant of the business object. If the installed app cannot draw a node, it skips that node instead of showing a broken control.

## Implications for uiaas.uk / ui121

Facets is the in-house version of UI as a service: one component contract, three clients, layout shipped from the server. DoorDash still had to employ the iOS and Android teams that own the factory. A hosted renderer would sell that factory instead of asking every customer to build it. The versioning rule is the part to keep. Unknown blocks are skipped, not crashed, which is what a JSON UI runtime needs when a model is newer than a client. The Drive API on source 08 is a different product. This essay is the UI one.
