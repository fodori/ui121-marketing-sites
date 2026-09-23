# NHI Mgmt Group: human-in-the-loop approval

- **Source:** https://nhimg.org/glossary/human-in-the-loop-approval/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

This glossary entry, updated 28 May 2026 under governance, ownership, and risk, defines human-in-the-loop approval as a review step before high-risk access is granted to a non-human identity, an agent, or a privileged automation. It is for exceptional privilege expansion, not for every token or API key. Routine access should stay on automated controls such as role-based access, just-in-time grants, and zero standing privilege. The common mistake is forcing a person to approve every routine secret request, which creates latency without catching the unusual case.

The operational intent is to slow a risky request long enough to check context, ownership, and business need. Examples include an agent asking for temporary production-database write access after a failed deploy, a one-time secrets export during an incident, a contractor toolchain asking for a broader API scope, and a cloud platform flagging a privileged request that does not match the workload’s normal pattern. The review should be short, documented, and tied to explicit criteria.

The security argument is blast radius. The group’s own research figure on the page is that only 5.7% of organisations have full visibility into their service accounts, so a human gate often compensates for a weak inventory. The page maps the idea to OWASP’s Non-Human Identity Top 10 (NHI-02, excessive privilege), NIST CSF 2.0 PR.AC-4, and NIST Zero Trust SP 800-207. Teams usually add the control after an incident, which is late.

## Key facts

- Updated 28 May 2026. Domain: governance, ownership, and risk.
- Cited stat: 5.7% of organisations have full visibility into service accounts (NHI Mgmt Group research, as stated on the page).
- Framework rows: OWASP NHI Top 10 NHI-02; NIST CSF 2.0 PR.AC-4; NIST SP 800-207.
- Misuse called out: approving every routine token, certificate, or key request.
- Best use: decision points where a false accept has material blast radius.

## How it works

A machine identity requests access that is unusual, elevated, or high impact. Policy may already allow a baseline role. The exception is routed to a designated person who confirms scope, time window, rollback, and whether a shorter just-in-time grant would do. The decision is logged with a justification. It is paired with post-approval review so the gate is not only an audit ritual. NIST’s outcome-based language is used to argue against blanket approvals.

## Implications for ai2ui.uk / ui121

ai2ui.uk can be the exception desk for agent privilege, not the daily key-vending machine. Copy should say when not to ask: routine reads and baseline roles stay automatic. When an agent wants write access, a secrets export, or a scope wider than its role, the gateway shows owner, window, and rollback and records the human. The 5.7% visibility figure is a sharp line for security buyers, attributed to NHI Mgmt Group, not to ui121.
