# MCP — Authorization

- Source: https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/authorization
- Fetched: 2026-09-23
- Status: ok
- Parent source: 33

## Summary

The authorisation tutorial says MCP uses OAuth 2.1 so clients and servers can trust each other without standardising on one identity vendor. Authorisation is optional and strongly recommended when a server touches user data or administrative actions. The design follows common OAuth practice rather than a private login scheme. The fetched page is a long implementation walkthrough (Keycloak as the example identity provider, server setup, tests, and pitfalls), on the order of 50,000 characters. This note does not copy that setup.

The intent is to stop an agent from calling tools with ambient power. Tokens are obtained and presented on the transport. The server checks them before it runs sensitive operations. Pitfalls are called out as their own section, which is a signal that mis-issued tokens and confused clients are the real-world failure, not the absence of a spec.

## Key facts

- Mechanism named: OAuth 2.1.
- Optional, recommended for user data and admin actions.
- Identity system is pluggable; the tutorial demonstrates Keycloak.
- Protects both data access and operations, not only reads.
- Document type: implementation tutorial plus pitfalls.

## How it works

The MCP client redirects or otherwise runs an OAuth flow against an authorisation server, receives a token, and sends it on streamable HTTP. The MCP server validates the token and scopes before tools or resources run. Local stdio servers are a different trust story (the process is already on the machine). Remote servers are where this tutorial applies. The application user grants access; the model does not invent credentials.

## Implications for ui1to1.com / ui121

One-to-one UI that can see a person’s work is exactly the case this page says must be authorised. ui121 should treat MCP access as delegated, scoped, and revocable, and keep the human’s approval on the canvas separate from the token that lets an agent connect. JSONUI does not replace OAuth. It is what the person interacts with after the connection exists: the task, not the credential. The “optional but recommended” line is a buying objection to answer up front on a UK privacy-minded page.
