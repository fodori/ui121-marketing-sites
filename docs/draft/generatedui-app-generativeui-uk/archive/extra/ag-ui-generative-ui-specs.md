# AG-UI and generative UI specifications

- Source: https://docs.ag-ui.com/concepts/generative-ui-specs
- Fetched: 2026-09-23
- Status: ok
- Expanded from: source 06 (AG-UI docs)

## Summary

This short concept page is the protocol project’s official map of UI specs. It says A2UI, MCP-UI, and Open-JSON-UI are generative UI specifications: agents answer with dynamic components, not only text. The table: A2UI is Google’s, declarative, JSONL, streaming, meant to render on any platform. Open-JSON-UI is OpenAI’s, described as an open standardisation of an internal declarative schema. MCP-UI is attributed here to Microsoft and Shopify, an open iframe-based standard extending MCP. The page then insists AG-UI is not one of those specs. It is the user-interaction protocol, the bidirectional runtime between agent and application. AG-UI can carry all three, and it can carry a custom spec a team defines itself.

The MCP-UI attribution (Microsoft + Shopify) is the docs’ wording. The MCP-UI repository itself credits Ido Salomon and Liad Yosef and says the work influenced MCP Apps alongside OpenAI’s Apps SDK. Shopify appears in the Remote DOM design. Treat the table as AG-UI’s shorthand, not as a legal provenance.

## Key facts

- Three specs named: A2UI (Google), Open-JSON-UI (OpenAI), MCP-UI (table says Microsoft + Shopify).
- AG-UI carries them; it does not define their component grammars.
- Custom generative UI standards are allowed on the same protocol.
- Formats implied: A2UI as JSONL, MCP-UI as iframe.

## How it works

The agent emits whatever UI payload the spec requires. AG-UI transports that payload as events alongside text, tools, and state. The client has a renderer per spec. Adding a fourth grammar does not require a new session protocol if it can be expressed as events the client understands.

## Implications for generatedui / ui121

This page is the license to be polyglot. ui121 can render A2UI now, watch Open-JSON-UI, and treat MCP-UI iframes as embeds, all on one AG-UI session. The marketing claim is not “we invented a protocol.” It is “we are the renderer and the block catalog those protocols are missing for a brand.” The Open-JSON-UI row is real in this table even though a standalone site was not found; see extra/open-json-ui.md.
