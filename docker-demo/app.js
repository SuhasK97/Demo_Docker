const http = require('http');

// Use an environment variable for the port, defaulting to 3000
const port = process.env.PORT || 3000;
// '0.0.0.0' is essential for Docker to accept external connections
const hostname = '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Hello from Node.js Docker Container 🚀\n');
});

server.listen(port, hostname, () => {
  // We log localhost here because that's where you'll access it from your browser
  console.log(`Server running at http://localhost:${port}/`);
});
