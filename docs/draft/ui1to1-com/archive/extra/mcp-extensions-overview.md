# MCP — Extensions overview

- Source: https://modelcontextprotocol.io/extensions/overview
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

Extensions are optional additions beyond core MCP, for modular or experimental capabilities. They are named `{vendor-prefix}/{extension-name}`, for example an OAuth client-credentials id under the modelcontextprotocol vendor prefix. Third parties are told to use a reversed domain they own. Official repositories called out include authorisation extensions, MCP Apps, MCP Tasks (long-running work with polling and durable handles), and skills delivered over MCP. Experimental extensions incubate under ground rules and graduate by a Specification Enhancement Proposal on the extensions track.

The path to official status is propose a SEP, ship at least one reference implementation in an official SDK, pass core-maintainer review, publish into the extension repository, then let others adopt it. Specs must use RFC 2119 keywords and sit with a working group. SDKs may ignore extensions; protocol conformance does not require them. Extensions are off until a developer opts in. They version on their own. Breaking changes (removed fields, type changes, new required fields, changed meaning) should become a new identifier rather than a silent edit. Clients and servers negotiate capabilities and degrade gracefully when the other side lacks the extension.

## Key facts

- Identifier shape: `vendor/name`, reversed-DNS for third parties.
- Official examples: auth extensions, MCP Apps, Tasks, skills over MCP.
- Graduation requires a SEP plus a reference SDK implementation.
- Off by default; explicit opt-in.
- SDKs are not required to implement every extension.

## How it works

During connection, each side advertises extension capabilities. If both opt in, the extra methods and metadata apply. If not, core tools, resources, and prompts still work. Maintainers of an extension can ship compatible updates without a core protocol revision. A breaking update is a new id so old clients fail clearly instead of misreading fields.

## Implications for ui1to1.com / ui121

MCP Apps being an extension, not the core, means many hosts will never render an in-chat UI. A one-to-one canvas that speaks core MCP (tools and elicitation) still works everywhere, and can add Apps where the host supports them. That is a practical split for ui121: the human interface is the product; the protocol extension is optional reach into Claude or Copilot. Opt-in and graceful degradation match a privacy stance — interactive UI and extra permissions are chosen, not assumed.
