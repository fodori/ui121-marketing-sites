# Hygraph blog (index)

- Source: https://www.hygraph.com/blog
- Fetched: 2026-09-23
- Status: ok

## Summary

The URL is a blog index, not a single essay. It presents Hygraph as a GraphQL headless CMS and organises posts into news, developer tutorials, architectures, content engineering, and digital experience. The live front of the index (mid–late 2026) is dominated by AI agents inside the CMS, an MCP connector aimed at Claude, and arguments that the bottleneck is the content model rather than the CMS brand.

Checked pagination (`?page=2` and a `/blog/page/2` redirect) returned the same article set as the first view. There was no second page of distinct posts to harvest. Article notes from this listing are in `archive/extra/`, capped at 25. Partner-network announcements and German-language duplicates on the same index were left outside that cap.

## Key facts

- Index categories visible: Hygraph news, developer tutorials, architectures, content engineering, digital experience.
- Leading English posts include AI Agents v2 (May 2026), the Claude MCP connector (15 Sep 2026), a publishing-workflow essay (26 Aug 2026), an APAC content-modelling partnership (29 Jul 2026), AI localisation (23 Jul 2026), and several architecture explainers dated 12 Jun 2026 on the index.
- Hygraph’s product claim, repeated across the index blurbs: structured content delivered by GraphQL, with federation across sources and an editorial UI that agents can also drive.

## How it works

The index itself does not document the API. From the posts it promotes, the product shape is: model content as a graph, edit it in Hygraph, query it from any frontend, and optionally let agents read and write through MCP under human review. See the extra notes for mechanisms.

## Implications for uiaas.uk / ui121

Hygraph is the content-as-a-service neighbour. Its 2026 message (agents that draft, humans that approve, a schema that is the product) is the editorial version of server-driven UI. ui121 should sound like that, applied to interfaces: the model is the service, the client only renders, and an agent may propose a screen that a person accepts.
