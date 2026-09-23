# MCP — Example servers

- Source: https://modelcontextprotocol.io/examples
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The examples page is a directory of reference MCP servers, official integrations, and community servers, meant to show that models can reach tools and data through one protocol. Current reference servers named: Everything (a test bed of prompts, resources, and tools), Fetch (web pages converted for model use), Filesystem (file operations with configurable access control), Git (read, search, and change repositories), Memory (a knowledge-graph store), Sequential Thinking (a structured problem-solving tool), and Time (timezone conversion). Older examples sit in an archived repository and are historical only.

Official and community lists are pointers into the `modelcontextprotocol/servers` GitHub README, not inline catalogues. Getting started says TypeScript servers can run via `npx`, and Python servers via `uvx` or `pip`, then be configured in Claude. The page is a catalogue of projects, not a blog; the individual READMEs were not expanded further.

## Key facts

- Reference set: Everything, Fetch, Filesystem, Git, Memory, Sequential Thinking, Time.
- Filesystem server emphasises configurable access control.
- Archived examples are explicitly unmaintained.
- Run styles mentioned: `npx` for TypeScript, `uvx` or `pip` for Python.
- Further lists: official vendor integrations and community servers on GitHub.

## How it works

A reference server is a small, runnable process the host launches or connects to. It implements a slice of the protocol so developers can see tools, resources, and prompts in a real client. Access control on the filesystem server is the pattern for “the model does not see the whole disk.” Memory and sequential thinking show servers that are not wrappers around an existing SaaS API. The catalogue itself does not execute anything; Claude (or another host) does, after configuration.

## Implications for ui1to1.com / ui121

These servers are the tool sprawl behind an agent: files, git, time, web, memory. A one-to-one interface is how a person supervises that set without opening each system. The filesystem access-control note is the privacy analogue for a canvas: the human decides the boundary, the agent operates inside it. ui121 can present human tasks the way these servers present tools — discoverable, scoped, and rendered as UI rather than as another chat command. Do not imply ui121 replaces Git or filesystem servers; it is the surface where their results become a decision.
