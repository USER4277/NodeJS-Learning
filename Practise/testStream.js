var total = '';
var fs = require('fs');

var readableStream = fs.createReadStream('test1.txt');
readableStream.setEncoding('utf-8');

readableStream.on('data', function( temp ){
    total += temp;
    console.log('/' + temp.toString());
});

readableStream.on('end', function(){
    console.log(total);
});

readableStream.on('error', function(err){
    console.log(err.stack);
});

//在上述代码中，由于创建可读流的createReadStream（）函数由fs模块提供，
//所以需要首先加载fs模块，创建完成后readableStream这个流是一个静止的状态，在第11行绑定了data事件，
//并附加了一个回调函数的时候，流就开始流动。之后数据就会通过chunk参数流向（传递）给回调函数。chunk参数代表触发data事件后返回的数据块，
//每返回一次都在第12行追加到total中，第14～16行用于处理流事件end，在读取结束后输出数据total，第17～19行用来处理流的错误事件error