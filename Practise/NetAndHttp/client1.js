var net = require('net');

//调用createConnection后就可以得到一个与服务器进行通信的socket对象
//该对象包含当前客户端与服务器通信的IP和端口
var client = net.createConnection( 
    {
        port : 3000
    }
);

client.on('connect', function(){
    //获取终端输入的数据并且发送到服务器端
    process.stdin.on('data', function(data){
        data.toString().trim();
        client.write(data);
    });
});

client.on('data', function(data){
    console.log(data.toString());
});