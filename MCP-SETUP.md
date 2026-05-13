# MCP Setup for Anova Project

This project now includes a local MCP setup with a manifest and a placeholder server.

## Files created
- `mcp/mcp.json` — MCP manifest for the project
- `mcp/server.js` — local server serving the MCP manifest
- `.vscode/settings.json` — VS Code MCP connection settings
- `package.json` updated with `mcp:start`

## How to run MCP locally
1. Open the project root in the terminal.
2. Start the MCP server:
   ```bash
   npm run mcp:start
   ```
3. Confirm it is running at:
   ```text
   http://localhost:3000/mcp.json
   ```

## How to connect from VS Code
1. Install the MCP or Copilot / MCP client extension in VS Code if available.
2. In VS Code, open Command Palette.
3. Search for `MCP: Connect` or the MCP client connect command.
4. Enter the server URL:
   ```text
   http://localhost:3000
   ```
5. The workspace should connect using the folder configured in `.vscode/settings.json`.

## What this setup provides
- A local MCP manifest describing the workspace
- A server endpoint at `/mcp.json`
- VS Code settings to point MCP client to `http://localhost:3000`

## Notes
- This is a placeholder MCP setup. If your MCP client requires a specific protocol, you may need to extend `mcp/server.js` with the full MCP API.
- The current server returns the manifest JSON and can be used as the starting point for MCP integration.
