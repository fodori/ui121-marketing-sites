# MCP-UI documentation hub

- **Source:** https://mcpui.dev/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The MCP-UI site presents the project as interactive UI components over MCP, now aimed at the MCP Apps standard. The banner line is that MCP-UI has been standardized into MCP Apps. Packages implement the spec and are also a community playground for what comes next. Three promises sit above the fold: a recommended client SDK plus a server SDK, sandboxed iframes for remote code, and HTML that works both in MCP Apps hosts and in older MCP-UI hosts.

The homepage shows the two-sided pattern without a long tutorial. On the client, `AppRenderer` from `@mcp-ui/client` takes the MCP client, tool name, a sandbox URL, tool input, and tool result, and handles open-link and message callbacks. The comment in the sample says to check the URL scheme before opening it. On the server, `createUIResource` builds HTML for a `ui://` URI, `registerAppResource` serves it, and `registerAppTool` from `@modelcontextprotocol/ext-apps/server` attaches `_meta.ui.resourceUri`. A legacy adapter guide is linked for hosts that do not speak MCP Apps yet.

This URL is a docs hub. Child pages that were fetched and saved:

- `extra/mcpui-apps-sdk-adapter.md` — ChatGPT Apps SDK adapter.
- `extra/mcpui-typescript-server-walkthrough.md` — Express plus streaming HTTP.
- `extra/mcpui-python-server-walkthrough.md` — FastMCP plus `mcp-ui-server`.

`https://mcpui.dev/guide` returned 404, so there is no single guide index to paginate. The homepage itself does not list dozens of articles. The GitHub README (source 10) is the fuller map and is Apache-2.0; this marketing site page did not restate a license. Ruby walkthrough and playground URLs were not given as stable links in the homepage extract, so they were not invented.

## Key facts

- Positioning: MCP-UI packages implement MCP Apps.
- Client component: `AppRenderer`. Server helper: `createUIResource` plus `registerAppTool`.
- Security line: sandboxed iframes.
- Legacy path still documented.
- Hub children saved: Apps SDK adapter, TypeScript walkthrough, Python walkthrough.

## How it works

A tool declaration points at a UI resource. The host fetches the HTML and the client SDK renders it in a sandbox, passing the tool result in and sending user actions out. The same server package can target current hosts and, with a different adapter flag, ChatGPT’s older template field. The homepage is the orientation; the walkthroughs are the build steps.

## Implications for ui-mcp.com / ui121

mcpui.dev is the developer front door for the community SDK that became the standard. ui121 can send builders there for the renderer and keep ui-mcp.com for the product story: any AI, one designed interface. The dual-host sample (MCP Apps resource URI and a legacy embedded resource) is the compatibility story to copy. Because the guide index 404s, do not assume a complete doc tree lives at `/guide`.

> “MCP Apps is the official standard for interactive UI in MCP.” — mcpui.dev homepage
