var net = require('net');
var conf = require('./config');

var broadcast = require('./broadcast.js');
var p2p =  require('./p2p.js');
var signup =  require('./signup.js');
const { config } = require('process');
var server = net.createServer();
var users = [];

server.on('connection', function(socket){
    socket.on('data', function(data){
        data = JSON.parse(data);

        switch(data.protocal){
            case 'signup':
                signup.signup(socket,data,users);
                break;
            case 'p2p':
                p2p.p2p(data,users);
                break;
            case 'signup':
                broadcast.broadcast(data,users);
                break;
            default:
                break;
        }
    });

    socket.on('error',function(){
        console.log('有客户端异常退出');
    });
});

server.listen(conf.port, conf.host, function(){
    console.log('Listener starts to work...');
})

/*
定义users，用于存放注册的用户的Socket，第14行首先使用JSON.parse（）将从客户端接收的JSON字符串转换为JSON对象，
第16～31行使用switch语句判断data.protocal的消息类型，根据消息类型调用相应模块的业务处理
*/












