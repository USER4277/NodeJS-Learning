exports.broadcast = function(data,users){
    var from  = data.from;
    var message = data.message;
    
    message = from + ': ' + message;
    var send = {
        protocal    :   'broadcast',
        message     :   message
    };

    send = new Buffer.alloc(send.length, send);
    for(var username in users){
        var tmpSocket = users[username];
        tmpSocket.write(send);
    }
}
/*
在上述代码中，将用户名和消息进行拼接，然后从服务器传来users中获取当前用户的tmpSocket，使用tmpSocket将消息返回给客户端
*/