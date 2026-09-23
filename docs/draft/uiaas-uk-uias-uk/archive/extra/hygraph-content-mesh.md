# The content mesh

- Source: https://www.hygraph.com/blog/content-mesh
- Fetched: 2026-09-23
- Status: ok

## Summary

Emily, originally 19 January 2020 and updated 12 June 2026, explains a term from Gatsby co-founder Sam Bhagwat. A content mesh is best-of-breed services stitched into one layer, instead of stretching a monolith with plugins. WordPress was a blog that people bent into shops; Magento was a shop that people bent into a blog. The cost is bloat, specialists, and lock-in.

A headless CMS sits in the middle because it has no presentation and no required neighbour. Search can be Algolia, payments Stripe, analytics Segment, experiments VWO, the site Gatsby, the host Netlify. The post’s demo is an open-source swag store using Hygraph, Gatsby, Netlify, Stripe, Printful, and Postmark. A mesh is not the same thing as a DXP: the post treats the difference as perspective, mesh as the integration practice and DXP as the experience suite.

## Key facts

- Monolith pains listed: hard horizontal scale, full-app deploys, slower performance as modules accumulate, one fault taking down the system, rare stack upgrades.
- Microservices: small apps, own logic, connected by API, sometimes with their own UI, composed per channel.
- Deploy examples named: Netlify, Zeit Now, CircleCI.

## How it works

Authors edit in the CMS. Developers pick a frontend. Webhooks and APIs add commerce, forms, or personalisation. Any one of those can be replaced. The mesh is the agreement to integrate, not a product you buy whole.

## Implications for uiaas.uk / ui121

Stripe in this mesh is payments, not the whole UI. ui121 would be another node: the interface service the frontend calls, beside content and payments. The swag-store stack is the picture to redraw with a renderer in place of a hand-built Gatsby theme. The monolith warning applies in reverse too: do not become the suite that does content, pay, and UI badly.
