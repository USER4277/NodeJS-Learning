var http = require('http');

//create a http server
var server = http.createServer();

//listen request event
//request is a readableStream used to client's request package data
//response is a writeStream used to send message to socket of client or send response package
server.on('request', function(request, response){
    //get url
    var url = request.url;

    if(url === '/'){
        response.end('hello index');
    }else if((url === '/login')){
        response.end('hello login');
    }else if((url === '/register')){
        response.end('hello register');
    }else{
        response.end('404 Not Found');
    }
    response.end();
});

server.listen(3000, function(){
    console.log('start to listen port 3000');
})