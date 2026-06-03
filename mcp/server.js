#!/usr/bin/env node

/**
 * Playwright MCP Server
 * Starts the Playwright MCP server for Claude Desktop integration
 * 
 * Usage: node mcp/server.js
 * Or: npm run mcp:start
 */

const { spawn } = require('child_process');
const path = require('path');

// Use npx to run playwright-mcp CLI (works cross-platform)
const server = spawn('npx', ['playwright-mcp@latest'], {
  stdio: 'inherit',
  cwd: path.join(__dirname, '..'),
  shell: process.platform === 'win32'
});

server.on('error', (error) => {
  console.error('Failed to start Playwright MCP server:', error);
  process.exit(1);
});

server.on('close', (code) => {
  console.log(`Playwright MCP server exited with code ${code}`);
  process.exit(code || 0);
});

process.on('SIGINT', () => {
  console.log('\nShutting down Playwright MCP server...');
  server.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\nTerminating Playwright MCP server...');
  server.kill('SIGTERM');
});
