//fs.mkdir(path,[mode],callback);

//create dir
var fs = require('fs');

fs.mkdir("C:/Users/I540371/Desktop/Cloud/Node/Practise/txt/creat/", function(err){
    if(err){
        console.log('fail nto create dir');
    }else{
        console.log('success');
    }
});