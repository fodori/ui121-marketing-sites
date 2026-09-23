# MCP — Contributing

- Source: https://modelcontextprotocol.io/community/contributing
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The contributing guide states that MCP is an open-source project and that you can join before you have a patch. The community entry it names is the MCP Contributor Discord. The rest of the page (a long guide, about 23,000 characters fetched) covers prerequisites, how repositories are split, project roles, and a first contribution: set up an environment, find work, make the change, and open a pull request, plus what maintainers consider a good contribution.

This note does not copy the setup steps. The useful public fact is governance: the protocol has roles, a contributor ladder referenced elsewhere, and a normal GitHub review path. No permissive license text for the docs themselves was quoted on the portion used here.

## Key facts

- MCP is described as open source and community-contributable.
- Discord is the named place to talk to contributors before a code change.
- First contribution path: environment, issue, change, pull request.
- Repository structure and project roles are documented on the page.
- The guide is procedural; marketing should not reproduce it.

## How it works

People who want a protocol change use the community and the SEP process; people who want a code change use an issue and a pull request against the relevant repository (spec, SDKs, servers, inspector). Roles determine who can merge. The guide’s “you do not need a change ready” line is how they grow reviewers, not only authors.

## Implications for ui1to1.com / ui121

Open governance is why MCP can be cited as a neutral plug rather than one vendor’s API. ui1to1.com can say agents will standardise on a community protocol, and the human still needs a one-to-one interface those agents call. Contributing detail does not belong on a landing page. The implication is strategic: build the canvas to the spec, and expect the spec to move through public proposals, so the person’s UI stays stable while the wire evolves.
