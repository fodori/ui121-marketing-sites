# ThoughtSpot: human-in-the-loop examples

- **Source:** https://www.thoughtspot.com/data-trends/artificial-intelligence/human-in-the-loop
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

Katie Flynn’s ThoughtSpot article treats human-in-the-loop as collaboration during both training and live decisions, aimed at business users who do not trust a black box. The cautionary story is Zillow’s home-buying programme, described as an $880 million misstep driven by bad data, blind spots, and unclear models. The promise is that people label data, correct errors, and set ethical limits so outputs stay fair and usable.

The mechanisms are mostly learning loops rather than agent tool approvals. Humans structure unlabeled data. Active learning asks people about the uncertain points. Reinforcement uses human-shaped rewards. Real-time correction stops an error before it compounds. Fresh data and bias checks keep the model from drifting. Ethical safeguards define what may be in training data. When a case is ambiguous, a person scores or validates the output.

Benefits claimed are transparency (stakeholders can see why a number appeared), fewer hallucinations and skewed audiences, and better performance on thin real-world cases, such as forecasting a niche product with little sales history by adding an analyst’s judgment. Industry sketches cover clinicians checking rare-disease predictions, fraud analysts coaching ThoughtSpot’s Spotter agent on flagged transactions, and technicians validating equipment-failure forecasts when the event was not in the training set.

The close is a product pitch: insights a non-technical user can understand, data teams who can correct definitions, and admins who control who may train or oversee the system.

## Key facts

- By Katie Flynn, Director of Product Marketing at ThoughtSpot. Listed as about a 7 minute read. “Last updated” had no date in the extract.
- Zillow figure used on the page: $880 million.
- Two feedback methods named: active learning on hard examples, and reinforcement from human-influenced rewards.
- Sectors: healthcare (rare disease and complex cases), finance (fraud alerts plus coaching), manufacturing (unexpected equipment failure).
- ThoughtSpot agent named in the finance example: Spotter.

## How it works

People are in the loop at labeling time, at review time, and at the moment an output is too ambiguous to ship. The article does not specify a pause/resume protocol, a schema for the human answer, or a durable workflow engine. Oversight is described as correction, annotation, and administrative control over who may change the model’s understanding of business terms.

## Implications for ai2ui.uk / ui121

This is the trust narrative for buyers who are not framework engineers: AI should not be a black box, and a human should be able to see the reasoning before a high-stakes use. ai2ui.uk can translate that into an agent setting. Show the proposed action and the evidence, let the person correct it, and keep that correction as structured feedback. Do not copy ThoughtSpot’s analytics positioning. The overlap is explainable review, not search-on-data. The Zillow line is usable only with attribution and without implying ai2ui.uk would have prevented it.
