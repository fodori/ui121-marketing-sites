# MCP — Connect to local servers

- Source: https://modelcontextprotocol.io/docs/2026-07-28/develop/connect-local-servers
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

Local MCP servers give an assistant controlled access to resources on the user’s machine. The guide uses Claude Desktop as the example client and says the same ideas apply to other hosts. By the end, the assistant can work with files — create, organise, search — only with explicit permission for each action. Prerequisites called out are Claude Desktop and Node.js.

The worked server is the filesystem server. The guide covers what an MCP server is in this setting, how to install that server, examples of file tasks, how approval works, and troubleshooting. The permission model is the substance: the model does not receive silent access to disk. Each action is something the person allows. This note does not copy install commands.

## Key facts

- Example host: Claude Desktop. Example server: filesystem.
- Requirement stated: explicit permission for each action.
- Prerequisites named: Claude Desktop and Node.js.
- Local servers are positioned as secure, controlled access, not full-disk agents.
- Other hosts are in scope; the clicks are Claude-specific.

## How it works

The user installs a server that speaks MCP over a local transport. The host starts it and shows its tools. When the model wants to touch a file, the host asks the person. Approval is per action, so a search and a delete are not the same grant. Troubleshooting on the page is for the usual desktop issues: the server not launching or the host not listing tools. Once connected, file work happens inside the assistant instead of in a separate file manager the model cannot see.

## Implications for ui1to1.com / ui121

Per-action permission is human-in-the-loop in its smallest form. ui1to1.com can respect that and offer a richer one-to-one surface when the “action” is a real task, not a single filesystem call: the person sees the change in context and confirms once on a canvas. Local MCP is also the privacy pattern — data stays on the machine, the human gates it — which fits a self-hosted, UK-minded story. JSONUI does not replace the filesystem server; it can be the approval interface when many local tools would otherwise spam confirm dialogs.
