# Shopify headless commerce

- Source: https://www.shopify.com/plus/headless
- Fetched: 2026-09-23
- Status: partial

## Summary

The URL in the source list returns 404. The live Plus page is `https://www.shopify.com/plus/solutions/headless-commerce`, fetched the same day. These notes are from that page.

Shopify’s headless pitch is creative control without leaving the commerce engine. The storefront (web, app, mirror, wearable) is decoupled from products, cart, checkout, and orders. Hydrogen is the toolkit for building that storefront, described as agent-first and able to work with any framework. Oxygen is the global host, included so teams deploy in one click. Teams may also ship a Next.js storefront on Vercel, bring their own stack, or hire a Plus partner.

The admin stays the system of record. ERP, PIM, CRM, and CMS plug in beside it.

## Key facts

- Promise: any digital screen becomes a sales channel on Plus infrastructure.
- Hydrogen: a demo store and reference code, performance-focused tooling, dedicated technical support.
- Oxygen: deploy and scale storefronts at no extra hosting charge, as stated on the page.
- Alternate path: production Next.js on Vercel, still using Shopify commerce and checkout.
- Quote on the page: Rares Crisan, director of engineering at Kotn, on choosing headless so customisations stayed in the team’s hands, via the Storefront API.

## How it works

Shopify keeps catalog, price, checkout, and orders. A custom frontend talks to that engine through APIs. Hydrogen is the opinionated starting point; Oxygen is the default place to run it. The merchant does not theme a generic template if they do not want to. They also do not operate the commerce backend. Content and product data can come from other systems of record.

## Implications for uiaas.uk / ui121

This is headless commerce’s version of UI delivery: the backend is the service, the interface is free to be custom, and the vendor still offers a toolkit and a host so teams are not starting from zero. ui121 is the inverse emphasis. Shopify assumes you will build a storefront. ui121 assumes the interface itself is what you came to buy, with the task and the data behind it. The Hydrogen-plus-Oxygen bundle is the objection to answer: “we already have a toolkit.” The reply is that a toolkit is still a build.
