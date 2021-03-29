//分别使用exports和module.exports向模块外开放变量和函数。
exports.name = 'itcast';
exports.text1 = 'text1\'s text';
module.exports.sayHello = function(){
    console.log('Hello');
};

console.log('File Path = ', __dirname);
console.log('File absolutly path = ', __filename);