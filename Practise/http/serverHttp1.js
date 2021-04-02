var http = require('http');

//create a http server
var server = http.createServer();

//listen request event
//request is a readableStream used to client's request package data
//response is a writeStream used to send message to socket of client or send response package
server.on('request', function(request, response){
    response.write('Hello there\n');

    //server can send message more than one time before ending response
    response.write('Hello again\n');

    response.end();
});

server.listen(3000, function(){
    console.log('start to listen port 3000');
})