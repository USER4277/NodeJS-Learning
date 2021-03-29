var fs = require('fs');


// appendFile(file,data,option,callback);
console.log('before executed');
fs.appendFile('C:/Users/I540371/Desktop/Cloud/Node/Practise/txt/2.txt', '   appended txt', function(err){
    console.log('callback executed....');
    if(err){
        console.log('error ......');
    }else{
        console.log('success......');
    }
});
console.log('do other things......');
