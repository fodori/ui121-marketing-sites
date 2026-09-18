import { parseUseCases } from '@ui121-marketing/content-schema'

export const useCases = parseUseCases([
  {
    id: 'field-missing-data',
    title: 'Missing field from someone in the field',
    audience: 'Field ops & AI agents',
    problem:
      'An agent is mid-flow but needs a serial number, photo, or confirmation from a technician who may be offline.',
    howWeSolve:
      'Push a focused surface to their device. They fill it on site — even without signal — and answers sync when connectivity returns.',
    whyBetter:
      'Beats SMS threads and brittle mobile apps: one controlled UI, structured payload, offline-safe by design.',
    mediaHint: 'device-glow',
  },
  {
    id: 'irreversible-gate',
    title: 'Irreversible action needs a human gate',
    audience: 'Risk & compliance',
    problem: 'The model wants to transfer funds, delete data, or ship product. Autopilot is not enough.',
    howWeSolve:
      'Pause the automation and present a clear approval surface with context, constraints, and an explicit decision.',
    whyBetter: 'Safer than chat confirmations or custom admin panels rebuilt for every risk tier.',
    mediaHint: 'gate',
  },
  {
    id: 'automation-exception',
    title: 'Automation exception / fallback',
    audience: 'Ops & orchestration',
    problem: 'A workflow fails a rule or confidence check. Someone must choose the path — now.',
    howWeSolve: 'Route an exception UI with the facts that matter. Capture the decision as structured data and resume.',
    whyBetter: 'No Slack archaeology. No “build a ticket form.” The human step is part of the machine loop.',
    mediaHint: 'fork',
  },
  {
    id: 'group-claim',
    title: 'First-to-answer group claim',
    audience: 'On-call & support',
    problem: 'Any one of several experts can unblock the agent. Waiting for a named assignee wastes time.',
    howWeSolve: 'Broadcast a claimable surface. First valid completion wins; the rest see it settle.',
    whyBetter: 'Faster than shared inboxes and less noisy than pinging everyone in chat.',
    mediaHint: 'pulse',
  },
  {
    id: 'inspection-evidence',
    title: 'Inspection with photo & signature evidence',
    audience: 'Quality & field QA',
    problem: 'You need more than a checkbox — images, marks on a diagram, a signature under time pressure.',
    howWeSolve:
      'Deliver a rich but bounded form: capture, annotate, sign, submit. Evidence returns as structured fields.',
    whyBetter: 'Purpose-built surfaces beat generic form builders that cannot keep up with agent-driven timing.',
    mediaHint: 'evidence',
  },
  {
    id: 'structured-kyc',
    title: 'Structured KYC / onboarding',
    audience: 'Fintech & growth',
    problem: 'Chat dumps and PDF packets create incomplete, unverifiable onboarding data.',
    howWeSolve: 'Guide humans through validated steps. Agents request only what is missing, when it is missing.',
    whyBetter: 'Structured answers, not conversation logs. Auditable without rebuilding a bank app.',
    mediaHint: 'steps',
  },
  {
    id: 'incident-confirm',
    title: 'Incident confirmation under time pressure',
    audience: 'SRE & security',
    problem: 'An alert fires. A human must confirm scope, severity, or customer impact before automation escalates.',
    howWeSolve: 'Surface a high-signal confirmation UI with timers and context. Decision flows back instantly.',
    whyBetter: 'Clearer than paging into a free-text channel; faster than opening a heavy ITSM form.',
    mediaHint: 'alert',
  },
  {
    id: 'expert-review',
    title: 'Expert review of AI output',
    audience: 'Knowledge work & AI ops',
    problem: 'The model drafted content, a plan, or a classification. An expert must accept, edit, or reject — safely.',
    howWeSolve:
      'Open a review surface with the proposal, constraints, and structured outcomes. No unbounded “generated app.”',
    whyBetter: 'Catalog-backed UI keeps humans in control while staying AI-native for the requesting agent.',
    mediaHint: 'review',
  },
])
