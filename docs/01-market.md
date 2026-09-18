# Market snapshot

## Typical alternatives vs our wedge

| Need                        | Typical tools                                     | Gap                                                              |
| --------------------------- | ------------------------------------------------- | ---------------------------------------------------------------- |
| Human approval in workflows | Temporal signals, Camunda user tasks, Slack/email | Orchestrators pause; **you still build the human UI**            |
| Agent handoff               | Chat, HumanRail, HITL.store, Sanctify             | Marketplace/chat; weak **controlled, reusable UI channel**       |
| Forms                       | Typeform, Tally, Fillout, Retool JSON Schema Form | Hosted forms or internal apps; not a **live inbox for machines** |
| Generated UI                | v0, CopilotKit, MCP Apps generative UI            | Free-form React/HTML; **unsafe for production humans**           |
| MCP                         | Typeform MCP, custom servers                      | Form CRUD or tools; not **send UI → human → structured result**  |
| Gig / meatspace             | RentAHuman                                        | Marketplace for physical tasks; not a programmable UI layer      |

## Positioning lines

- **Vs chatbots:** structured UI, not a conversation dump
- **Vs BPM:** the missing human surface, not another orchestrator
- **Vs generated UI:** catalog + validation, not unbounded HTML
- **Vs RentAHuman:** interface layer (and later a real-time marketplace), not a gig board

## Messaging anchors

1. Machines stall on judgment / missing data / irreversible actions
2. Humans finish the step through a **controlled** surface
3. Answers return as structured data so automation continues
4. AI-native: agents and backends can request the UI on demand
