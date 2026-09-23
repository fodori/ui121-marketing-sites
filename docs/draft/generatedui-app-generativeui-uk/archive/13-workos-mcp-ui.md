# MCP-UI technical deep dive — WorkOS

- Source: https://workos.com/blog/mcp-ui-a-technical-deep-dive-into-interactive-agent-interfaces
- Fetched: 2026-09-23
- Status: ok

## Summary

Zack Proser’s WorkOS article, 8 September 2025, treats MCP-UI as a shift from text-only MCP toward interfaces inside the conversation. The motivating scene is MCP Night 2.0: commerce, charts, and forms are bad fits for a transcript, because the user otherwise copies the agent’s answer into some other tool. The protocol move is deliberately small. MCP-UI extends embedded resources with a UIResource: a `ui://` URI, a MIME type, and either inline text or a base64 blob. It is not a replacement for MCP.

Three rendering strategies are spelled out. Inline HTML uses a sandboxed iframe `srcDoc` and suits self-contained cards. External URL points the iframe at an existing web app, which is how a dashboard widget gets embedded without a rewrite. Remote DOM, via Shopify’s library, runs script in a sandbox but paints with the host’s components (`ui-button` and similar), so the widget can match the design system. The article says Remote DOM was tied, at the time, to React and Web Components, which limits hosts on other stacks.

SDKs: `@mcp-ui/server` in TypeScript and `mcp_ui_server` in Ruby validate URI scheme, MIME mapping, and encoding. The client offers React and a web component. `UIResourceRenderer` picks a strategy and exposes `onUIAction`. Actions are a closed set of event types — tool, intent, prompt, notify, link — so the component does not mutate host state itself. The agent stays in charge of meaning; the widget handles presentation.

Shopify is the commerce proof: variant selection, inventory, and price rules that text cannot express, emitted as intent events such as add-to-cart with product, variant, and quantity. Block’s Goose is the host proof: a remote MCP extension over streaming HTTP, with sandbox and event routing hidden from the integrator. Incremental adoption is the implementation advice: an existing tool can return both a text summary and a UI resource, so the server does not need a rewrite. `npx ui-inspector` is the local test tool.

Costs the article is honest about: iframes, events, and auto-resize add client weight; Remote DOM avoids some iframe cost but needs a component library; sandbox errors are harder to debug; message origin checks matter. The roadmap paragraph imagines a declarative content type (a form definition rather than HTML) and, later, native mobile, voice, or AR, plus generative adaptation. Those are aspirations in the article, not shipped features.

## Key facts

- Published 8 September 2025. Author: Zack Proser, WorkOS.
- Three content types: raw HTML, external URL, Remote DOM.
- Action types: tool, intent, prompt, notify, link.
- Adoption pattern: add a UI resource beside existing text content, per tool.
- Test command named: `npx ui-inspector`.
- Commerce example: Shopify product selection via intent events. Host example: Goose.

## How it works

A tool result can carry a resource the client recognises as UI. The renderer sandboxes it, resizes the frame, and forwards structured events to the agent loop. Remote DOM is the bridge toward host-native widgets: script describes elements, the host’s catalog draws them. Declarative definitions, sketched as a future form schema, would let an agent request fields without shipping HTML at all.

Section outline: why text fails; UIResource shape; three renderers; server SDK; client renderer; event model; Shopify; Goose; security; multi-language SDKs; inspector; incremental adoption; performance and framework limits; future declarative and generative ideas.

## Implications for generatedui / ui121

The incremental-adoption paragraph is the sales motion: keep the MCP server, add a UI for the tools where a table or form beats a paragraph. ui121 should implement that as catalog blocks bound to tool results, which is closer to the article’s future “declarative” sketch than to raw HTML. Remote DOM is the competitor idea to watch — host components driven by a script — but a JSON catalog is easier to validate than a script that creates elements. Quote the commerce case in marketing only as a pattern (variant picker as structured intent), not as a claim that ui121 integrates Shopify.
