var net = require('net');
var config = require('./config');

var client = net.createConnection(
    {
        port : config.port,
        host : config.host,
    }
);


var username;
client.on('connect', function(){
    console.log('Please input your username: ');

    process.stdin.on('data', function(data){
        data.toString().trim();
        //当用户注册成功后，下面的数据格式就不能再使用了
        //判断一下是否已经有用户名了，如果有了，则表示用户要发送聊天数据
        //如果没有，表示用户要发送注册数据
        if(!username){
            var send = {
                protocal : "signup",
                username : data
            }

            client.write(JSON.stringify(send));
            return;
        }

        //判断是广播消息还是点对点消息
        // name : 内容
        var regex = /(.{1,18}):(.+)/;
        var matches = regex.exec(data);
        if(matches){
            var from  = username;
            var to = matches[1];
            var message = matches[2];
            var send = {
                protocal : 'p2p',
                from     :  username,
                to       :  to,
                message  :  message
            }

            client.write(JSON.stringify(send));
        }else{
            var send = {
                protocal    :   'broadcast',
                from        :   username,
                message     :   data
            }
            client.write(JSON.stringify(send));
        }

    });
});

/*
首先完成了客户端向服务器发送消息的部分，第11行的username属性初始化为underfind，用户注册成功后才会为该属性赋值，
所以第19～26如果该属性值不存在就将终端输入当作用户名发送给服务器；如果用户注册成功，
再次输入的数据，就会在第29行，通过正则表达式进行匹配，如果是点对点消息就向服务器发送点对点类型的JSON数据，
否则发送广播类型的JSON数据。JSON.stringify（）用于可以将对象、数组转换成字符串。
*/

client.on('data', function(data){
    data = JSON.parse(data);
    switch(data.protocal){
        case 'signup':
            var code = data.code;
            switch(code){
                case 1000:
                        username = data.username;
                        console.log(data.message);
                        break;
                case 1001:
                        console.log(data.message);
                        break;
            }
            break;
        case 'p2p':
            var code = data.code;
            if(code = 2000){
                var from    = data.from;
                var message = data.message;
                message = from + ':  ' + message;
                console.log(message);

            }else if(code = 2001){
                console.log(data.message);
            }
            break;
        case 'broadcast':
            console.log(data.message);
            break;
        default:
            break;
    }
});
/*在上述代码中，通过监听客户端的data事件，获取客户端返回的数据，
同样还是首先判断消息类型，然后根据不同的消息类型处理数据。
这里需要注意几点：第7行，当code为1000时表示用户注册成功，这时需要将用户名赋值给username，
后面输入的消息就会识别为聊天数据。到这里终端聊天室的代码全部完成，测试方式参见案例描述
*/