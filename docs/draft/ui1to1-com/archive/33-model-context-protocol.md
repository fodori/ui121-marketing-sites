# Model Context Protocol — What is MCP?

- Source: https://modelcontextprotocol.io
- Fetched: 2026-09-23
- Status: ok

## Summary

The Model Context Protocol homepage (current docs revision dated 2026-07-28 in the site’s own links) presents MCP as an open-source standard for connecting AI applications to external systems. With it, assistants such as Claude or ChatGPT can reach data (local files, databases), tools (search, calculators), and workflows (specialised prompts), so they can fetch what they need and take actions. The site’s analogy is a USB-C port: one standard plug for many devices, here one protocol between AI applications and the outside world.

What that enables, in their examples: an agent on your calendar and notes as a more personal assistant; a coding agent that builds a web app from a Figma design; an enterprise bot across several databases; a model that drives a 3D tool and a printer. Benefits are split by role. Developers spend less time on one-off integrations. Agents gain an ecosystem of data, tools, and apps. End users get assistants that can see their data and act for them when needed.

Ecosystem support named on the page includes Claude, ChatGPT, Visual Studio Code, Cursor, and MCPJam, with the “build once, integrate everywhere” claim. The start-here paths are build a server, build a client, and build MCP Apps — interactive apps that run inside AI clients. Learn-more paths cover architecture and the wider concept set.

The homepage is a docs hub. Current-version articles it links, plus the docs index, were saved under `archive/extra/` (see INDEX). Older protocol revisions repeated in the index were treated as historical copies, not additional articles. No permissive content license was stated on the homepage body; the notes paraphrase.

## Key facts

- Open protocol for AI apps to use external data, tools, and workflows.
- Analogy used by the project: a USB-C port for AI applications.
- Named clients on the page: Claude, ChatGPT, VS Code, Cursor, MCPJam.
- Three build paths: servers, clients, MCP Apps (interactive UI inside the host).
- Current docs stamp linked from the site: 2026-07-28.
- The protocol does not, on this page, claim to standardise the model itself — it standardises the connection.

## How it works

A host AI application connects to one or more MCP servers. Each server exposes capabilities in a common shape so the host does not write a custom adapter per vendor. Users stay in the assistant; the assistant calls out for files, queries, or actions. MCP Apps extend that from text and tool results to interactive interfaces rendered in the client. Authorisation, transports, and the exact primitives are specified in the linked docs (architecture, servers, clients, apps), not on the marketing homepage. The practical loop for an end user is: ask in the assistant, the assistant uses a connected server, results come back in the same conversation, and an app may render a richer control when text is not enough.

## Implications for ui1to1.com / ui121

MCP is the agent-side standard ui121 should complement, not mimic. The homepage’s USB-C line means agents will expect one way to reach tools. ui1to1.com’s line is the human side of that plug: agents connect through a protocol, people connect through one live interface. MCP Apps prove the industry wants interactive UI inside the agent client — charts, forms, sandboxed apps. That UI still lives in the assistant’s conversation. ui121’s canvas is the person’s own one-to-one surface, where the human-in-the-loop decision is the product, and MCP is how an agent can ask for it or supply the data behind it.

JSONUI and MCP Apps are neighbours: both move beyond a wall of text. The brand difference is who the interface belongs to. An app inside Claude is the agent’s viewport. A universal canvas is the human’s, personal, real-time, and able to hold work that should not be trapped in a chat transcript. Cite “USB-C for AI applications” as their metaphor, and point readers to the architecture and MCP Apps extras for the mechanism.

> “Think of MCP like a USB-C port for AI applications.” — modelcontextprotocol.io
