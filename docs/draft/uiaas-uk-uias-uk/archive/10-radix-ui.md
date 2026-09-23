# Radix UI

- Source: https://www.radix-ui.com
- Fetched: 2026-09-23
- Status: ok

## Summary

The homepage presents Radix as an open-source component library aimed at speed, maintenance, and accessibility. The instruction on the page is to import the library and a stylesheet and start building, with a themes package shown in the sample import. The rest of the page is a gallery of finished interface fragments (team lists, notifications, pricing, invoices, activity), not a technical manual.

Delivery is the same shape as other open component kits: the components live in the application build. There is no vendor-hosted screen and no server that rearranges the product after release.

## Key facts

- Positioning: open source, fast to adopt, easy to maintain, accessible, little configuration.
- Sample on the page imports `@radix-ui/themes` styles, so the marketed surface includes a styled theme layer as well as primitives.
- Homepage does not state a license name, a price, or a hosted embed.

## How it works

A team adds the package, pulls in the theme styles if it wants the ready-made look, and composes product screens from the components. Accessibility and interaction behaviour are in the library. Brand, page structure, and deployment stay with the app.

## Implications for uiaas.uk / ui121

Radix is infrastructure for a design system the customer still has to operate. It is a strong ingredient and a weak substitute for a managed interface. `uiaas.uk` should talk about who updates the live UI, not about who published the primitive.
