// buf.concat(list[, totalLenght])    list用于合并的Buf-fer对象数组列表，totalLength用于指定合并后Buffer对象的总长度。

var buf1 = new Buffer.alloc(5,"ABCDE");
var buf2 = new Buffer.alloc(5,"12345");

var buf3 = Buffer.concat( [buf1,buf2] ) ;

console.log(buf3.toString("utf-8"));