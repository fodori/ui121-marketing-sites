# MCP — Registry

- Source: https://modelcontextprotocol.io/registry/about
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The MCP Registry is described as a preview: breaking changes and data resets can happen before general availability. It is the official metadata catalogue for publicly reachable MCP servers, with backers named as Anthropic, GitHub, PulseMCP, and Microsoft. Publishers get one place to post metadata, namespaces via DNS verification, a REST API for discovery, and a standard way to say how to install or connect. Records use a `server.json` shape: a reverse-DNS name, where the package or remote URL lives, how to run it, and descriptive capabilities.

It does not host binaries. npm, PyPI, and Docker Hub do that; the registry points at them. Private network servers and private package feeds are out of scope; those belong in a private registry. The official codebase is not offered as a supported self-hosted product. Downstream marketplaces are the intended consumers, pulling on a slow cadence and adding ratings or curation. Host applications are told not to call the official registry directly, but to use a marketplace that implements the same OpenAPI shape. Trust is namespace authentication (GitHub account or domain). Security scanning is delegated onward rather than claimed as a full guarantee on this page.

## Key facts

- Status: preview.
- Backers named: Anthropic, GitHub, PulseMCP, Microsoft.
- Metadata only; packages stay in npm, PyPI, Docker Hub, and similar.
- Public servers only. Private servers need a separate registry.
- Hosts should use aggregators, not this registry, as their primary directory.
- Names are reverse-DNS and tied to a verified owner.

## How it works

A publisher proves control of a namespace, uploads `server.json`, and clients or marketplaces read the API. An aggregator copies metadata hourly-scale, not on every user keystroke. A host then installs from the package location or connects to the remote URL in that metadata. Authenticity is “this namespace belongs to this domain,” not “this server is safe.”

## Implications for ui1to1.com / ui121

Discovery of agent tools will look like an app store of servers. ui1to1.com’s human canvas still has to be chosen on purpose: being listed is not the same as being the one interface a person works in. If ui121 exposes an MCP server for human tasks, registry metadata is how agents find it, with a verified namespace and a public or marketplace listing. Human-in-the-loop remains the product behind that listing — the canvas — not the JSON catalogue entry. Preview status means the directory is not yet a stable dependency to promise in marketing.
