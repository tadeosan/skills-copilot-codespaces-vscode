// Create web server
// Create a web server that will send back the comments array as JSON
// when a GET request is made to /comments.

var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true);
  if (urlObj.pathname === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);