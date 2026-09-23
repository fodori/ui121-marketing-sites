# SEP-1865 — MCP Apps

- Source: https://modelcontextprotocol.io/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

SEP-1865 is a finalised Specification Enhancement Proposal on the extensions track, kept as a historical record of the design as accepted. Later spec changes are not mirrored here; the current specification wins. It was created 21 November 2025. Authors include Ido Salomon, Liad Yosef, Olivier Chafik, Jerome Swannack, Jonathan Hefner, Anton Pidkuiko, Nick Cooper, Bryan Ashley, and Alexi Christakis. The sponsor field on the page still reads as none. The pull request is 1865.

The proposal adds a way for servers to deliver interactive UI to hosts: a `ui://` scheme, tool metadata that points at those resources, and bidirectional JSON-RPC between the UI and the host. The first profile is HTML (`text/html;profile=mcp-app`), with room to extend later. Motivation: MCP had no standard for visual, interactive results, so hosts were at risk of incompatible one-offs. Prior art named: MCP-UI (`mcpui.dev`) as a community playground that proved HTML, external URLs, and remote DOM, with adopters including Postman, Hugging Face, Shopify, Goose, and ElevenLabs; and OpenAI’s Apps SDK (November 2025), which puts interactive apps in ChatGPT using MCP as the backbone. Both informed the design. Rationale topics on the page include predeclared resources instead of inline embedding, reusing MCP’s JSON-RPC instead of a new protocol, and an HTML-only first version. Security and backward compatibility are sections of the proposal; this note does not copy their normative text.

## Key facts

- Status: Final. Track: extensions. Created: 2025-11-21. PR: 1865.
- Mechanism: `ui://` resources, tool metadata, JSON-RPC between UI and host.
- Initial content type: HTML with an MCP app profile.
- Lineage: MCP-UI community project and OpenAI Apps SDK (November 2025).
- Named MCP-UI adopters: Postman, Hugging Face, Shopify, Goose, ElevenLabs.
- The SEP is historical; the living spec overrides it.

## How it works

A server publishes UI as a resource it declares up front, not as a blob stuffed into a tool result. The host fetches that resource and talks to it with the same style of JSON-RPC the rest of MCP uses, so existing client machinery can carry UI traffic. HTML is the minimum viable view. Security discussion in the proposal exists because a server-supplied UI is code from a third party running next to a user’s assistant. Backward compatibility is required so hosts that do not implement the extension keep working.

## Implications for ui1to1.com / ui121

This SEP is the paper trail for “agents need interactive UI,” dated late 2025 and already marked final. ui1to1.com can cite that demand — including OpenAI’s Apps SDK and Shopify-class adopters — and then place the one-to-one canvas beside it. Their UI is an extension inside the host. ui121’s UI is the human’s single interface, which can still be what an MCP tool asks for when the decision should not live only in ChatGPT. JSONUI’s pre-built blocks are the contrasting safety story to server-supplied HTML. Human-in-the-loop is the use case the proposal exists to unblock: review and action, not another paragraph.
