Full research notes: [archive/INDEX.md](archive/INDEX.md).

# SOURCES.md — PulsarForm research (2026-09-22)

All URLs verified live via web search/extract on 2026-09-22. Note: **pulsarform.com itself was unreachable** — scraping engines (playwright + fetch) failed and search indexes return no results for the domain. Treat the concept as greenfield.

## Core form builders

1. **https://www.typeform.com/** — Homepage. "Form Builder with AI Automation." Conversational one-question-at-a-time forms claim 2x completion vs traditional; 48M responses/month; claims 3.5x more data with AI forms. Confirms conversational UX as the incumbent baseline.
2. **https://www.typeform.com/platform-overview/** — Typeform positions itself as a platform: interactive forms + CRM features + integrations + AI agents; "collect up to 3.5x more" data. Shows incumbents moving toward automation layers (Growth Flow, Research Flow) — but not a live inbox over submissions.
3. **https://www.typeform.com/blog/interactive-form-boost-conversions** — Typeform's own framing: interactive forms present questions one-by-one "mimicking a conversation" to boost conversion. Evidence for conversational-form demand.
4. **https://www.typeform.com/research-flow** (via platform/blog pages) — AI-moderated interviews at survey scale: AI builds the study, runs 1000s of AI-moderated text/video/voice interviews, synthesizes findings in hours. Cutting-edge proof that forms → live AI dialogue is where the market is heading.
5. **https://www.jotform.com/** — Homepage. 40M+ users; conditional logic, payments, reports, workflows; 150+ integrations. Breadth-first incumbent; data push-out model.
6. **https://www.jotform.com/form-notifications/** — Real-time alerts (email, WhatsApp, SMS, mobile) the moment a response arrives. The incumbent's version of "real-time" = notifications only.
7. **https://www.jotform.com/products/workflows/features/jotform-inbox/** — Jotform Inbox: threaded, real-time view of each workflow run — "see who did what, when, and take action directly." **Closest existing analog to the live-machine-inbox concept — but a workflow side-feature, not the product.**
8. **https://www.jotform.com/features/inbox/** — Manage submissions like an inbox: filters, tags, comments, reply/forward emails. Validates inbox-shaped form-ops demand.
9. **https://www.jotform.com/enterprise/features/workflows/real-time-flow-status/** — Full visibility into each workflow stage from submission onward. Enterprise-grade liveness, again as sub-feature.
10. **https://www.jotform.com/answers/36377881-displaying-form-responses-in-real-time-on-website** — Support thread: users asking how to display responses in real time; answer points to API/webhooks. Evidence of unmet real-time demand at the edges.
11. **https://tally.so/** — Tally homepage: Notion-style doc-form builder, unlimited free forms/submissions, conditional logic, calculator, hidden fields, partial submissions, EU-hosted/GDPR. The lightweight-disruptor benchmark.
12. **https://tally.so/help/webhooks** — Webhooks: send events for new submissions to HTTP endpoints. Tally's real-time story = developer push-out.
13. **https://tally.so/help/compare** — Tally's own comparison guides vs Typeform/Jotform/Paperform; useful positioning map of the category.

## Form backends / real-time plumbing

14. **https://formspree.io/** — Form backend, API, and email service for HTML/JS forms. The "forms as API endpoint" model PulsarForm extends: endpoint → live machine inbox.
15. **https://www.staticforms.dev/blog/free-html-form-processing** — 2026 roundup of free HTML form-processing options; the basic pattern remains POST-to-hosted-endpoint. Documents the static, one-way status quo.
16. **https://www.staticforms.dev/blog/form-abandonment-rate** — Cited benchmark: **67.9% overall web-form abandonment**, B2C lead forms up to 72.3%. Core problem stat for the "forms are a dead end" narrative.
17. **https://gnosari.com/blog/form-abandonment-rate** — Average abandonment ~67%; 15 statistics by device/industry/type plus fixes. Corroborates #16.
18. **https://formstory.io/learn/form-abandonment-statistics/** — ~30% abandon over privacy/security concerns; abandonment reasons by industry. Adds the trust dimension.
19. **https://usebasin.com/blog/jotform-vs-typeform** — Jotform vs Typeform comparison: integration focus (payments/data vs marketing) and compliance differences. Market landscape.
20. **https://www.jotform.com/blog/formspree-alternative/** — Survey of form-backend alternatives; notes "real-time dashboard built from submission" as a differentiator and webhook endpoint inclusion. Direct precedent language for submission-driven live surfaces.
21. **https://www.typeform.com/connect** — Typeform integrations page: sync to Salesforce "in real time," automate record creation. Incumbent real-time = integration sync.

## Conversational / AI-form trend evidence

22. **https://www.typeform.com/blog/how-to-use-conversational-marketing-to-drive-revenue-and-grow-business** — Conversational marketing framing: guide respondents down different pathways by answer. Forms as dialogue, not documents.
23. **https://auraforms.app/changelog** — Smaller player shipping "filling out a form just became a two-way conversation" — form asks questions and responds. Direct two-way-form precedent in the wild.
24. **https://consultations.ai/alternatives/typeform-alternative** — AI intake positioning vs Typeform: "a real two-way conversation that qualifies." Shows AI-agent intake emerging as a form-builder alternative category.
25. **https://www.feathery.io/blog/online-form-statistics** — 150 form statistics: usage, abandonment, conversion; ~12% more abandonment without trust badges. Quantified context for the market.
26. **https://business.adobe.com/blog/translate-website-metrics-into-ai-design-prompts** — Adobe: form abandonment spikes as a signal to act on; frames forms within real-time web analytics. Adjacent support for live-form-data framing.
27. **https://splitforms.com/docs** — Developer docs: /api/submit endpoint, webhook pattern, spam filtering. Another endpoint-style backend confirming the plumbing commoditized.
28. **https://www.reddit.com/r/webdev/comments/1tc84od/how_do_you_handle_contact_form_submissions/** — Practitioner thread: DIY form→webhook→n8n pipelines. Grassroots demand for wiring forms into systems by hand — the gap PulsarForm productizes.
