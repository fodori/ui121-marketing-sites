# DoorDash Developer (Drive)

- Source: https://developer.doordash.com
- Fetched: 2026-09-23
- Status: partial

## Summary

The live site is DoorDash’s developer portal for Drive, a white-label local-delivery API. It is not an engineering essay about server-driven UI in the consumer app. The promise is operational: you keep the storefront and the customer relationship, and you call an API when you need a Dasher.

That is still a useful “as a service” analogy. Delivery, like identity or payments, is bought per use and embedded in someone else’s product. The page points at docs, a blog, SDKs, and a Discord community, but those collections were not expanded here; the extra-note cap was used on the Hygraph blog, which the brief named as the collection to follow.

## Key facts

- Network claim on the page: more than 1 million monthly active Dashers.
- Commercial model: pay per delivery requested. The page says there is no upfront cost, no recurring fee, and no surge pricing.
- Sandbox: start testing without payment details. Path described as sandbox credentials, a delivery simulator, then a production-access request.
- Partners quoted on integration speed: about a week to go live; one low-code integration described as a single day. Names on the page include Salman Habib, Nick Lutrick, Nicholas Skrepetos, Michael Behfar (Laundr), Roy Ganor, Jeff Glenn, and others.
- Use cases listed: auto parts, documents, groceries, subscriptions, laundry, retail returns, flowers, repairs, cloud kitchens.

## How it works

A business accepts the order in its own site, app, or point of sale. It calls Drive to request an immediate or scheduled delivery, receives status updates and a live tracking URL, and can optionally notify the customer by SMS. The portal offers API docs, SDKs, tutorials (Node.js and Postman are named), and a simulator before production credentials.

Section outline of the page: the offer; pay-per-use; own the experience; industry examples; partner quotes; three-step build; links to docs and blog.

## Implications for uiaas.uk / ui121

DoorDash’s consumer SDUI is not documented on this URL. What is documented is delivery-as-a-service: a hard operational surface, embedded, white-label, priced per use. That is the commercial shape ui121 wants for interfaces. The missing piece on this page is the UI itself; Drive assumes the merchant already has a frontend. `uiaas.uk` is the layer that would supply that frontend the same way Drive supplies the driver.

The consumer-app essay is a different page, paraphrased in [extra/doordash-facets-server-driven-ui.md](extra/doordash-facets-server-driven-ui.md): Facets, a protobuf view contract rendered by a client factory, shipped by backend deploy.
