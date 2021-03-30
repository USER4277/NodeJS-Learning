//fs.stat(path, callback);
var fs = require('fs');

fs.stat('C:/Users/I540371/Desktop/Cloud/Node/Practise/txt/1.txt', function(err, stats){
    if(err){
        console.log('fialed to get file info');
    };

    console.log( stats.isFile() );
    console.log(stats); 
});

