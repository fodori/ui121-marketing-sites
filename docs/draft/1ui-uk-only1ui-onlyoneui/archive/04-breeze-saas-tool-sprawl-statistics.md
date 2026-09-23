# Breeze — SaaS tool sprawl statistics you need to know (2026)

- **Source:** https://www.breeze.pm/articles/saas-tool-sprawl-statistics
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Lucas’s July 2026 Breeze roundup (about eight minutes, last updated July 2026) collects sprawl figures for people deciding how many tools a company actually needs. The framing is small-team practical: a chat app, a docs app, a tracker, and a spreadsheet are coordination overhead that one board could hold. Breeze sells that board, and it inserts one internal stat (32% of tasks carry a written comment, across roughly two million tasks). The rest is secondary citation of Zylo, Okta, Productiv, BetterCloud, Flexera, and Gartner.

The reconciled picture is that counts disagree by method and still land in the hundreds. Zylo’s average is about 275 apps, from about 152 at small companies to about 660 at enterprises of 10,000 or more. Productiv is cited around 342; BetterCloud around 106; Okta, counting single-sign-on apps only, sees the average cross 101 and larger organisations around 187. Idle licenses are put at 53%, about $21 million wasted a year at the average company, with waste up more than 14% year over year. Separate research in the piece says 15% of applications are entirely unused and 51% are underused. Average spend is about $49 million a year, or about $4,830 per employee, the first rise in three years (up 9.3%), with AI-native tool spend up more than 75% in a year.

Ownership is the mechanism: lines of business own roughly 70% of SaaS spend and about half of apps; IT controls about 26% of spend. Complete visibility fell to 43% from 47%. BetterCloud is cited for consolidation falling from 14% to 5% year over year, while other sources say consolidation works when it is deliberate (53% consolidated redundant apps in 2024, up from 40%).

Section outline: app count and size bands; growth versus flat SSO counts; unused licenses and shelfware; spend; who buys; visibility; whether consolidation is winning; Breeze’s “comment on the task” aside.

## Key facts

- About 275 SaaS apps on average (Zylo); about 152 small companies; about 660 at 10,000+ employees.
- 53% of licenses idle; about $21 million wasted per year at the average company.
- About $49 million average annual SaaS spend; about $4,830 per employee.
- Lines of business own about 70% of spend; IT about 26%.
- AI-native tool spending up more than 75% in one year.
- Full-stack visibility 43%, down from 47%; 66.5% of IT leaders hit unexpected consumption or AI charges.
- App-consolidation rate cited via BetterCloud: 14% → 5% year over year.
- 15% of apps entirely unused; 51% underutilised (as summarised in the roundup).

## How it works

The article is a Q&A of secondary stats, each with a “what this means” gloss. Methodology is the hidden variable: SSO-connected apps (Okta, BetterCloud-style portfolios) count less than license-level discovery (Zylo, Productiv). The operational claim is that sprawl is a coordination failure, not an IT failure, because most spend is outside the team that would consolidate it. Breeze’s own evidence is narrow: if discussion lives on the task, you do not need a separate chat for that thread. That is consolidation at the work-item layer.

## Implications for the one-UI domains / ui121

Use this page as the corroboration layer, not the primary source, and say the counts depend on what is measured. The stable marketing line is “hundreds of apps, most of the money outside IT, more than half the licenses idle, AI spend jumping.” For only1ui.com and onlyoneui.com, Breeze’s small-team moral — keep the work and the conversation in one place — is the consumer version of ui121’s enterprise claim. ui121 generalises it: the task is the unit (a page, a form, a chart), rendered on one canvas, so the comment, the approval, and the chart do not each require another product UI.
