# Hygraph on PDF publishing workflows

- Source: https://www.hygraph.com/blog/ditch-pdfs-for-an-advanced-publishing-workflow
- Fetched: 2026-09-23
- Status: ok

## Summary

Jing’s essay (updated 26 August 2026) says research and intelligence publishers still ship by exporting a PDF and uploading it, a habit from the print era. That freezes layout, blocks reuse, hides the text from search, and splits analysts from editors. The recommended replacement is structured content in a headless CMS, delivered by API to sites, apps, and newsletters.

A State of CMS figure on the page says 44% of respondents already have a headless CMS. A TechInsights architect is quoted comparing their current CMS to an FTP site that knows nothing about the files.

## Key facts

- Failure modes of PDFs: no repurposing into posts, decks, or social; weak metadata; in-file search only; manual re-export on every correction; poor mobile reading; no engagement tracking once the file is downloaded.
- CMS checklist in the post: editing UI, content models, roles, versioning and approval, CDN, and high-traffic tolerance.
- Prescription: modular blocks, APIs for multichannel delivery, and a shared operating habit across teams.

> “We know nothing about the PDFs. Our current CMS is almost like an FTP site where life just goes on.” — Hussein El Aggan, TechInsights

## How it works

Reports become fields and relations instead of a single file. Images and charts are separate assets. An editor updates a block once and every channel that queries it can change. Approval and versions replace “upload a new PDF and hope the old download dies.”

## Implications for uiaas.uk / ui121

A fixed PDF is the content version of a hardcoded screen. ui121’s analogue is a task UI baked into an app binary. The publishing lesson transfers: model the pieces, deliver them through an API, and stop treating a release artefact as the experience.
