# Introducing the Model Context Protocol

- **Source:** https://www.anthropic.com/news/model-context-protocol
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

On 25 November 2024 Anthropic open-sourced the Model Context Protocol as a standard for connecting AI assistants to the systems where data actually lives: content stores, business tools, and developer environments. The post’s thesis is that model quality has raced ahead of connectivity. Even strong models stay trapped behind silos because every new data source still needs its own custom connector.

MCP is framed as one open protocol that replaces that pile of one-off integrations. Developers either expose data through an MCP server or build an MCP client that connects to those servers. The launch shipped three pieces: the specification and SDKs, local MCP server support inside the Claude Desktop apps, and an open-source repository of servers. Pre-built servers covered Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer. Claude 3.5 Sonnet was called out as capable of generating server implementations quickly.

Early adopters named in the post are Block and Apollo. Developer-tool companies working with the protocol included Zed, Replit, Codeium, and Sourcegraph, with the coding payoff described as better context around a task and more useful code in fewer attempts. Creators credited are David Soria Parra and Justin Spahr-Summers. All Claude.ai plans could connect servers in Claude Desktop; Claude for Work customers could test local servers against internal data, with remote production servers promised later.

The post is about data and tools, not interactive UI. The “connect once, use across tools” promise is the foundation later UI work sits on.

## Key facts

- Launch date: 25 November 2024.
- Creators: David Soria Parra and Justin Spahr-Summers.
- Launch surfaces: spec and SDKs, Claude Desktop local servers, open server repo.
- Example servers: Google Drive, Slack, GitHub, Git, Postgres, Puppeteer.
- Named adopters and partners: Block, Apollo, Zed, Replit, Codeium, Sourcegraph.

## How it works

An MCP server exposes a data source or tool. An AI application acts as a client and connects to that server. Instead of maintaining a separate connector for each model-and-source pair, both sides implement the protocol. The post describes this as a two-way connection so assistants can reach live systems rather than only what a user pastes into chat. Context is meant to survive as the assistant moves between tools and datasets.

## Implications for ui-mcp.com / ui121

This is the origin story for “connect any AI.” ui-mcp.com can quote the problem (custom integration per data source) and then move one step past the 2024 launch: the same protocol now carries interfaces, not only JSON. ui121’s angle is the interface layer those early servers did not have — forms, previews, and actions inside the conversation — while still using the “one protocol, many hosts” distribution Anthropic announced here.

> “Today, we're open-sourcing the Model Context Protocol (MCP), a new standard for connecting AI assistants to the systems where data lives.” — Anthropic, 25 November 2024

> “Open technologies like the Model Context Protocol are the bridges that connect AI to real-world applications.” — Dhanji R. Prasanna, CTO at Block, quoted in the launch post
