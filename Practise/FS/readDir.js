var fs = require('fs');

// read dir
fs.readdir("C:/Users/I540371/Desktop/Cloud/Node/Practise/txt/", function(err, dir){
    if(err){
        console.log('fail to read dir')
    }else{
        dir.forEach( function(err,file){
            console.log(file.toString());
        });
    }
});