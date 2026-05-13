const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.MCP_PORT || 3000);
const manifestPath = path.join(__dirname, 'mcp.json');

const server = http.createServer((req, res) => {
  if (req.url === '/mcp.json' || req.url === '/manifest') {
    const manifest = fs.readFileSync(manifestPath, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(manifest);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(port, () => {
  console.log(`MCP placeholder server running at http://localhost:${port}`);
  console.log(`Manifest available at http://localhost:${port}/mcp.json`);
});
