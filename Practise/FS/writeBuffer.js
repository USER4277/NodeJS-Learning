var buf = new Buffer.allocUnsafe(5);

console.log(buf.lenght);

buf.write('a');

console.log(buf.length);    

buf.write('b',1,1,"utf-8");

console.log(buf);