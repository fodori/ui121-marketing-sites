# MCP-UI Apps SDK adapter (ChatGPT)

- **Source:** https://mcpui.dev/guide/apps-sdk
- **Fetched:** 2026-09-23
- **Status:** ok
- **Expanded from:** source 30 (mcpui.dev hub) and the adapter section of source 10

## Summary

This guide is explicitly ChatGPT-specific and separate from the open MCP Apps standard. MCP Apps use `_meta.ui.resourceUri`. The Apps SDK uses `openai/outputTemplate`. The adapter in `@mcp-ui/server` lets one HTML widget run in ChatGPT by switching MIME type to `text/html+skybridge` and injecting a bridge script that translates MCP-UI messages into Apps SDK calls. The guide says you still serve the resource yourself in the shape the Apps SDK expects.

Two resources are required if you want both worlds. The static template, with `adapters.appsSdk.enabled`, is what ChatGPT loads via `_meta["openai/outputTemplate"]`. The embedded resource returned on each tool call should not enable the adapter, so ordinary MCP-UI hosts still receive normal HTML. ChatGPT ignores that embedded copy and uses the template.

Tool metadata in the examples includes invoking and invoked status strings and `openai/widgetAccessible`. Resource metadata can include a widget description, a border preference, and a CSP object with connect and resource domains. The tool result can also carry `structuredContent` (the weather example passes the forecast) plus a text line. The page points at the official Apps SDK reference for the full metadata list and does not claim the adapter replaces MCP Apps for new work.

## Key facts

- Two URI styles: `ui://` for MCP-UI, `openai/outputTemplate` for ChatGPT’s template.
- Adapter MIME: `text/html+skybridge`.
- Do not enable the adapter on the per-call embedded resource.
- Example metadata: widget description, CSP domains, prefers border, accessible flag, status strings.
- Marked as legacy relative to the open standard.

## How it works

Build the widget once. Register a template resource with the adapter on for ChatGPT. Register the tool with the OpenAI output-template pointer. Also return a plain UI resource for hosts that expect MCP-UI embedded content. The bridge rewrites parent messages so the widget can call tools without a ChatGPT-specific rewrite of the HTML.

## Implications for ui-mcp.com / ui121

Until every ChatGPT surface prefers the open `_meta.ui.resourceUri` path, a ui121 component that must ship in ChatGPT still needs this dual registration. New work should prefer the open field (see source 12) and keep the adapter as the compatibility layer the MCP-UI docs still document. The product claim remains one design, two metadata pointers, not two interfaces.

License note: the MCP-UI project is Apache-2.0 (see source 10). This guide page did not restate the license.
