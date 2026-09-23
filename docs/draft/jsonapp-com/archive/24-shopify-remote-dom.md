# Shopify remote-dom and Polaris surfaces

- Title: Shopify remote-dom
- Source URL: https://github.com/Shopify/remote-dom/
- Also fetched: https://shopify.dev/docs/api/polaris
- Fetched: 2026-09-23
- Status: ok

## Summary

Shopify’s remote-dom library lets code in a sandbox build a DOM tree and have that tree rendered in a different JavaScript environment. The point is to run untrusted code off the main thread while still letting it paint a controlled set of elements on the real page. The usual setup mirrors a hidden iframe into the top-level document. A small DOM polyfill also lets a Web Worker run libraries that expect a document, including Preact and Svelte. The GitHub page showed about 1,336 stars at fetch time. The README’s getting-started path is a Vite app with two environments: a host page and a remote document.

On the host you install `@remote-dom/core`, create a `DOMRemoteReceiver`, and connect it to a root element. An `elements` option restricts which tag names (and optionally which members) the remote side may create. The README warns that omitting it leaves names unrestricted. Mutations travel by `postMessage` from the iframe to `receiver.connection.mutate`. Inside the iframe, a `RemoteMutationObserver` watches a root and posts each mutation. Examples in the repo: text sync between page and iframe; a custom button element; a kitchen sink with properties, events, and methods, implemented in plain JS, htm, Preact, React, Svelte, and Vue, including a worker sandbox.

The related Polaris docs page is the host side of Shopify’s own app UI. Polaris is the unified UI framework, built on web components, for every app surface. App Home can be an iframe (App Bridge plus Polaris) or a Preact UI extension. Other surfaces embed the app at defined points: admin actions and blocks on products, orders, and customers; checkout including shipping, payment, and Shop Pay; customer accounts (order index, status, profile); and Point of Sale (smart grid, cart, post-purchase). Each surface exposes its own APIs and its own subset of Polaris components. The page points at a broader "build apps for Shopify" overview rather than restating it.

## Key facts

- Library: `@remote-dom/core`. Host type: `DOMRemoteReceiver`. Remote type: `RemoteMutationObserver`.
- Sandboxes: hidden iframe or Web Worker. Frameworks demonstrated: Preact, React, Svelte, Vue, htm, vanilla.
- Policy: `elements` allow-list. Empty list in the sample; omitting the option is unrestricted.
- Transport in the walkthrough: `postMessage` of mutation batches.
- Polaris: web components shared across admin, checkout, customer accounts, and POS, with a per-surface subset.
- App Home: iframe or Preact extension. Extensions render inside Shopify’s surface, not as a free page.

## How it works

Untrusted UI code mutates a fake document. The host receives a stream of mutations and applies only the elements it has agreed to implement. Events and methods can flow back so a button in the sandbox is a real control on the page. The remote code never receives the real DOM. Polaris is the catalog those host elements come from when the host is Shopify: the app describes UI in the extension model, and Shopify renders Polaris components in checkout or admin.

## Implications for jsonapp.com / ui121

remote-dom is the security architecture for "someone else’s UI in our product." JSON UI needs the same split even when the payload is data rather than JavaScript: a receiver, an allow-list of components, and no path from the document to arbitrary DOM or script. ui121 already renders a catalog; the marketing line is that AI-written or tenant-written JSON is remote UI, and the renderer is the host.

Polaris shows a platform company standardizing every embeddable surface on one component set with per-surface subsets. A jsonapp.com runtime can say the same: one JSON vocabulary, different allowed subsets for a public task, an admin screen, and an embedded widget.

> "Remote DOM lets you take a tree of DOM elements created in a sandboxed JavaScript environment, and render them to the DOM in a different JavaScript environment."
