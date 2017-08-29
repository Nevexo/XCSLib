/* 
XCSLib By Nevexo
A JavaScript library for natively controlling XCSOURCE Lighting controllers.
With support from Will Wilson (https://willwilson.space)
*/
//http://nevx.me/itunes.azzeh

exports.connected = false;
var net = require('net');
var events = require('events');
//var eventEmitter = new events.EventEmitter();

var client = new net.Socket();


var led = function(controller, port) {
    var self = this;
    this.connect = function() {
        client.connect(port, controller, function() {
            client.write('Hello server.')
            exports.connected = true;
            self.emit('connected')
            client.on('data', function(data) {
                console.log('[XCS] Data: ' + data)
                self.emit('data', data.toString())
            });
            
            client.on('close', function() {
                self.emit('close')
            });
            
        })
    }
}
led.prototype = new events.EventEmitter;
exports.led = led;

