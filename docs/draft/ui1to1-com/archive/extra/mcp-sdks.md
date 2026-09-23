# MCP — SDKs

- Source: https://modelcontextprotocol.io/docs/2026-07-28/sdk
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

Official SDKs implement MCP for several languages and are tiered by completeness, protocol support, and maintenance. The page points at a separate tiering explainer. Tier 1 on the fetched table: TypeScript, Python, C#, Go, and Rust. Tier 2: Java and Ruby. Tier 3: Swift, PHP, and Kotlin. Each SDK is idiomatic to its language and is stated to support the same jobs: servers that expose tools, resources, and prompts; clients that connect to any server; local and remote transports; and typed protocol compliance. Install docs live on each language’s SDK site. Next steps on the page are the server and client tutorials.

## Key facts

- Tier 1: TypeScript, Python, C#, Go, Rust.
- Tier 2: Java, Ruby. Tier 3: Swift, PHP, Kotlin.
- Shared promise: servers, clients, both transports, type-safe protocol use.
- Repositories are under the `modelcontextprotocol` GitHub org, with per-language doc sites.

## How it works

An SDK hides JSON-RPC, discovery, and transport setup. Application code declares tools and handlers, or a client session and a tool loop. Tier is a signal of how completely that language tracks the current spec and how strongly it is maintained, not a different protocol. Choosing a tier-1 SDK is the path the docs imply for production hosts and servers.

## Implications for ui1to1.com / ui121

A universal canvas that agents can call should speak MCP through a maintained SDK, not a one-off parser. TypeScript and Python as tier 1 match a Node server and common agent stacks. The product story stays one-to-one UI: the SDK is the plug, JSONUI is what the person sees when a tool needs a human. Multi-language SDKs are why “USB-C” is credible — the same human task can be requested from hosts written in another language.
