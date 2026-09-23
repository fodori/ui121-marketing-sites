# Scale HiL-Bench leaderboard

- **Source:** https://labs.scale.com/leaderboard/hil
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

HiL-Bench, from Scale Labs, measures whether a model knows when to ask a person. Tasks are built so the agent cannot finish from the prompt alone. It must call `ask_human()` for missing, ambiguous, or contradictory details, and it is penalised for asking what it could have resolved itself. The set is 300 tasks: 150 software-engineering tasks drawn from SWE-Bench Pro and 150 SQL tasks from BIRD. Two hundred are public and one hundred are private. The page counts 1,131 blockers, about 3.77 per task (about 3.55 on SWE, about 3.99 on SQL). Blockers are filtered so a task without the tool is nearly unsolvable (pass at or below 5%) and, with answers given up front, at least one model reaches at least 85%. A frozen Llama 3.3 70B judge marks a question as resolving a blocker or as irrelevant.

Two scores matter. Ask-F1 balances precision and recall of blocker questions, so spraying questions does not win. Pass@3 is whether the task is solved in three tries once the model must decide to ask. The written takeaway on the page, which should not be confused with the live ranking table, says Claude Opus 4.6 reaches only about 24% combined Pass@3 when it must choose when to ask, against roughly 75–91% when full information is provided. The highest combined Ask-F1 in that narrative is about 44%. SWE Pass@3 in the narrative sits around 1–9%, SQL around 5–39%. Blocker recall peaks near 36% on SWE and 61% on SQL. Example profiles: GPT-5.3-Codex around 56% precision and 18% recall; GLM-5.1 around 23% precision and 42% recall. Gemini and GLM can both land near 20% Pass@3 while Gemini’s Ask-F1 is about 43% and GLM’s about 30%.

The leaderboard table itself moves. On the fetch date it already showed later names, including Claude Fable 5.1 near 61.50 plus or minus 6.47 and Opus 5 near 57 on the displayed metric. Those rows are a snapshot. Quote the narrative’s Opus 4.6 24% figure as the page’s published takeaway, and treat the table as “rankings change; the gap between full information and having to ask is the stable story.” Links from the page go to the paper, the data, and the code. This is one leaderboard, not a collection of articles.

## Key facts

- 300 tasks: 150 SWE (SWE-Bench Pro), 150 SQL (BIRD). 200 public, 100 private.
- 1,131 blockers. Average about 3.77 per task.
- Necessity filter: without the tool, pass at or below 5%. Sufficiency: with answers up front, at least 85% for some model.
- Judge: frozen Llama-3.3-70B-Instruct. Outcomes: resolves a blocker, or irrelevant.
- Metrics: Ask-F1 (precision and recall of questions) and Pass@3.
- Narrative takeaway: Opus 4.6 about 24% combined Pass@3 when it must ask, versus about 75–91% with full information. Peak combined Ask-F1 about 44%.
- Live table on 2026-09-23 already listed newer models with higher displayed scores. Do not freeze those rows into a claim.

## How it works

Each task hides blockers in the environment. The model may call `ask_human`. The judge decides whether each question was necessary. Too many questions hurt precision. Missing a blocker hurts recall and usually the solve rate. A separate condition hands every answer in advance to show the task is solvable. The product of those conditions is a model that can code or write SQL when told the facts, and still fails when it must notice that it does not have them.

## Implications for ai2ui.uk / ui121

The benchmark is the market argument for a gateway that makes asking cheap and structured. Models under-ask, especially on code. A UI that only appears when the model happens to call `ask_human` will be idle on the cases HiL-Bench says matter most, unless the harness forces the tool to exist and the product makes the question specific. Marketing numbers to use, attributed to Scale’s narrative not to a screenshot of the table: single-digit to mid-twenties pass rates when the model must decide to ask, versus the seventies to nineties with the facts supplied. ai2ui.uk does not raise Ask-F1 by itself. It is the place the necessary question lands so a person can answer it once, in a form, instead of in a chat scroll. Point readers to the paper for method and to the leaderboard URL for whatever the table says today.
