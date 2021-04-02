
var net = require('net');
var server = net.createServer();
var connectionObject = 0;

server.on('connection', function( socket ){
    console.log('Client connects..');

    connectionObject ++;

    console.log( 'Client IP: ' + socket.remoteAddress );

    console.log('Current connection number:  ' + connectionObject);

    //send string to client
    socket.write("Welcome, the " + connectionObject + ' visiter');    
});

server.on('listening',  function(){
    console.log('Server starts and Listening strats');
});

server.listen(3000);