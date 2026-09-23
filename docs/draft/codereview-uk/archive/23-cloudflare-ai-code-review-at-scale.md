# Cloudflare Blog — Orchestrating AI code review at scale

- Source: https://blog.cloudflare.com/ai-code-review/
- Fetched: 2026-09-23
- Status: ok
- Ryan Skidmore, 20 April 2026. Internal engineering post. Paraphrased; no source licence stated. Implementation snippets in the original are not reproduced here.

## Summary

Cloudflare treats code review as both a quality tool and a reliable way to stall a team: median time to first human review on internal projects was often measured in hours, and the comments were often naming nits. Off-the-shelf AI reviewers were good and even configurable, and still not flexible enough for their size and internal standards. A single “here is the diff, find bugs” prompt was worse: vague advice, invented syntax errors, and suggestions to add error handling that was already there.

They built a CI-native orchestrator around OpenCode, an open-source coding agent they already use (and have contributed dozens of upstream changes to). On a merge request, up to seven specialist reviewers run — security, performance, code quality, documentation, release, and compliance with an internal engineering codex — under a coordinator that dedupes, judges severity, and posts one structured review. The system has run across tens of thousands of merge requests. It approves clean changes, flags bugs they consider real, and blocks merges on serious defects or vulnerabilities. The programme name in the post is Code Orange: Fail Small.

Architecture is plugins with three phases: bootstrap (concurrent, non-fatal), configure (sequential, fatal if version control cannot connect), and a post-configure step for async model overrides. Plugins register agents and prompts through a context API; they do not see each other’s secrets. GitLab is the VCS today. The coordinator is a child process fed the prompt on standard input, because huge merge-request descriptions blew the kernel argument limit. Output is JSON lines so a crash still leaves parseable logs. Sub-reviewers are separate sessions. They may read files and search; they return structured findings. A heartbeat log every 30 seconds (“model is thinking”) stopped people cancelling jobs that were only slow. User-controlled text is stripped of the XML-ish boundary tags so a merge-request body cannot break out and instruct the coordinator. Diffs are written as per-file patches on disk; reviewers read what their domain needs, which saves tokens.

Models are tiered. The coordinator, which must merge seven opinions and drop false positives, uses the strongest models they name (Claude Opus 4.7 and GPT-5.4 in the post). Heavy sub-reviewers (quality, security, performance) use a cheaper tier (Claude Sonnet 4.6 and GPT-5.3 Codex). Documentation, release notes, and AGENTS.md checks use Kimi K2.5. Assignments can be overridden at runtime from an internal worker.

The security reviewer is told to flag only what is exploitable or concretely dangerous: injection, auth bypass in the changed code, hardcoded secrets, bad crypto, missing validation at a trust boundary. It is told to ignore theoretical risks, defence-in-depth nits, issues in untouched code, and “consider library X.” Findings carry critical (outage or exploitable), warning (real regression), or suggestion. The coordinator drops speculation, nits, false positives, and anything that contradicts local convention, and may open the source if it is unsure. Outcomes map to GitLab approval: clean or suggestion-only can approve; warnings without production risk can approve with comments; a pattern of warnings revokes a prior bot approval; serious findings block.

## Key facts

- Scale: tens of thousands of internal merge requests; thousands of repositories in the design target.
- Shape: up to seven specialists plus one coordinator; one posted review, not seven threads.
- Latency symptom: long reasoning looked like a hung CI job until a 30-second heartbeat.
- Prompt-injection defence: strip boundary tags from merge-request text.
- Severity drives the API: approve, approve-with-comments, unapprove, or block.
- OpenCode chosen because it is a server with an SDK, not only a terminal UI.
- They had already landed on the order of 45 upstream pull requests to OpenCode at time of writing.

## How it works

A merge request triggers CI. Plugins assemble a config. The coordinator starts, calls a tool that spawns specialist sessions, collects XML-structured findings, filters them, and posts a single verdict that can approve or block. Telling the model what not to flag is described as the actual prompt-engineering win. Without that, developers learn to ignore the firehose.

## Implications for codereview.uk / ui121

Proof that multi-agent review can sit in the merge path at a company Cloudflare’s size — and that the useful output is one verdict, not a pile of comments. codereview.uk should copy the verdict shape (approve, comments, block) as the ui121 task outcome, with the human as the coordinator who may override the specialists. The security prompt’s “exploitable or concretely dangerous” bar is a good reviewer rubric so contractors do not nitpick. Do not imply you run their stack. Do say the industry’s best internal systems still need a judgement layer that can refuse a merge, and that a person in an IDE-like surface is how a smaller team gets that without building seven agents. Their hours-long human queue is the waiting time you are selling against.
