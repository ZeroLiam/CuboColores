#!/usr/bin/env node

var http = require('http');
var WebSocketServer = require('websocket').server;
var WebSocket = require('ws');
var port = 3001;
var host = 'localhost';
var ws = new WebSocket('ws://' + host + ':' + port, 'ping-protocol');


var server = http.createServer(function(request, response) {

  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': request.length
  });
  response.write(request);
  response.end();

});


server.listen(port, function() {
  console.log((new Date()) + ' Server is listening on port ' + port);
});


wsServer = new WebSocketServer({
  httpServer: server,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false
});


wsServer.on('request', function(request) {
  var connection = request.accept('ping-protocol', request.origin);
  console.log((new Date()) + ' Connection accepted.');

  connection.on('message', function(message) {
    console.log('Received message: ' + message.utf8Data);

    // condition:
    if (message.utf8Data === "hello") {
      connection.sendUTF("ni hao! It's you! :D");
    } else {
      connection.sendUTF(message.utf8Data);
    }

    console.log('Transmitted message back to origin');
  });

  connection.on('close', function(reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});
