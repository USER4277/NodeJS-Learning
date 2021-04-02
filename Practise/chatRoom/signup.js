exports.signup = function(socket,data,users){
    //处理用户注册请求
    var username = data.username;
    //如果用户不存在，则将用户和他的socket地址保存
    if(!users[username]){
        users[username] = socket;
        var send = {
            protocal    :   'signup',
            code        :   1000,
            username    :   username,
            message     :   'Success to regist'
        };

        socket.write(JSON.stringify(send));
    }else{
        var send = {
            protocal    :   'signup',
            code        :   1001,
            message     :   'username has been ocuppied, please rename your username'
        };
        socket.write(JSON.stringify(send));
    }
}
/*在上述代码中，通过判断users中是否存在用户名，对用户注册做出处理，第17行和25行的code用于让客户端区分是否注册成功，最后将消息发送给客户端
*/