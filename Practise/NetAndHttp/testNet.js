var net = require('net');

var server = net.createServer( );

server.on('connection', function(){
    console.log('some one connects successfully');
});

server.on('listening', function(){
    console.log('Start listening..., waiting connection');
});

server.on('close', function(){
    console.log('connection ends');
});

//start server and listen port 3000
//使用server.listen（）函数启动服务器，开启监听，如果开启监听成功了，触发listening事件，第5步使用server.on监听listening事件，并提示“服务器启动成功...”，
//需要注意的是，第18行3000为端口号，监听127.0.0.1表示只能被本机所访问。如果想被别的机器访问，要监听本机的网络地址，例如局域网中的IP地址。
server.listen(3000, '127.0.0.1');