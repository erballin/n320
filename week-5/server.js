const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
  res.end("Hello, World!\n"); // Send the response body
});
const port = 3000; // You can choose any port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
