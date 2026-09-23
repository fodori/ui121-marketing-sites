# Postman — What is JSON Schema?

- Title: What is JSON Schema?
- Source URL: https://blog.postman.com/what-is-json-schema/
- Fetched: 2026-09-23
- Status: ok

## Summary

Postman’s explainer treats JSON Schema as a declarative language for the shape of JSON: types, structure, and constraints, in a document that is itself JSON. The problem it sets up is that a JSON value is ambiguous. An example user object has an id, name, age, address, interests, and a timestamp, but nothing in the file says which fields are required, whether id is a UUID or a number, whether age has a minimum, or that a zip code was omitted on purpose. JSON has no comments, so it cannot document itself, and it has no standard validator.

The schema they build for that user sets `$schema` to the 2020-12 dialect, types id as a string with format UUID, age as a number with minimum 18, address as an object with its own required list (street, city, state, zip, country), interests as an array of strings limited to an enum, and createdAt as a date-time. Required at the root are id, name, and address. A 16-year-old would fail. That is the whole teaching point: the instance and the rules are separate files, both readable by people and by tools.

Use cases beyond checking one payload: API validation (OpenAPI and AsyncAPI embed JSON Schema for headers, bodies, and parameters); config-file validation; generating example data and mock servers from the schema; generating forms whose answers are checked against the same schema; and ETL, where data from several sources is mapped and checked so the output stays one shape. Benefits they list: a contract between producer and consumer, fewer bad records, governance and compliance, documentation via `description`, and quality. Postman’s product tie-in: Ajv in test and pre-request scripts, OpenAPI and AsyncAPI definitions, generating a collection from a schema, and keeping that collection aligned with the definition as the source of truth.

## Key facts

- Dialect in the example: JSON Schema draft 2020-12.
- Example constraints: UUID format, age minimum 18, enum of interests, date-time, nested required address fields.
- Embedded in OpenAPI and AsyncAPI, as the article states.
- Form generation is named as a use case: schema describes fields and validations; responses are validated against the same schema.
- Tooling mentioned: Ajv, Postman collections generated from an API definition.
- Official site pointed at from the article: json-schema.org (not re-fetched here).

## How it works

You publish a schema document. A validator walks an instance and reports violations (type, required, minimum, enum, format). Other tools read the same document to build mocks, forms, or tests. The schema does not execute the application. It defines what a legal document is. Descriptions on properties double as human documentation because JSON itself cannot comment.

## Implications for jsonapp.com / ui121

JSON Schema is the safety story for "AI writes the app." A model that emits ui121 JSON is trustworthy only if a schema rejects unknown components, bad types, and missing actions before render. Postman’s own list already includes dynamic forms as a JSON Schema use case, which is JSON Forms’ thesis and ui121’s daily job.

Marketing line: the app definition is JSON, and JSON Schema is the contract that lets humans review it and machines generate it. Portability in the spec-driven note (source 29) depends on this being a standard, not a vendor file format. Do not imply Postman is a JSON app builder; it is the validator and the API workflow around the schema.

> "JSON Schema is a declarative language that provides a standardized way to describe and validate JSON data."
