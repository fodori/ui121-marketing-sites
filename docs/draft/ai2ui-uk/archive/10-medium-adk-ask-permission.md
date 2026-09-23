# Medium: teaching agents to ask permission (Google ADK)

- **Source:** https://medium.com/@arpantomar2018/human-in-the-loop-teaching-ai-agents-to-ask-for-permission-7bc9e1c25ac9
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Arpan’s 8 February 2026 walkthrough shows human-in-the-loop as a pause inside Google’s Agent Development Kit, using a meme-generation pipeline as the concrete case. The scary examples are familiar: a trading system about to sell on a misread headline, a dosage that conflicts with an unrecorded allergy, an HR system sending rejections before anyone reads them. The historical anchor is Knight Capital in August 2012, when untested trading software executed a flood of orders before people could stop it. The author argues a checkpoint in the first minute of anomalous trading could have limited the damage. The page states the loss as $440 million. Treat that figure as the author’s attribution to a well-known incident, not as a new measurement.

The mechanism is a long-running function tool. Ordinary tools return immediately. This one can freeze the pipeline, wait for an external confirmation, and run again when the confirmation arrives. In the sample, four agents gather Reddit context, specify a meme, call an image API, then hit an approval gateway. The first call requests confirmation and returns pending. Application code collects yes or no, plus feedback if no. The second call sees that confirmation and either finishes or starts another iteration. A cap of five iterations is recommended so feedback loops cannot run forever.

State is the part builders underestimate. A session holds history, a scratchpad, and identity. An iteration log stores each meme spec, URL, and the human’s comment so the next pass can use the correction. The author also sketches storing events in Neon Postgres so the pause is inspectable after the process moves on.

## Key facts

- Published 8 February 2026 by Arpan. Stack: Google Agent Development Kit.
- Pipeline agents: data gatherer, meme creator, meme generator, approval gateway.
- Two-phase tool: first call requests confirmation and returns pending; resume call reads the human response.
- Suggested iteration limit: 5.
- Detection hook: events expose long-running tool ids so the app knows the pipeline has paused.
- Confirmation payload in the sample includes the image URL, topic, and template so the person is not approving a blank prompt.

## How it works

Events are the log of user messages, model text, function calls, function results, state changes, and control signals. When the approval tool’s id is marked long-running, the runner stops. The host asks the person, then resumes the same session with a function response. If rejected, structured prompts (“different template?”, “text changes?”) beat a vague “why not?”. History of prior attempts is injected back into agent state so retries are not amnesiac.

## Implications for ai2ui.uk / ui121

This is the DIY pause developers keep rebuilding: pending, resume, feedback, iteration cap, durable event log. ai2ui.uk can replace the terminal `input()` with a hosted question that carries the artifact (the meme, the diff, the order) and returns a structured decision plus comments. The Knight Capital story is a cautionary opener for irreversible actions, used sparingly and attributed. The product lesson is partnership: the agent does the prep, the person decides, and the next iteration can see why the last answer was no.
