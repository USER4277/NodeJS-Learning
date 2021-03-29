var fs = require('fs'); // load fs module

// fs.writeFileSync(file, data[, options]);
// fs.writeFileSync(file, data[, options], callback);
//file:  file name or decsription
// data:  data (String or Buff)
//option: object(encoding,mode,flag), defualt--utf-8  .mode-0o666, flag = 'w'
//callback:  call back function, only one parameter err, back when error

console.log('Before writing file...');

fs.writeFile('C:/Users/I540371/Desktop/Cloud/Node/Practise/txt/s/2.txt','hello world',function(error){
    console.log("callback executed....");
    if(error){
        console.log('Error occured when writing file');
    }else{
        console.log('success to wirte file');
    }
});

console.log('do otehr things....');
