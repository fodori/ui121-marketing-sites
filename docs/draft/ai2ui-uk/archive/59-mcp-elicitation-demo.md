# mcp-use elicitation demo

- **Source:** https://github.com/mcp-use/mcp-elicitation-demo
- **Fetched:** 2026-09-23
- **Status:** ok

## Summary

The mcp-use organisation publishes a small demo server whose README is under the MIT license. The license covers the repository’s code and README terms; this note still paraphrases rather than copying the file. The server exposes three tools. `form-demo` exercises ordinary form fields: a string with length bounds, an email, a URI, a username constrained by a pattern, a number from 0 to 150, an integer from 1 to 100 with a default of 1, a boolean, and an untitled enum. `enum-demo` covers titled one-of, untitled multi-select, and titled any-of shapes associated with the enum improvements in SEP-1330. `url-demo` is the out-of-band path for OAuth, API keys, and payments.

A hosted endpoint is listed at `https://df04urycxwzh.deploy.mcp-use.com/mcp`. Locally, the README says to run the dev script and open the MCP path on port 3000. The implementation uses the mcp-use framework. The GitHub page itself was thin on the fetch (on the order of one star); the useful content is the README’s tool list, not the social proof.

The demo is a catalogue of what a compliant client should render. It is also a map of what a marketing site can promise: if your client can complete these three tools, it can complete elicitation, and if it cannot render the URL tool, secrets have nowhere safe to go.

## Key facts

- Repository: mcp-use/mcp-elicitation-demo. License stated: MIT.
- Tools: `form-demo` (primitives and constraints), `enum-demo` (titled and multi enums, SEP-1330), `url-demo` (OAuth, API keys, payments).
- Hosted MCP URL published in the README: `https://df04urycxwzh.deploy.mcp-use.com/mcp`.
- Local: development server, MCP at localhost port 3000.
- Built with mcp-use.

## How it works

A client connects to the hosted or local server and calls a tool. Form and enum tools return an elicitation schema; the client draws inputs and posts the accept payload. The URL tool directs the user to complete a sensitive step outside the client and reports the outcome without placing the secret in the tool arguments that the model will see. Constraints (length, pattern, range, default) are part of the schema so the client can validate before submit. Decline and cancel are the other completions, as in the spec.

## Implications for ai2ui.uk / ui121

This repository is the acceptance test for a human page. ai2ui.uk can claim compatibility by completing `url-demo` and by rendering the form cases the IDE will not. MIT means the demo may be run and described; it does not mean the README should be pasted into the marketing site. A docs page can list the three tools as a checklist: primitives, rich enums, and out-of-band secrets. The hosted URL may move; link the GitHub repo as the stable citation and re-check the deploy host before publishing it in a customer guide.
