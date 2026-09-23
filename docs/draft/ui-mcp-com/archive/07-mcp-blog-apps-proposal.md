# MCP Apps proposal (SEP-1865)

- **Source:** https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

On 21 November 2025 the MCP blog introduced SEP-1865, a proposal for an official extension that lets servers deliver interactive user interfaces. Authors span MCP maintainers, Anthropic, OpenAI, and the MCP-UI creators Ido Salomon and Liad Yosef. The post treats UI as one of the most requested gaps in the protocol and as a way to stop the ecosystem fragmenting into private conventions.

The problem statement is concrete. A charting server that returns JSON forces every host to invent its own renderer. Multi-field settings turn into a clumsy chain of text prompts. MCP-UI had already proved that rich interfaces can be first-class MCP resources, with SDKs adopted at Postman, Shopify, Hugging Face, Goose, and ElevenLabs. OpenAI’s Apps SDK had shown the same demand inside ChatGPT. The proposal is the three groups agreeing on one extension so servers behave the same in every client.

The shape they propose is deliberately small, and they call the result the start of an agentic app runtime. UI templates are resources on the `ui://` scheme, referenced from tool metadata (`ui/resourceUri` in the proposal’s example), with a MIME type of `text/html+mcp` in the sample. Hosts can prefetch and review the template before the tool runs, and can cache the static presentation separately from the tool’s data. Communication reuses MCP JSON-RPC over `postMessage`, so the normal SDK still applies and messages stay auditable. The first content type is HTML in a sandboxed iframe. External URLs, remote DOM, and native widgets are explicitly postponed.

Security is layered: iframe sandbox, pre-declared templates, loggable JSON-RPC, and optional user consent before a UI-started tool call. The extension is optional. Servers should still return useful text so hosts without UI keep working.

The follow-up post that marks the extension as live is source 08. This note is the proposal; that note is the ship.

## Key facts

- Date: 21 November 2025. Spec proposal: SEP-1865.
- Co-authors include OpenAI and Anthropic maintainers plus MCP-UI’s Ido Salomon and Liad Yosef.
- MCP-UI adoption named here: Postman, Shopify, Hugging Face, Goose, ElevenLabs.
- First MIME story: HTML in a sandboxed iframe; other renderers deferred.
- Backward compatible: text fallback required.

## How it works

A server registers a UI resource and points a tool at it. The host fetches that HTML, renders it in a sandbox, and bridges iframe messages to MCP JSON-RPC. The UI can call tools; the host can require a person to approve. Hosts that do not implement the extension ignore the UI metadata and use the text result.

## Implications for ui-mcp.com / ui121

This is the moment “UI over MCP” becomes a standards project rather than a single vendor SDK. ui-mcp.com should tell that story: one interface, declared once, rendered in any host that adopts the extension. ui121 fits as the studio that designs those `ui://` templates — charts, forms, checkout — while the protocol carries them. The deferred items (remote DOM, declarative UI) are the roadmap a design system can grow into.

> “The MCP Apps Extension is starting to look like an agentic app runtime.” — MCP blog, 21 November 2025
