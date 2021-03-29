console.log("Hello Node");

//load http module
var http = require("http");

// create http server
http.createServer(
    // end response 
    function(req, res){
        res.end("Hello node");
    }

).listen(3000,'127.0.0.1');//listen 12.0.0.1 port: 3000