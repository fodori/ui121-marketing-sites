# Google Research — Generative UI

- Source: https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/
- Fetched: 2026-09-23
- Status: ok

## Summary

On 18 November 2025, Google Research (Yaniv Leviathan, Dani Valevski, Vishnu Natchu, and Yossi Matias) described a generative UI system that does not only write an answer. For any prompt — a single word or a long brief — the model designs and codes an interactive experience: a page, a tool, a simulation, a gallery, or a small application. They contrast this with the usual pattern, where a model drops text into a chat or markdown box that was designed in advance.

The work is already in products, not only a paper. In the Gemini app it appears as two experiments, dynamic view and visual layout. Dynamic view uses Gemini’s coding ability to build a custom interactive response per prompt. The same topic changes shape with the audience: explaining the microbiome to a five-year-old is a different interface from explaining it to an adult, and a social gallery is a different interface from a trip plan. In Google Search, AI Mode (Gemini 3, “Thinking,” for Google AI Pro and Ultra subscribers in the United States at launch) can build interactive tools and simulations for a question, such as the stages of RNA transcription.

The paper they cite, “Generative UI: LLMs are Effective UI Generators,” introduces PAGEN, a set of expert-made websites for comparison. Ignoring generation speed, human raters preferred those expert sites first, then Google’s generative UI, with a clear gap above raw text, standard markdown, and the top ordinary search result. Quality tracks the underlying model. They are open about limits: a result can take a minute or more, and outputs can still be inaccurate.

## Key facts

- Date: 18 November 2025. Authors include Google Fellow Yaniv Leviathan and VP Yossi Matias.
- Product surfaces: Gemini app experiments (dynamic view, visual layout) and Search AI Mode for AI Pro and Ultra in the U.S.
- Preference order in their eval (speed ignored): human-expert sites, then generative UI, then text, markdown, and the top search result.
- System additions on Gemini 3 Pro: tool access (image generation, web search), detailed system instructions, and post-processors for common failures.
- Style can be locked for a product (their “Wizard Green” example) or left to the prompt.
- Open problems: latency of a minute or more, occasional inaccuracies, and a wish to use more services, more context, and human feedback.

## How it works

A server gives the model tools. The model plans against a long instruction set that covers the goal, formatting, tool manuals, and known failure modes. It emits an interface. Post-processing cleans common mistakes before the user sees it. Tools can improve the model’s own result or be sent straight to the browser. Without a style lock, the system picks a look, or the user steers it in the prompt. The strategic claim is that people should get a dynamic interface fitted to the need instead of picking an app from a catalogue.

## Implications for ui1to1.com / ui121

Google has made “the interface is generated for this prompt” a mainstream product story. ui1to1.com can say the same shift without copying the demo: one person, one interface, assembled for the job in front of them. The difference worth stating is control. Google’s path is open-ended generated HTML, CSS, and JavaScript, which is why they need post-processors and why a minute of waiting is still normal. ui121’s JSONUI is a declarative description rendered by a known client. That is closer to a reliable one-to-one canvas for business work — approvals, forms, live data — than to a one-off simulation.

Their own next step (“adapt to additional context and human feedback”) is the human-in-the-loop gap. A generated view that cannot pause for a person is a demo. A canvas where the person confirms, edits, and continues is the product. Marketing can cite the November 2025 rollout and the preference result, then point at latency and inaccuracy as the reason a constrained, server-described UI is the practical one-to-one interface.
