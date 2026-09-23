# New Relic — State of AI Coding 2026

- Source: https://newrelic.com/blog/ai/state-of-ai-coding-2026
- Fetched: 2026-09-23
- Status: ok
- Jim Young, 10 June 2026, summarising a Hanover Research study for New Relic of 200 US technology leaders at manager level and above. Vendor blog; the punch line is observability.

## Summary

New Relic’s briefing says AI has moved from a personal sandbox into the production pipeline, and that code which looks excellent in review fails at runtime. Industry baselines they repeat: Microsoft, about 30% of its codebase AI-generated; Salesforce agents on 30–50% of workloads; Meta aiming at 50% by late 2026; GitHub Copilot telemetry at a 46% average code share; Google saying 75% of production code is AI-generated. In the New Relic sample, 67% of leaders say AI generates or significantly refactors 51–75% of weekly code output.

At review time the mood is positive: 94% rate AI-generated code higher quality than human code when it is reviewed (61% somewhat higher, 33% much higher). Models pass the static checks a pull request rewards: even patterns, uniform style, few syntax errors. After deploy the picture flips. 78% report a measurable rise in production incidents tied to AI code. 86% report more senior “firefighting.” 74% say at least a quarter of AI-generated code needs significant post-deploy rework because of poor context, incomplete data, or wrong system assumptions. 82% had at least one major production failure from AI code in the past six months. AI-generated code is said to introduce about 1.7× more critical runtime issues than the historical human baseline.

62% of leaders admit teams often or always ship AI code without line-by-line verification. Seniors spend up to a third of the week as “AI janitors.” Failure modes, each hitting roughly three in ten organisations: integration and schema drift (30%), compliance and licence gaps (30%), data integrity (29%), new security holes (28%). 95% formally (87.5%) or informally (7.5%) allow machine-written code in core production. 96% call observability critical for AI-generated estates; none called it unimportant. 78% often or always prompt models to emit logs, spans, and metrics. 63% report a modest revenue lift from faster delivery, which the piece says must be partly reinvested in monitoring and refactoring time.

## Key facts

- Survey: n=200 US tech decision-makers, manager and above, Hanover for New Relic.
- Volume: 67% say 51–75% of weekly code is AI-written or heavily refactored.
- Review illusion: 94% rate it higher quality at review.
- Runtime: 78% more incidents; 86% more senior firefighting; 74% say ≥25% of AI code needs major rework; 82% had a major AI-caused failure in six months; ~1.7× critical runtime issues.
- 62% often or always skip line-by-line checks.
- Four failure classes ~28–30% each: integration, compliance, data integrity, security.
- 78% prompt for telemetry; advice is to pin OpenTelemetry semantics in Cursor, Copilot, and Claude Code templates so logs do not fragment.

## How it works

Models predict tokens from static repositories. They do not see live traffic, topology, or traces. A human reading a pull request is almost as blind: they see text, not the execution under concurrency, deprecated APIs, or multi-tenant state. At current volume, the person debugging an outage probably did not write or even read the failing code. New Relic’s remedy is to treat traces as the system of record, push telemetry into the original prompt under a shared schema, and apply the same SAST, regression, change-tracking, and canary rules no matter who authored the change.

## Implications for codereview.uk / ui121

The 74% rework figure is the commercial sting: review-time praise is not production truth. A ui121 review task should ask the human to look for the four failure classes (contract drift, licence and policy, nulls and duplication, auth and injection), not for style the model already nailed. Be honest in copy that a static IDE view cannot see the trace — the service reduces the janitor load, it does not replace observability. The “AI janitor” third of a senior’s week is the budget you are reclaiming. UK regulated buyers will hear the 30% compliance-failure slice; pair the review with an audit note of what was checked.
