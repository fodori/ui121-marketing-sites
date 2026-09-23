# MCP security statistics 2026

- **Source:** https://www.practical-devsecops.com/mcp-security-statistics-2026-report/
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Varun Kumar’s 26 June 2026 briefing for Practical DevSecOps collects CVE names, scanner studies, and survey figures. It ends as a pitch for a Certified MCP Security Expert course. The numbers come from many vendors and should stay attributed. The author even flags scanner noise: one audit found about a 78% false-positive rate for YARA-based MCP scanners.

Adoption recap matches Anthropic’s December 2025 post: 97M+ monthly SDK downloads, 10,000+ public servers, clients including ChatGPT, Claude, Cursor, Gemini, Copilot, and VS Code. An independent May 2026 registry pull is cited at 9,652 latest server records and 28,959 version records. GitHub topic `mcp-server`: 15,926 repos on 24 May 2026; the reference servers repo at 86,148 stars. The Fortune 500 line to use carefully: 28% had production MCP servers by early 2026, credited to Truto and marked as an estimate. A contrasting Clutch figure, also used by Lenses.io: 86% of MCP servers run on developer machines and only 5% in production environments.

Vulnerability ranges are wide because methods differ. Equixly: 43% command injection. Endor Labs: 82% of 2,614 implementations with file operations prone to path traversal. BlueRock: 36.7% SSRF across 7,000+ servers. Enkrypt: 33% of 1,000 scanned servers with critical issues. Tool poisoning around 5.5% in one academic set of 1,899 servers; another scan of 1,808 reported some finding on 66%. Cross-server cascade 72.4% when several servers are compromised. Named classes: tool poisoning, rug pulls, tool shadowing, confused deputy, and Simon Willison’s lethal trifecta.

CVEs worth naming without exploit detail: CVE-2025-6514 in mcp-remote (CVSS 9.6, 437,000+ downloads, fixed in 0.1.16); CVE-2025-49596 in MCP Inspector (CVSS 9.4); CVE-2025-54136 and CVE-2025-54135 against Cursor; filesystem server CVEs CVE-2025-53110 and CVE-2025-53109; three Git MCP server CVEs disclosed January 2026; CVE-2026-33032 in nginx-ui’s MCP (CVSS 9.8, patched 15 March 2026). Volume claim: 30+ CVEs in a 60-day window in early 2026, 13 of them command injection.

Exposure: Astrix on 5,200+ servers — 88% need credentials, 53% static keys, 8.5% OAuth, 79% keys via environment variables. Trend Micro: 492 internet-exposed servers with no auth in July 2025, later “nearly tripled” to 1,467, touching 1,402 tools. CoSAI scored 17 servers at an average 34/100. Supply chain: a malicious postmark-mcp release that blind-copied mail; GitGuardian found 24,008 secrets in MCP config on public GitHub, 2,117 still valid. Incident surveys (Gravitee 88% of orgs with a suspected agent incident; Gartner projections through 2028–2029) are broader than MCP itself. HackerOne’s 540% jump in prompt-injection reports is included as context.

## Key facts

- Date: 26 June 2026. Author: Varun Kumar.
- Production gap: Truto’s ~28% of Fortune 500 with production MCP servers; Clutch’s 5% of servers actually in production environments.
- OAuth adoption in the Astrix sample: 8.5%.
- High-profile client RCE class: mcp-remote CVE-2025-6514, 437k+ downloads.
- Exposed unauthenticated servers: 492, later cited near 1,467.
- Registry cross-check: about 9,652 latest official-registry records in May 2026.

## How it works

The piece is a risk map, not a build guide. Local stdio servers inherit the user’s machine. Remote HTTP servers inherit API problems (auth, SSRF, injection) plus agent problems (tool descriptions that lie, one compromised server influencing another). OAuth 2.1 is what the spec recommends; most public servers in these scans do not use it. Registries do not publish an audited percentage.

## Implications for ui-mcp.com / ui121

A UI server is still an MCP server: iframe sandboxing does not replace OAuth, secret hygiene, or review. ui-mcp.com should talk about vetted interfaces, text fallbacks that do not leak extra data, and consent before a widget calls a tool. Use the 28% Fortune 500 figure only with the Truto caveat, and pair it with the 5% production figure so the brand sounds like it understands the gap. Do not turn CVE writeups into how-to content. The commercial close of the page is a certification; ignore it for positioning except as evidence that MCP security training is already a market.
