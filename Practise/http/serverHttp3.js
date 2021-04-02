var http = require('http');
var fs = require('fs');
var path = require('path');
//create a http server
var server = http.createServer();

//listen request event
//request is a readableStream used to client's request package data
//response is a writeStream used to send message to socket of client or send response package
server.on('request', function(request, response){
    //get url
    var url = request.url;

    if(url === '/'){
        //read statistc content
        fs.readFile(path.join(__dirname, 'static/index.html'), 'utf-8', function(err, data){
            if(err){
                throw   err;
            }
            console.log('index visited');
            response.end(data); 
        });

    }else if((url === '/login')){
        //read statistc content
        fs.readFile(path.join(__dirname, 'static/login.html'), 'utf-8', function(err, data){
            if(err){
                throw   err;
            }
            console.log('login visited');
            response.end(data); 
        });
    }else if((url === '/register')){
        //read statistc content
        fs.readFile(path.join(__dirname, 'static/register.html'), 'utf-8', function(err, data){
            if(err){
                throw   err;
            }
            console.log('register visited');
            response.end(data); 
        });
    }else if((url === '/css/main.css')){
        //如果有图片，css文件，浏览器会重新发送请求获取静态资源
        fs.readFile(path.join(__dirname, 'css/main.css'), 'utf-8', function(err, data){
            if(err){
                throw   err;
            }
            console.log('main.css visited');
            response.end(data); 
        });
    }else if((url === '/imgs/1.jpeg')){
        //如果有图片，css文件，浏览器会重新发送请求获取静态资源
        fs.readFile(path.join(__dirname, '/static/imgs/1.jpeg'),  function(err, data){
            if(err){
                throw   err;
            }
            console.log('1.png visited');
            response.end(data); 
        });
    }else if((url === '/imgs/404.png')){
        //如果有图片，css文件，浏览器会重新发送请求获取静态资源
        fs.readFile(path.join(__dirname, 'static/imgs/404.png'),  function(err, data){
            if(err){
                throw   err;
            }
            console.log('404.png visited');
            response.end(data); 
        });
    }else{
        //read statistc content
        fs.readFile(path.join(__dirname, 'static/404.html'), 'utf-8', function(err, data){
            if(err){
                throw   err;
            }
            console.log('404 visited');
            response.end(data); 
        });
        
    }
});

server.listen(3000, function(){
    console.log('start to listen port 3000');
})