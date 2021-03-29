
var copyFile = require('./copyFile')

console.log('before coping');
copyFile('C:/Users/I540371/Desktop/Cloud/Node/Practise/txt/2.txt','C:/Users/I540371/Desktop/Cloud/Node/Practise/txt/3.txt', function(err){
    console.log('start to copy..')
    if(err){
        console.log('failed to copy file');
    }else{
        
        console.log('success to copy file');
    }
});