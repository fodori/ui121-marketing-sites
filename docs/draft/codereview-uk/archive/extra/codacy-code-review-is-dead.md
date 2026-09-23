# Codacy — Code review is dead (series part 2)

- Source: https://blog.codacy.com/code-review-is-dead-why-ai-generated-code-needs-verification-not-human-approval
- Fetched: 2026-09-23
- Status: ok
- Extra. Linked from source 13 as part 2 of “The Future of Code Review” (Codacy, 25 June 2026). Not a SOURCES.md URL.

## Summary

Part 2 says the pre-merge approval ceremony does not survive AI volume. It cites 90% AI adoption among software professionals and treats the problem as a mismatch between how code is produced and how it is verified, not as a shortage of careful reviewers. Teams that adapt replace ritual sign-off with CI gates, keep humans for high-risk changes, and turn escapes into new rules. If output per developer doubles or triples, you either double reviewers or give each change less attention. Most teams drift into the second. A required checkbox then creates false confidence: skimmed diffs, rubber stamps, slow merges that are not safer. Salesforce is mentioned for roughly 30% more code volume, higher review latency, and reviewer engagement on the largest pull requests flattening. Generated code makes this worse because it looks idiomatic while missing domain assumptions. Humans are poor at proving behaviour by inspection alone. The question becomes what evidence shows the change behaves, not whether someone clicked approve.

Automated gates are supposed to supply consistency, minute-scale feedback, coverage of every file, and an auditable record. Four layers: formatting and banned patterns, fail immediately; static analysis and security, including AI-coding policies for unsafe auth, data handling, and secrets, plus dependency and secret scans; tests and coverage, raised when a change is known to be AI-written because the author did not mentally simulate it; branch protection so the merge stays locked until required checks pass. A rule that is only in a document is not a control. AI review can still summarise and flag an edge case, and it must not be the authority that satisfies a required review. Fixes proposed by an assistant have to go back through the same scanners. If a comment and a security gate disagree, the gate wins.

Human review stays for auth, payments, privacy boundaries, deploy config, new dependencies, large architectural shifts, and the instruction files that steer coding agents. A utility at 95% coverage with a clean scan does not need the same pass as authentication middleware. Post-merge, sample AI-authored code, sensitive services, odd size, policy exceptions, and incident-linked changes. When a person finds a miss, encode it (linter, Semgrep, tests). Compliance evidence without “someone clicked” is: which checks ran, which policies, which exceptions and why, which sensitive files, which tests, who owned the risk, whether deploy health checks passed. SOC 2, ISO 27001, and HIPAA want consistent controls. Deterministic gates audit more cleanly than a model that varies between runs.

## Key facts

- Adoption figure used: 90% of software professionals.
- Volume illustration: double or triple output, or accept shallower review.
- Salesforce, as cited: ~30% more code, slower review, engagement on the biggest PRs plateauing.
- Four gates: format, SAST/SCA/secrets, tests and coverage, branch protection.
- High-risk list: auth, payments, data, infrastructure, dependencies, architecture, agent instruction files.
- AI approval must not silently count as the required human review; code owners stay on sensitive files.

## How it works

Classify the pull request. Low-risk and well tested merges when the pipeline is green. High-risk waits for a person. After merge, sampling feeds new automated rules. The enforcement point is the status check, not a dashboard of findings discovered later.

## Implications for codereview.uk / ui121

This essay argues against reviewing every line. Agree with it in the pricing page: do not sell universal pre-merge eyeballs. Sell the high-risk queue — auth, payments, data, agent config — as ui121 tasks in an IDE-like surface, and say plainly that scanners remain the merge condition for everything else. That is how you answer “code review is dead” without pretending a person can scale with agent output. The compliance list (checks, exceptions, owner of the risk) is the record the task should emit. Their ban on AI approval counting as human approval is the contractual line: a codereview.uk sign-off is a person, and a bot comment is not a substitute on the files you list.
