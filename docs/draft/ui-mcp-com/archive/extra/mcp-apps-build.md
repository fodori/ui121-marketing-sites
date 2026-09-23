# Build an MCP App (official guide)

- **Source:** https://modelcontextprotocol.io/extensions/apps/build
- **Fetched:** 2026-09-23
- **Status:** ok
- **Expanded from:** source 03 (“Build MCP Apps”) and the Apps overview

## Summary

The build guide assumes Node.js 18+ and familiarity with MCP tools and resources. The fastest path is an AI coding agent with the `create-mcp-app` skill from the ext-apps repo. Claude Code can install it from the plugin marketplace. The Vercel Skills CLI (`npx skills add modelcontextprotocol/ext-apps`) is the cross-agent option. Manual copy targets are listed for Claude Code, VS Code and GitHub Copilot, Gemini CLI, Cline, Goose, Codex, and Cursor. After install, the developer asks for something concrete (“a color picker”) and the agent scaffolds server, UI, and config. Run is `npm install`, build, and serve.

The manual path separates server code from UI. A typical tree is `server.ts`, `mcp-app.html`, and `src/mcp-app.ts`, bundled with Vite and `vite-plugin-singlefile` so the iframe can be one HTML file under a deny-by-default content security policy. Dependencies named include `@modelcontextprotocol/ext-apps`, the MCP SDK, Express, and CORS.

The worked example is a “get time” tool. The server registers the tool with `_meta.ui.resourceUri` set to a `ui://` URI and registers a resource that reads the built HTML. It listens on HTTP, in the sample at port 3001 and path `/mcp`. The UI creates an `App`, calls `connect`, renders `ontoolresult`, and uses `callServerTool` when a button is clicked. Each UI-initiated call is a round trip, so the guide says to design for latency. Other `App` methods cover logs, opening URLs, and updating model context.

Testing needs a host that implements the extension. Claude web and Desktop work, but a local server must be tunneled (the guide mentions cloudflared) and added as a custom connector, which requires a paid Claude plan (Pro, Max, or Team). Alternatively, `examples/basic-host` in ext-apps runs at localhost:8080 and can be pointed at the local server with a `SERVERS` environment variable.

The page is a tutorial. Steps are summarized here; the sample source was not copied into this note.

## Key facts

- Preferred start: `create-mcp-app` agent skill.
- Agents with documented skill folders include Cursor, Claude Code, VS Code, Gemini CLI, Goose, and Codex.
- Pattern: `registerAppTool` plus `registerAppResource`, MIME from the SDK constant.
- Local HTTP example: port 3001, path `/mcp`.
- Claude custom connectors: paid plans. basic-host: localhost:8080.

## How it works

Build the UI to a single HTML file. The server exposes it as a `ui://` resource and points one tool at it. A host fetches that resource when the tool runs, displays it in a sandbox, and delivers the tool result to the page. Buttons call tools through the host rather than through a private API.

## Implications for ui-mcp.com / ui121

Developers will ask an agent to scaffold the app. ui121’s offer is what happens after the scaffold: a real interface, brand, and workflow, still registered the same way. Supporting Cursor and Claude Code skills matters because those are the install paths in the official guide. For demos, basic-host is the no-account loop; for buyers, Claude and ChatGPT are the proof. Keep CSP and the single-file bundle in the engineering checklist so third-party widgets stay inside the sandbox the overview promises.
