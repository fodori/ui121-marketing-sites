# MCP — Specification Enhancement Proposals

- Source: https://modelcontextprotocol.io/seps
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

Specification Enhancement Proposals are how major MCP changes are proposed. Each SEP is a short technical specification plus a rationale. The page defines statuses and lists proposals; it is an index, not one design. Individual SEPs beyond the Apps proposal (saved separately because the homepage and extensions docs feature it) were not each expanded. The index also links to guidelines for submitting a SEP.

The mechanism matters more than any one row: the protocol changes by written proposal, review, and status, not by silent edits in a single vendor’s SDK. That is why a “final” SEP can still be historical relative to the current spec.

## Key facts

- SEPs are the path for major protocol changes.
- Each proposal carries a technical spec and a rationale.
- The index defines statuses and links to submission guidelines.
- MCP Apps (SEP-1865) is one finalised extensions-track example, noted in its own file.
- The page is a living list; this note does not inventory every SEP.

## How it works

A contributor writes a SEP, it is discussed and given a status, and accepted work is reflected in the specification. Extensions use the same process on an extensions track, with extra gates such as a reference implementation. Readers are told to follow the current spec when a final SEP and the spec disagree. The index is the map; the spec is the contract.

## Implications for ui1to1.com / ui121

ui121 should track SEPs that change elicitation, tasks, and apps, because those are the human-interface parts of the agent protocol. The one-to-one canvas should depend on stable ideas (a typed human request, a rendered decision) and treat SEP churn as integration work. Marketing can say the ecosystem now has a formal path for interactive UI, pointing at SEP-1865, without claiming every draft SEP is shipping behaviour.
