exports.p2p = function(socket,data,users){
    var from  = data.from;
    var to    = data.to;
    var message = data.message;

    //找到要发送给某个人的Socket地址对象
    var receiverSocket = users[to];
    if(!receiverSocket){
        var send = {
            protocal    :   'p2p',
            code        :   2001,
            message     :   'target user not exists'
        };
        socket.write(new Buffer(JSON.stringify(send)));
    }else{
        var send = {
            protocal    :   'p2p',
            code        :   2000,
            from        :   data.from,
            message     :   message
        };

        receiverSocket.write(new Buffer(JSON.stringify(send)));
    }

}
//在上述代码中，首先判断消息接收的人是否存在，如果发送提示消息，
//如果存在发送当前发送人的用户名和消息信息，第23行和第31行的code是为了让客户端区分用户名目标用户是否存在。