# Storybook MCP Playground

A minimal React + Vite playground for validating Storybook's MCP server.

## Setup

```bash
npm install
npm run storybook
```

Storybook runs on `http://localhost:6006`. The MCP endpoint is:

```text
http://localhost:6006/mcp
```

## Connect an MCP client

With Storybook running:

```bash
npx mcp-add --type http --url "http://localhost:6006/mcp" --scope project
```

Choose a descriptive server name such as `storybook-mcp-playground`.

## Validation checklist

Ask the connected agent to use the Storybook MCP server and verify:

- the MCP endpoint exposes its available tools;
- component documentation can be listed;
- documentation for `Button` includes its `variant` prop;
- the `Primary` and `Secondary` stories can be discovered and previewed;
- story tests can be invoked through the MCP test toolset.

The addon is configured with the `dev`, `docs`, and `test` toolsets enabled.

## Useful URLs

- Storybook: `http://localhost:6006`
- MCP endpoint: `http://localhost:6006/mcp`

> Storybook MCP is currently a preview feature. Its API and available tools may change between Storybook releases.
