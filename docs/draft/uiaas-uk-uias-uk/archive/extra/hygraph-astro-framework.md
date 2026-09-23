# What Astro is

- Source: https://www.hygraph.com/blog/astro-javascript
- Fetched: 2026-09-23
- Status: ok

## Summary

An introduction to Astro, the open-source framework Fred Schott started in 2021 for content-heavy sites. The performance idea is islands: most of the page is static HTML, and only interactive pieces ship JavaScript. Astro does not force React, Vue, or Svelte. Those libraries can sit on the same page. The post calls it the framework of all frameworks and says it ranks second in a community survey it does not name in the extract.

Server rendering exists for personalised or live data. The default is static files on a CDN.

## Key facts

- Zero JavaScript by default; script only where an island needs it. Partial hydration is the mechanism.
- SEO argument: crawlers see HTML.
- A component starter in the Astro ecosystem is mentioned as a shadcn-style, copy-and-own set that avoids adopting a full UI framework.
- Compared with Nuxt, the post’s contrast is less lock-in and less JavaScript on the wire.

## How it works

Authors write pages that build to HTML. Interactive widgets are islands with their own client script. Content can be local or loaded from a CMS. Personalised pages opt into server rendering. The framework does not own the design system.

## Implications for uiaas.uk / ui121

Islands are a web performance pattern, not a managed UI. They still compile into the site. The useful overlap is selective interactivity: a task client can render a calm layout and hydrate only the step that needs it. Astro will not push a new mobile screen without a rebuild. That remains the service gap.
