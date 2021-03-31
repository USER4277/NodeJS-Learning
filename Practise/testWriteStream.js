var total = '';
var fs = require('fs');
var readableStream = fs.createReadStream('test1.txt');
var writeStream = fs.createWriteStream('test2.txt');

readableStream.on('data', function(temp) {
    total += temp;
});

readableStream.on('end', function(){
    writeStream.write(total);
    writeStream.end( function(){
        console.log('end writing');
    });
});

writeStream.on('error', function(err){
    console.log(err.stack);
});
