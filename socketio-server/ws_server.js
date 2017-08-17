//configure the connection for the server
const config = {
	//for socketio
	host: '192.168.178.38',//local ip, remember to change on testing
	port: '3001',
	protocol: 'echo-protocol',
	//for Firmata
	serialPort: '/dev/cu.usbserial-AL02AF1A'
}

var app = require('express')();
var http = require('http').Server(app);
var sockio = require('socket.io')(http);
var Serialport = require("serialport");
var Board = require("firmata");
var board = new Board(config.serialPort, {samplingInterval: 300});
var _ = require('lodash');

//Make the object for the devices and properties
var devObj = {};
var dataObj = {};
var clientObj = [];

app.get('/', function(req, res){
  res.send('<h1>Setting up server</h1><h2>Setting up Arduino</h2>');
});

board.on('connection', function(){
	console.log("board connected");

	sockio.on('connection', function(socketclient){
	  console.log('a user connected:' + socketclient.id);
		board.on("ready", () => {
		  // Arduino is ready to communicate
			  console.log('a user connected:' + socketclient.id);
				board.digitalWrite(board.pins[board.analogPins[5]], HIGH);
		});

		/**
     * Analog read
     */
    board.analogRead(board.A0, function(val) {

        console.log(val);
    });

			socketclient.on("dummy", function(data){
				console.log("WE ARE DUMMY");
				console.log(data);
			});

	});
});


http.listen(config.port, function(){
  console.log('listening on *: ' + config.port);
});
