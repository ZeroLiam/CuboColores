var host = 'localhost';
var port = 3000;
var ws = new WebSocket('ws://' + host + ':' + port, 'ping-protocol');


ws.onopen = function(e) {
console.log('Connection to server opened');
console.log('yeah we ar in');
};


// transmit message:
function sendMessage() {
ws.send($('#message').val());
console.log('Send message to server: ' + $('#message').val());
}

// received message:
ws.onmessage = function(e) {
$( "#server-response" ).text('Received message from server: ' + e.data);
console.log('Received message from server: ' + e.data);
};
