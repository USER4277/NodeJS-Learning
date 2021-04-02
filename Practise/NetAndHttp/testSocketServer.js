var net = require('net');
var server = net.createServer();

server.on('connection', function(socket){
    console.log('One Client connects / IP: ' + socket.remoteAddress );
    //监听Socket的data数据来获取客户端发送的消息，并且使用socket.wite
    socket.on('data', function(data){
        console.log(data.toString());
    });

    socket.write('Hello Client');

});

server.listen(3000, '127.0.0.1', function(){
    console.log('Listener start to work..');
})



