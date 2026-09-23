# Model Context Protocol

- **Source:** https://modelcontextprotocol.io/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The Model Context Protocol (MCP) is an open-source standard for connecting AI applications to outside systems. The site’s analogy is a USB-C port: one shaped connector, many devices. Through it, an assistant such as Claude or ChatGPT can reach files and databases, tools such as search, and workflows such as specialized prompts.

Examples on the page are personal (calendar and notes), design-to-code (Figma into a web app), enterprise data chat, and even driving a 3D tool and a printer. Benefits are split by role. Developers spend less time on one-off integrations. Agents gain a catalog of tools. End users get assistants that can see their data and act when allowed. The ecosystem list includes Claude, ChatGPT, VS Code, Cursor, and MCPJam, with the promise that a server built once can be attached in many clients.

The page is a front door. It points readers at a full documentation index (`/llms.txt`) and at three build tracks: servers, clients, and “MCP Apps” that run inside AI clients, plus a concepts guide. Those linked docs are a large collection. They were not expanded into extra notes; the 25-extra cap was spent on RentAHuman’s blog and `/docs` siblings, which are the direct competitive surface.

## Key facts

- Open standard for tools, data, and workflows.
- Analogy they use: USB-C for AI apps.
- Clients named: Claude, ChatGPT, VS Code, Cursor, MCPJam.
- Docs index advertised at https://modelcontextprotocol.io/llms.txt
- Build tracks: servers, clients, interactive MCP apps.

## How it works

An application speaks MCP. A server advertises tools and resources. The model calls those tools during a task and receives structured results. No human marketplace is defined by the protocol; a human network is just another server if someone builds it.

## Implications for helpexpert.me / newhuman.store

MCP is the socket, not the product. RentAHuman already occupies it with a hire-a-human server. A deferred help brand should plan to be a second server agents can add beside that one: tools whose names are questions and answers, not bounties. Because clients already support MCP, distribution does not require a new app store. It does require a server that is boring to install and strict about what “done” means. Building on MCP does not differentiate; the schema of the human reply does.
