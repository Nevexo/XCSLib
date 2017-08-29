/*
An emulator for emulating XCSOURCE lighting controllers
*/
var net = require('net'); //NodeJS default package.

var server = net.createServer(function(socket) {
	socket.write('XCSSOURCE EMULATOR V1.0');
    socket.pipe(socket);
    socket.on('data', function(data) {console.log('DATA: ' + data)})
});
server.listen(1337, '127.0.0.1', function() {console.log('Server connected.')});
