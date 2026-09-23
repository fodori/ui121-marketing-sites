# MCP Apps goes live

- **Source:** https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

On 26 January 2026 MCP Apps shipped as the first official MCP extension. Tools can return interactive UI — dashboards, forms, visualizations, multi-step workflows — that render inside the conversation. The post says the November proposal was refined with OpenAI and MCP-UI, the SDK matured, and Claude, Goose, Visual Studio Code, and ChatGPT had support (ChatGPT “starting this week”; VS Code in Insiders).

The product argument is a context gap. A database tool can return hundreds of rows and the model can summarize them, but sorting, filtering, and opening a record still means another prompt. MCP Apps keep the model in the loop while the UI handles live updates, media, persistent state, and direct manipulation.

The mechanism is two primitives. A tool sets `_meta.ui.resourceUri` to a `ui://` resource. That resource is bundled HTML and JavaScript. The host renders it in a sandboxed iframe and talks JSON-RPC over `postMessage`. The `@modelcontextprotocol/ext-apps` package exposes an `App` class: receive tool results, call another server tool, and push a short note back into the model’s context. Apps can also log, open links, and send a follow-up message. The security list matches the proposal: sandbox, pre-declared templates, auditable messages, user consent, plus a reminder to vet servers before connecting.

MCP-UI stays as the community SDK and the recommended host framework; migration to the official extension is described as straightforward. Example servers in the repo include 3D (threejs), maps, PDFs, a system monitor, and sheet music.

Quotes in the post, paraphrased in spirit here and limited to two lines below, come from David Soria Parra (Anthropic), Nick Cooper (OpenAI), Andrew Harvard (Block), Harald Kirschner (VS Code), Denis Shiryaev (JetBrains), Clare Liguori (AWS), and Anshul Ramachandran (Google DeepMind / Antigravity). The shared theme is that text was the missing human step, and that apps become components inside the agent instead of assistants bolted onto each product.

The proposal post is source 07. Official overview and build guide are in `extra/`.

## Key facts

- Live date: 26 January 2026. First official MCP extension.
- Hosts named as supporting: Claude (web and desktop), Goose, VS Code Insiders, ChatGPT starting that week.
- Package: `@modelcontextprotocol/ext-apps`.
- Metadata field: `_meta.ui.resourceUri`.
- Example apps: threejs, map, pdf, system monitor, sheet music.

## How it works

The model calls a tool. The host has already seen the UI URI on the tool, fetches the HTML resource, and shows it beside the conversation. User actions in the iframe become tool calls or context updates. The model sees what the person did and can continue the chat. Clients without the extension still get the text payload.

## Implications for ui-mcp.com / ui121

This is the production citation for “connect any AI via MCP” applied to interfaces. A ui121-built view can target the extension once and show up in Claude, ChatGPT, Goose, and VS Code without a client-specific UI. Marketing should use the jobs the post lists — explore data, configure with dependent fields, review a document, watch live metrics — as the proof that chat text is the wrong surface for ui121’s forms and reviews.

> “For the first time, an MCP tool developer can ship an interactive experience that works across a broad range of widely-adopted clients without writing a single line of client-specific code.” — MCP blog, 26 January 2026

> “MCP Apps extends this further by bringing user interfaces into the agent experience itself.” — Andrew Harvard, Design Engineer, Agentic UX, Block
