# Generative UI — Google Research blog

- Source: https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/
- Fetched: 2026-09-23
- Status: ok

## Summary

On 18 November 2025, Yaniv Leviathan, Dani Valevski, Vishnu Natchu, and Yossi Matias described a research system that generates an entire interactive experience for a prompt: pages, games, tools, and simulations, produced on the fly rather than chosen from a fixed screen. It was rolling out as experiments in the Gemini app (dynamic view, and a related visual layout experiment) and in Google Search AI Mode. AI Mode access, at the time of the post, was for Google AI Pro and Ultra subscribers in the US, via the Thinking model option.

This is the free-form pole. The model designs and codes a custom response with Gemini’s agentic coding, using Gemini 3. The same topic (the microbiome, a trip plan, a Van Gogh gallery, RNA polymerase) is supposed to get a different interface for a different audience or task. The authors contrast this with the usual markdown wall of text and with static, predefined shells.

Method, in three parts. A server exposes tools such as image generation and web search, either to improve the model’s result or to send assets straight to the browser. A long system instruction covers the goal, planning, examples, formatting, tool manuals, and known failure modes. Post-processors clean up issues the prompt did not prevent. Products that need a consistent look can force a style (the post shows a “Wizard Green” set). Otherwise the system picks a style, or the user asks for one in the prompt.

Evaluation: they built PAGEN, a set of human-expert websites, to compare systems. Raters preferred expert-made sites most, then this generative UI implementation, with a gap before raw text, standard markdown, and the top ordinary Search result. The preference study ignored generation speed. The post says the interfaces are strongly preferred over standard LLM output when speed is set aside, and that quality tracks the underlying model. Limitations stated plainly: generation can take a minute or more, and outputs are sometimes inaccurate. The project page and paper are linked from the post (generativeui.github.io). The bibtex on the project page cites an arXiv preprint, arXiv:2604.09577, titled “Generative UI: LLMs are Effective UI Generators.”

## Key facts

- Published 18 November 2025. Google Research, Search, and Gemini teams.
- Products named: Gemini app dynamic view and visual layout; Search AI Mode for AI Pro and Ultra in the US.
- Model named: Gemini 3 / Gemini 3 Pro on the project page.
- Eval set: PAGEN (expert sites). Preference ignores latency.
- Latency caveat: sometimes a minute or longer. Accuracy caveat: occasional errors.
- Paper: “Generative UI: LLMs are Effective UI Generators.”

## How it works

The model writes a full web page that the browser renders as-is, with tools and post-processing around it. There is no host catalog of approved components in this design. Safety and brand, where they exist, come from instructions, style configuration, and cleanup passes, not from an allowlist of widgets. That is why the post belongs on the opposite side of A2UI even though both use the words generative UI.

Section outline: what the capability is; product rollout; how the pipeline works; preference results; open problems (speed, accuracy, more tools, feedback).

## Implications for generatedui / ui121

Do not let the shared vocabulary collapse the two ideas. Google Research’s generative UI is generated HTML/JS. ui121’s generative UI is data rendered by pre-built blocks. The research post is useful as the contrast: people love custom interfaces when speed is ignored, and production still has a minute-long wait and factual slips. A catalog renderer paints in the time it takes to stream JSON and does not execute model code. generatedui.app can acknowledge the magic of dynamic view and then say the product choice is the fast, on-brand, allowlisted version of the same impulse. The “comparable to experts in a large share of cases” claim lives on the project page (source 19) and should be quoted from there, not inflated.
