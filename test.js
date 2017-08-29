var xcs = require('./index.js') //Load lib
var led = new xcs.led('127.0.0.1', '1337');

led.on('connected', function() {
    console.log('Connected to lamp controller.')
})
led.on('data', function(data) {
    console.log(data)
})
led.on('close', function() {
    console.log('Server closed the connection.')
})
led.connect()
