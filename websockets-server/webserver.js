#!/usr/bin/env node
//https://en.wikipedia.org/wiki/Env

var http = require('http');
var port = 3001;


var webServer = function(request, response) {
  // Status Code Definitions: https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World, out there\n...And out here bc why not');
};

var server = http.createServer(webServer);

server.listen(port, function() {
  console.log((new Date()) + ' Server is listening on port ' + port);
});
