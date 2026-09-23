# MCP Inspector

- Source: https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The MCP Inspector is the reference tool for testing and debugging servers. It ships as one npm package, `@modelcontextprotocol/inspector`, with three clients on one binary: a web UI, a CLI, and a terminal UI. They share a core, so transports, config files, OAuth state on disk, and protocol-era negotiation (legacy versus the modern 2026-07-28 behaviour) stay consistent. The web client can pin a monitor sidebar so protocol traffic stays visible while you exercise the server.

The page is a quickstart: inspect published servers, distinguish launcher flags from client flags, and follow links to the web, CLI, and terminal guides. It is a tool document, not a catalogue of servers. Sub-pages (web, CLI, TUI, configuration, authorisation, recipes) were not saved separately; the cap on extras was used for distinct hub articles, and those sub-pages are the same tool’s manual.

## Key facts

- Package: `@modelcontextprotocol/inspector`.
- Three clients: web, CLI, terminal UI, one shared core.
- Covers legacy and 2026-07-28 protocol eras.
- Shared OAuth state and the same transports across clients.
- Purpose: exercise a server and watch protocol traffic.

## How it works

A developer points the inspector at a local or published server. The chosen client connects, lists tools, resources, and prompts, and can invoke them. The monitor shows the JSON-RPC exchange. Flags that start the package differ from flags that configure the client session. Because OAuth state is shared, a login in one client can be reused. Protocol-era negotiation means an older server still attaches instead of failing closed without explanation.

## Implications for ui1to1.com / ui121

If ui121 ships an MCP server for human tasks, the Inspector is how partners prove a tool call reaches the canvas. The product lesson for one-to-one UI is visibility: the person should see the same clarity the inspector sidebar gives a developer — what was asked, what will happen — on their own surface. Human-in-the-loop debugging is not only logs; it is a UI that shows the pending request. Do not document inspector commands in marketing.
