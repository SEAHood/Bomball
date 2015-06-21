var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Express setup for routes and common folders
app.use(express.static(__dirname + '/bin/js'));
app.use(express.static(__dirname + '/bin/img'));
app.use(express.static(__dirname + '/bin/audio'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/bin/index.html');
});

app.get('/disconnect', function(req, res){
	res.sendFile(__dirname + '/bin/dc.html');
});


function logMessage(type, content) {
		var dt = new Date();
	var d = new Date;
    var dFormatted = [
						d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
						d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1,
						d.getFullYear()
					].join('/') 
					+ ' ' +
					[
						d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
						d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
						d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
					].join(':');
				   
	console.log("[" + dFormatted + "][" + type + "]: " + content);
}

//Listen for connection on IO
io.on('connection', function(socket){
    var address = socket.request.connection.remoteAddress;
	logMessage('INFO', 'Connection established');

	socket.on('disconnect', function() {
		logMessage('INFO', 'Connection lost');
	});

});


//Init server
http.listen(3000, function(){
	console.log('listening on *:3000');
});