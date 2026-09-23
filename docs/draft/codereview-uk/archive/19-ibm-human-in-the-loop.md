# IBM — What is human-in-the-loop?

- Source: https://www.ibm.com/think/topics/human-in-the-loop
- Fetched: 2026-09-23
- Status: ok
- Cole Stryker, IBM Think. Canonical explainer, not a code-review product page. No permissive licence stated.

## Summary

IBM defines human-in-the-loop as a process where a person takes part in running, supervising, or deciding inside an automated system. For AI, that means a human is in the workflow so accuracy, safety, accountability, or ethics do not rest on the model alone. Models still fail on ambiguity, bias, and edge cases outside their training. The “loop” is the ongoing exchange: people correct the system, and the system is supposed to get better.

Benefits they emphasise: accuracy, because a person can fix a bad input or spot an anomaly a metric missed, and can add alerts and fail-safes before an autonomous decision lands; ethics and accountability, because responsibility is not only on the vendor when a person can override (their example is a hiring model that disadvantages a group); transparency, because an override with a reason is an audit trail and a partial answer to the black box. They cite EU AI Act Article 14: high-risk systems must be designed so natural persons can oversee them while they are in use, including the ability to intervene, override, and monitor, and those people must be competent, trained, and actually authorised to stop the system. The point of the article is to prevent or cut risks to health, safety, or fundamental rights.

Drawbacks are the ones a review service has to design around. Human annotation does not scale; experts in medicine or law are expensive; a tired or inconsistent labeller injects bias; and giving people access to sensitive examples creates a privacy risk even when they mean well.

Mechanisms: supervised labelling (spam or not, car or bus) as the classic training loop; reinforcement learning from human feedback, where people score outputs and a reward model steers the agent, suited to goals you cannot fully specify; active learning, where the model asks for help only on low-confidence cases so effort lands on the hard slice.

## Key facts

- HITL = human participation in operation, supervision, or decision of an automated system.
- Article 14 expectation: oversight that can intervene and override, by people who understand the system’s limits and have authority.
- Failure modes of the human layer: cost, fatigue, inconsistent labels, leakage of data they can see.
- Three embeddings: labels before training, preference feedback during alignment, queries only where confidence is low.
- High-stakes examples in the piece: hiring fairness, medical image labels (a wrong tumour mark is not a nit).

## How it works

Put a competent person where the model is unsure or the consequence is serious. Record why they overturned the output. Do not ask them to label everything if the volume will make them rubber-stamp; active learning is IBM’s version of “only the ambiguous cases.” The system improves when corrections flow back into data or policy, not when the human is a decorative approver.

## Implications for codereview.uk / ui121

Use IBM’s definition in positioning copy: a person with authority, in the loop, on the decision to accept a change — not a chatbot with a human “nearby.” Article 14 is the regulated-buyer citation for why a named reviewer must be able to stop the merge. The drawbacks are product requirements: route only high-consequence diffs (active learning’s idea), keep sessions short so fatigue does not become the bias, and do not dump the whole private repo into a reviewer’s unbounded workspace. ui121’s task is the oversight interface: the reviewer sees the diff in an IDE-like surface, records approve or override with a reason, and that record is the audit trail IBM says the black box lacks. Competence matters — market experienced reviewers, because the regulation’s word is that the human must understand the system.
