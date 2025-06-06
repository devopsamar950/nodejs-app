const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js App via Jenkins 🚀');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
