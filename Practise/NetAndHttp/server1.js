var net = require('net');
var server = net.createServer();

var users = [];//该数组用来封装所有客户端的socket
server.on('connection', function(socket){
   users.push(socket);

   socket.on('data', function(data){
        data.toString().trim();
        users.forEach(function(client){
            if(client !== socket){
                //因为由于同一计算机上的不同客户端端口号不同，可以通过端口号来区分不同客户端
                client.write(client.remotePort + ':' + data);
            }
        });
   });

//当有客户端异常退出，就会触发该函数
//如果不见听客户端异常退出就会导致服务器崩溃
   socket.on('error', function(){
       console.log('有客户端异常退出');
   });
});



server.listen(3000, '127.0.0.1', function(){
    console.log('Listener start to work..');
})
/*
在上述代码中，创建数组users用于存放每个客户端的socket，然在第10行监听data时间，
并且获取终端输入的数据，然后遍历users数组，将该数组中的每一个client（socket对象）与输入数据的客户端socket进行对比。
如果不是输入数据的客户端，就将获取到的终端输入信息发送出去，这样做的目的就是输入信息的客户端收不到自己的消息。
为了区分是哪个客户端输入的数据，所以在数据前面加上了该客户端的端口号。
*/

