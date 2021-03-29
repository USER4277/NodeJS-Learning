var fs = require('fs')

console.log('>>>    before reading');
fs.readFile('C:/Users/I540371/Desktop/Cloud/Node/Practise/txt/2.txt',function(err,data){
    console.log('callback executed');
    if(err){
        console.log('error occured');
    }else{
        console.log(data.toString());
    }
});

console.log('not waiting reading procedure...');