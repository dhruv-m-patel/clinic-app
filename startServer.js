const http = require('http');

function createServer() {
  http.createServer(function (req, res) {
    res.end('Hello World!\n');
  }).listen(3000);
}

createServer();
