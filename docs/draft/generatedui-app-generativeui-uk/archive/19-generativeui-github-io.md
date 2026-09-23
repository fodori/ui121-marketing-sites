# Generative UI project page — Google Research

- Source: https://generativeui.github.io/
- Fetched: 2026-09-23
- Status: ok

## Summary

This is the project page for the paper “Generative UI: LLMs are Effective UI Generators,” by Leviathan, Valevski, Kalman, Lumen, Segalis, Molad, Pasternak, Natchu, Nygaard, Venkatachary, Manyika, and Matias. The abstract says models usually render content in a static shell, often a markdown wall of text. Generative UI here means the model produces the interface as well as the content. The claim is that, with the right prompt and tools, a modern LLM can reliably produce a custom UI for almost any prompt. Ignoring generation speed, human raters overwhelmingly prefer those results to standard markdown. Versus human-expert sites, the generated results are worse overall but at least comparable in 50% of cases. The ability is described as emergent: newer models improve sharply. The page releases PAGEN, expert-crafted sites for evaluation, plus the system’s own outputs for later comparison.

The method restates the blog: a tool server (image generation, search), careful Gemini instructions (goal, planning, examples), and post-processors for failures the prompt cannot fix. The result is a fully generated web page rendered as-is in the browser.

The results section says 100 prompts were sampled from LMArena. Each result went to two human raters in pairwise comparisons across expert sites, the top Google result, raw text, markdown, and generative UI. Generative UI’s ELO on that study is given as 1736.2, above the non-expert formats and below human experts. A second chart says newer Gemini models win more often and make drastically fewer errors. The bibtex entry points at arXiv:2604.09577, year 2025 in the citation block.

Education is called out as a category where a custom interactive page helps. The page is an example gallery plus the abstract, not a protocol spec.

## Key facts

- Paper title: Generative UI: LLMs are Effective UI Generators. arXiv:2604.09577.
- Comparable to expert sites in 50% of cases; still worse than experts overall.
- Study: 100 LMArena prompts, two raters per result. Generative UI ELO 1736.2.
- Output form: a full web page, rendered as authored.
- Dataset: PAGEN, plus the system’s outputs.

## How it works

Tools, a long instruction, and post-processing wrap a coding-capable model. The browser shows the page the model wrote. There is no component catalog and no separation between structure and a host design system. Preference numbers exclude latency, which the companion blog says can exceed a minute.

## Implications for generatedui / ui121

The 50% and ELO figures are the strongest public evidence that people want a custom interface instead of markdown. They are not evidence that the interface should be free-form HTML. ui121 can use the preference result as demand, and the page-as-code method as the thing it refuses: no executable markup, no minute-long compile, no style invented per prompt. A block catalog will not match an expert microsite on novelty; it will match on brand, accessibility, and repeatability, which this paper does not optimise for. Keep the 50% claim attributed and qualified (“ignoring speed,” “worse than experts overall”).
