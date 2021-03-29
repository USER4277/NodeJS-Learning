//load module
//首先使用require（）函数加载模块，require（）的参数使用文件路径加文件名称，注意这里由于是相对路径，需要加“./”。
//加载完毕后将返回一个module.exports对象，在该对象中包含了所加载模块对外开放的变量、函数、对象等
var myModule = require('./info.js');
console.log(myModule);
console.log(myModule.name);

myModule.sayHello();
var mo2 = require('./Info2.js');
console.log(mo2);
