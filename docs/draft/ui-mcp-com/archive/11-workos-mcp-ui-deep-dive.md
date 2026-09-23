# MCP-UI technical deep dive (WorkOS)

- **Source:** https://workos.com/blog/mcp-ui-a-technical-deep-dive-into-interactive-agent-interfaces
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Zack Proser’s 8 September 2025 WorkOS article treats MCP-UI as more than prettier chat. MCP already connects agents to tools, but text forces people to translate answers into real UI, especially in commerce, charts, and forms. The phrase he uses for that failure is the text wall. The piece is from the experimental period, before MCP Apps shipped, so some field names are the earlier design.

A `UIResource` extends MCP’s embedded resources. The URI uses the `ui://` scheme. MIME types in the article are inline HTML, an external URL (`text/uri-list`), and Shopify’s remote DOM (`application/vnd.mcp-ui.remote-dom`). Content can be inline text or a base64 blob.

Three renderers: sandboxed iframe `srcdoc` for self-contained HTML; an iframe `src` for an existing web app; and remote DOM, where a script runs in a sandbox but paints with the host’s components (the example uses a `ui-button` and React). The server SDK `@mcp-ui/server` (and a Ruby twin) validates the URI and MIME type. The client package offers `UIResourceRenderer` for React and as a web component, with auto-resize.

Actions are structured events, not direct state edits: `tool`, `intent`, `prompt`, `notify`, and `link`. The agent stays in charge. Shopify is the commerce proof: variant pickers, inventory, pricing, and add-to-cart intents that text cannot express cleanly. Block’s Goose is the host proof, shown as a remote streaming-HTTP extension. Dev tools include `npx ui-inspector`.

The article is honest about cost: iframe lifecycle and auto-resize can hurt performance; remote DOM avoids the iframe but ties the host to React or web components; debugging inside a sandbox is harder. The roadmap section imagines declarative UI (a form described as data) and later native, voice, or spatial surfaces, plus generative UI that adapts to the person and to accessibility needs.

## Key facts

- Date: 8 September 2025. Author: Zack Proser, WorkOS.
- Three renderers: inline HTML, external URL, Shopify remote DOM.
- Action types: tool, intent, prompt, notify, link.
- SDKs named: TypeScript and Ruby.
- Inspector: `npx ui-inspector` against a local MCP endpoint.
- Commerce example: Shopify variant, inventory, and add-to-cart intents.

## How it works

The server returns a UI resource inside the tool result. The host picks a renderer from the MIME type, isolates the code, and listens for structured messages. A button does not add to cart by itself; it emits an intent the agent can confirm and execute. That split is what lets a host allow rich UI without giving the iframe the host page.

## Implications for ui-mcp.com / ui121

Use this piece for the “text wall” problem and for the three jobs ui121 already does well: commerce choice, data visualization, and multi-field forms. Remote DOM is the design-system story — the interface adopts the host’s look — while MCP Apps’ later HTML iframe is the portable story. ui-mcp.com can say both: one MCP server, host-native where the client supports it, sandboxed HTML everywhere else. Declarative UI on this roadmap is the brief for generated ui121 screens.

> “MCP-UI represents … a fundamental shift toward interactive, context-aware AI.” — Zack Proser, WorkOS, 8 September 2025
