var net = require('net');

//调用createConnection后就可以得到一个与服务器进行通信的socket对象
//该对象包含当前客户端与服务器通信的IP和端口
var client = net.createConnection( 
    {
        port : 3000
    }
);

client.on('connect', function(){
    console.log('connected to server');
    client.write('Hello Server');
});

client.on('data', function(data){
    console.log(data.toString());
});