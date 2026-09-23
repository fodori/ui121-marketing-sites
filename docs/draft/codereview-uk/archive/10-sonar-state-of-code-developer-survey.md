# Sonar — 2026 State of Code Developer Survey

- Source: https://www.sonarsource.com/state-of-code-developer-survey-report.pdf
- Fetched: 2026-09-23
- Status: ok

PDF text was retrieved and paraphrased. The binary is not stored in this repo. Sonar publishes the report; figures below are survey self-report, not a controlled experiment. No permissive licence was stated on the extract.

## Summary

Sonar’s 2026 State of Code developer survey (fieldwork October 2025, n=1,149 professional developers worldwide, all of whom had used AI at work in the past year) argues that the surge in generated code has not produced the productivity leap the hype promised. It has produced a verification bottleneck. Sonar’s framing context is that it analyses on the order of 750 billion lines of code a day; this report is the people side of that, after earlier reports on reliability, security, maintainability, and how leading models write.

Daily use is normal: 72% of developers who have tried AI coding tools use them every day. They say 42% of code they commit is AI-generated or significantly assisted, up from about 6% in 2023, and they expect that share to rise by more than half by 2027 (elsewhere in the same narrative, toward about 65%). They report an average personal productivity boost of about 35%. 82% agree AI helps them code faster, 71% say it helps with complex problems, and 54% say they are more satisfied at work because of it.

Trust does not follow. 96% do not fully trust that AI-generated code is functionally correct (only about 4% completely agree that they trust it). 95% spend at least some effort reviewing, testing, and correcting AI output, and 59% rate that effort moderate or substantial. 38% say reviewing AI-generated code takes more effort than reviewing a colleague’s code; 27% say it takes less. Only 48% completely agree that they always check AI-assisted code before committing. 61% agree that AI often produces code that looks correct but is not reliable, and the same share agree it takes a lot of prompting and fixing to get good code.

AI is rated more effective at new artefacts than at living systems. Extremely or very effective: documentation 74% (adoption 74%), explaining existing code 66% (adoption 78%), vibe-coding a new project 62% (adoption 48%), generating tests 59% (adoption 75%), research 59%, translation 58%, assisting new code 55% (adoption 90%). Weaker: code review 47% effective despite 55% adoption, debugging 44%, refactoring 43%, adding behaviour to existing code 42% despite 76% adoption. The tool is a strong explainer and prototyper and a weaker maintainer.

## Key facts

- Sample: 1,149; 18+; full-time or self-employed technology roles, mostly software engineering; at least one language; AI used in the past year. Fieldwork October 2025.
- 72% daily use among those who tried the tools; 42% of committed code AI-assisted now; ~6% in 2023; expected rise of more than half by 2027.
- Productivity feeling +35% on average; 82% faster; 71% better on complex problems; 54% more satisfied.
- Trust gap: 96% do not fully trust functional correctness.
- Verification: 95% spend some effort; 59% moderate or substantial; 38% say AI code is harder to review than human code; 27% say easier.
- Behaviour gap: only 48% always check before commit.
- “Looks correct but isn’t reliable”: 61% agree. Effort to get good code: 61% agree.
- Code review as a use case: 47% rate it extremely/very effective, below docs, explanation, tests, and new-code assistance.
- Report outline: how people really use AI; trust; top tools; agents; new toil; security; technical debt; experience gap; enterprise versus small business; SonarQube as a verification layer; demographics.

## How it works

The survey asks what share of committed code is AI-assisted, how effective each use case feels, and how much people agree with trust and effort statements. The mechanism Sonar wants the reader to see is a loop that does not close: generation is cheap and daily, verification is common but incomplete, and code that compiles and looks idiomatic hides semantic bugs. Their product chapter positions static analysis with stricter profiles on AI-written code as the systematic check humans are skipping. Later chapters (security, debt, seniority, company size) extend that story; the verification pages are the part that matters for a review business.

## Implications for codereview.uk / ui121

Lead with 38% and 59%. Almost two in five developers already find AI diffs harder to review, and a majority call the cleanup moderate or heavy, while fewer than half always verify before commit. That is a service brief: a named person reviews the change in an IDE-like ui121 task because the author will not reliably do it, and because “looks correct” is the failure mode. Do not sell AI code review as the product — respondents rate review as one of the weaker AI use cases (47%). Sell human verification of code a model drafted. Pair it with a scanner story (Sonar’s own punch line) so the human is not re-doing formatting. The 42% → ~65% trajectory is the volume argument for a queue that can take overflow review without hiring.
