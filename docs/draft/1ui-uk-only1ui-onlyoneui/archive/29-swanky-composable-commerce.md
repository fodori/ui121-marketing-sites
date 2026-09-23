# Swanky — The CTO’s guide to composable commerce and headless

- **Source:** https://swankyagency.com/app/guides/technology/cto-guide-to-composable-commerce
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Ian Jamieson (Head of Technology at Swanky, a Shopify Plus agency) wrote a long CTO guide to composable commerce and headless technology, centred on Shopify. A first automated fetch hit a Vercel checkpoint and returned no article. A subsequent retrieval returned the full guide. It is one document, not a magazine of separate posts, so it is kept as a single note.

Composable means modular business functions — content, email, payments, PIM, OMS, ERP — that can be assembled and reassembled. Gartner’s packaged business capabilities are the vocabulary. The contrast is a monolith where storefront, checkout, CMS, and orders share one vendor. Jamieson softens that contrast for Shopify: an app marketplace and, from 2023, Commerce Components by Shopify (CCS) let large retailers take pieces of the platform, including checkout and Shop Pay, and pay for what they use. He warns that “Commerce Components” was widely misread as a toolkit for every retailer. Mid-market headless, in his account, is Hydrogen and Oxygen plus third-party APIs.

Headless means the backend (data and logic) is decoupled from the UI and exposed through GraphQL or REST so web, mobile, and other clients can share it. Composable and headless are different emphases — modularity versus separation of concerns — and a stack can be both. JAMstack is the web method: JavaScript for interaction, APIs for data, markup prebuilt onto a CDN, with SSR, SSG, and related mixes now blurring the original definition. MACH (microservices, API-first, cloud-native SaaS, headless) is noted as an alliance standard, not the whole market.

The decision section says headless fits two groups: experiential brands that need full control of an immersive journey, and large enterprises that need performance, modularity, and heavy internationalisation. After Shopify Online Store 2.0 (2021) and Markets (2022), many earlier international headless builds moved back to the monolith to cut cost, because those jobs became native. Hydrogen still demands specialist TypeScript and React teams, agency or in-house, and most storefront apps are not drop-in; backend apps keep working. The second half of the guide covers performance (pre-render, assets, cache, edge), brand experience (animation, 3D, AR), and headless CMS options (Sanity, Contentful, Supabase, Directus, MDX) plus security and the trade that custom frontends must rebuild what a theme editor gave merchants for free.

Section outline: definitions (composable, headless, JAMstack, MACH); themes versus Hydrogen; when to go headless; complexity and app-store limits; performance; creative frontends; CMS choices; security and full-stack control.

## Key facts

- Author: Ian Jamieson, Swanky. Subject: Shopify composable and headless architecture.
- Headless: backend decoupled from UI; APIs (GraphQL or REST) serve many clients.
- Composable: best-of-breed business modules (CMS, PIM, OMS, ERP, payments), Gartner PBC language.
- Shopify native path: Online Store 2.0 Liquid themes. Headless path: Hydrogen, Remix, Next.js, or Gatsby, with Oxygen as Shopify’s hosting option in the guide.
- CCS (2023): enterprise offer to consume parts of the monolith; not the default composable stack for every merchant.
- Headless sweet spots named: immersive brands, and large enterprises with scale and international complexity.
- Cost of headless: specialist React/TypeScript teams; fewer ready-made storefront apps; some early adopters returning to Store 2.0.

## How it works

The store’s logic and catalogue stay in Shopify (or in a set of APIs). A separate frontend, built in a React framework, requests that data and draws the page. Merchants who stay on themes edit sections in Shopify’s editor. Merchants who go headless gain control of rendering, caching, and brand experience, and take on build and maintenance. Content can move to a headless CMS that federates into the same frontend. The UI is a client of services, not a template bound inside the commerce engine.

## Implications for the one-UI domains / ui121

This is the architectural precedent for “one rendering contract, many backends,” learned in commerce rather than in employee software. only1ui.com can borrow the separation: systems of record stay headless; one frontend renders the experience. ui121 applies that contract to work tasks. A page, a form, and a chart are the storefront. HR, tickets, and data services are the catalogue APIs. Swanky’s caution matters in the copy: decoupling is expensive when every pixel is custom, which is why a governed JSON catalogue beats a bespoke React app per workflow. The drift back from headless to Store 2.0 is also a warning against unification theatre — teams will re-consolidate onto whatever surface is cheaper to run. A universal canvas has to be that cheaper surface, not a second frontend project.
