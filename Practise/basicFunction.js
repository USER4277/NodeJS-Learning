var name1 = "jesse",
    age1 = 33,
    address1 = "shanghai";

console.log(typeof  name1);
console.log(typeof age1);


/*JavaScript 能够以不同方式“显示”数据：
        使用 window.alert() 写入警告框
        使用 document.write() 写入 HTML 输出
        使用 innerHTML 写入 HTML 元素
        使用 console.log() 写入浏览器控制台*/

        function set_Html_Text(iv_id, iv_text){
            document.getElementById(iv_id).innerHTML = iv_text;
        }
        
        function show_warn_msg(iv_message){
            window.alert(iv_message);
        }

/*
关键词	        描述
break	        终止 switch 或循环。
continue	    跳出循环并在顶端开始。
debugger	    停止执行 JavaScript，并调用调试函数（如果可用）。
do ... while	执行语句块，并在条件为真时重复代码块。
for	            标记需被执行的语句块，只要条件为真。
function	    声明函数。
if ... else	    标记需被执行的语句块，根据某个条件。
return	        退出函数。
switch	        标记需被执行的语句块，根据不同的情况。
try ... catch	对语句块实现错误处理。
var	            声明变量。
*/


//++	递加
//--	递减

//JavaScript 数组   var cars = ["Porsche", "Volvo", "BMW"];
//JavaScript 对象   var person = {firstName:"Bill", lastName:"Gates", age:62, eyeColor:"blue"};
//您也可以通过设置值为 undefined 清空对象：
//Undefined 与 null 的值相等，但类型不相等：

/*
typeof {name:'Bill', age:62} // 返回 "object"
typeof [1,2,3,4]             // 返回 "object" (并非 "array"，参见下面的注释)
typeof null                  // 返回 "object"
typeof function myFunc(){}   // 返回 "function"
*/

function getAConstant(){
    return 888;
}

function getPersonObject(iv_name, iv_age){
    var person = {
        name:iv_name, 
        age:iv_age,
        //方法以函数定义被存储在属性中。
        laugh(){
            window.alert(this.name + "    :hahahhhahahahhahahah");
        }
    };
    return person;
}

function alertPersonName(){
    var person1 = getPersonObject("Kack", 23);
    return person1.name;
}

function laugh(){
    getPersonObject("LEA", 22).laugh();
}

//如果通过关键词 "new" 来声明 JavaScript 变量，则该变量会被创建为对象：
var x = new String();        // 把 x 声明为 String 对象
var y = new Number();        // 把 y 声明为 Number 对象
var z = new Boolean();       //	把 z 声明为 Boolean 对象

/*
JavaScript 事件
_______________________________________________________________________________________
下面是 HTML 事件的一些例子：

HTML 网页完成加载
HTML 输入字段被修改
HTML 按钮被点击
通常，当事件发生时，用户会希望做某件事。

JavaScript 允许您在事件被侦测到时执行代码。
_________________________________________________________________________________________
onchange	HTML 元素已被改变
onclick	    用户点击了 HTML 元素
onmouseover	用户把鼠标移动到 HTML 元素上
onmouseout	用户把鼠标移开 HTML 元素
onkeydown	用户按下键盘按键
onload	    浏览器已经完成页面加载
*/

//字符串
function showLengthOfString(iv_str){
    window.alert(iv_str.length);
};
//特殊字符

//  \'	'	单引号
//  \"	"	双引号
//  \\	\	反斜杠
/*
\b	退格键
\f	换页
\n	新行
\r	回车
\t	水平制表符
\v	垂直制表符
*/
function showSpecialChar(){
    var str1 = "This is \"23\"";
    console.log(str1);
};
/*
indexOf() 方法返回字符串中指定文本首次出现的索引（位置）
lastIndexOf() 方法返回指定文本在字符串中最后一次出现的索引：
两种方法都接受作为检索起始位置的第二个参数。
var pos = str.indexOf("China", 18);

search() 方法搜索特定值的字符串，并返回匹配的位置：

两种方法，indexOf() 与 search()，是相等的。这两种方法是不相等的。区别在于：
search() 方法无法设置第二个开始位置参数。
indexOf() 方法无法设置更强大的搜索值（正则表达式）


提取部分字符串
有三种提取部分字符串的方法：
slice(start, end)
substring(start, end)
substr(start, length)

slice() 提取字符串的某个部分并在新字符串中返回被提取的部分。
该方法设置两个参数：起始索引（开始位置），终止索引（结束位置）。
如果某个参数为负，则从字符串的结尾开始计数。
如果省略第二个参数，则该方法将裁剪字符串的剩余部分：
substring() 类似于 slice()。不同之处在于 substring() 无法接受负的索引。

substr() 类似于 slice()。不同之处在于第二个参数规定被提取部分的长度。

replace() 方法用另一个值替换在字符串中指定的值：replace() 方法不会改变调用它的字符串。它返回的是新字符串。默认地，replace() 只替换首个匹配：
如需执行大小写不敏感的替换，请使用正则表达式 /i（大小写不敏感）：var n = str.replace(/MICROSOFT/i, "W3School");

通过 toUpperCase() 把字符串转换为大写：
通过 toLowerCase() 把字符串转换为小写：
concat() 连接两个或多个字符串：concat() 方法可用于代替加运算符。下面两行是等效的：

trim() 方法删除字符串两端的空白符：

提取字符串字符
charAt(position)
charCodeAt(position) :  charCodeAt() 方法返回字符串中指定索引的字符 unicode 编码：
ECMAScript 5 (2009) 允许对字符串的属性访问 [ ]：

可以通过 split() 将字符串转换为数组：
*/



//JavaScript 数值始终是 64 位的浮点数: 此格式用 64 位存储数值，其中 0 到 51 存储数字（片段），52 到 62 存储指数，63 位存储符号：
//整数（不使用指数或科学计数法）会被精确到 15 位。小数的最大数是 17 位，但是浮点的算数并不总是 100% 精准：
var x = 0.2 + 0.1;         // x 将是 0.30000000000000004
//使用乘除法有助于解决上面的问题：
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x 将是 0.3

//NaN - 非数值
/*NaN 属于 JavaScript 保留词，指示某个数不是合法数。
尝试用一个非数字字符串进行除法会得到 NaN（Not a Number）：  NaN 是数，typeof NaN 返回 number：

Infinity （或 -Infinity）是 JavaScript 在计算数时超出最大可能数范围时返回的值。Infinity 是数：typeOf Infinity 返回 number。
*/

//十六进制:   JavaScript 会把前缀为 0x 的数值常量解释为十六进制。


//JavaScript 数值方法
//Number 方法帮助您处理数值。
//toString() 方法 ;  toString() 以字符串返回数值。
//toExponential() 方法:  toExponential() 返回字符串值，它包含已被四舍五入并使用指数计数法的数字。参数定义小数点后的字符数：
var x = 9.656;
x.toExponential(2);     // 返回 9.66e+0
x.toExponential(4);     // 返回 9.6560e+0
x.toExponential(6);     // 返回 9.656000e+0

//toFixed() 方法:   返回字符串值，它包含了指定位数小数的数字：
var x = 9.656;
x.toFixed(0);           // 返回 10
x.toFixed(2);           // 返回 9.66
x.toFixed(4);           // 返回 9.6560
x.toFixed(6);           // 返回 9.656000

//toPrecision() 返回字符串值，它包含了指定长度的数字：
var x = 9.656;
x.toPrecision();        // 返回 9.656
x.toPrecision(2);       // 返回 9.7
x.toPrecision(4);       // 返回 9.656
x.toPrecision(6);       // 返回 9.65600

//valueOf() 以数值返回数值：

//在 JavaScript 内部使用 valueOf() 方法可将 Number 对象转换为原始值
//所有 JavaScript 数据类型都有 valueOf() 和 toString() 方法。

//把变量转换为数值:  这三种 JavaScript 方法可用于将变量转换为数字：
//Number() 方法   返回数字，由其参数转换而来。
//parseInt() 方法   解析其参数并返回整数。
//parseFloat() 方法   解析其参数并返回浮点数。
x = true;
Number(x);        // 返回 1
x = false;     
Number(x);        // 返回 0
x = new Date();
Number(x);        // 返回 1404568027739   ;方法返回 1970 年 1 月 1 日至今的毫秒数。
x = "10"
Number(x);        // 返回 10
x = "10 20"
Number(x);        // 返回 NaN

//数值属性
/*
MAX_VALUE	返回 JavaScript 中可能的最大数。
MIN_VALUE	返回 JavaScript 中可能的最小数。
NEGATIVE_INFINITY	表示负的无穷大（溢出返回）。
NaN	表示非数字值（"Not-a-Number"）。
POSITIVE_INFINITY	表示无穷大（溢出返回）*/


//______________________________________数                  组________________________________________
//数组是一种特殊类型的对象。在 JavaScript 中对数组使用 typeof 运算符会返回 "object"。
//数组元素可以是对象:可以在数组保存对象。您可以在数组中保存函数。你甚至可以在数组中保存数组：
//遍历数组元素 :  遍历数组的最安全方法是使用 "for" 循环：
//您也可以使用 Array.foreach() 函数：  array.forEach(function(currentValue, index, arr), thisValue)

var array1 = [1,2,3,4,5,6,7,8];
var amoutTotal = new Number;
function showArray(value, index){

    text1 = value + ' '; 
    amoutTotal = amoutTotal + value;
    if(index == array1.length - 1){
        window.alert( text1 + amoutTotal );
    }
}



var totoalValue = new Number;
function calTotal(curValue){
    
    totoalValue = totoalValue + curValue;
}
function showTotal(){

    array1.forEach(calTotal)
    window.alert(totoalValue);

}
//向数组添加新元素的最佳方法是使用 push() 方法：也可以使用 length 属性向数组添加新元素：
//假如您使用命名索引，JavaScript 会把数组重定义为标准对象。之后，所有数组的方法和属性将产生非正确结果。
var person = [];
person["firstName"] = "Bill";
person["lastName"] = "Gates";
person["age"] = 62;
var x = person.length;         // person.length 将返回 0
var y = person[0];              // person[0] 将返回 undefined

/*数组和对象的区别
在 JavaScript 中，数组使用数字索引。
在 JavaScript 中，对象使用命名索引。
*/

//如何识别数组  Array.isArray(fruits);     // 返回 true
//假如对象由给定的构造器创建，则 instanceof 运算符返回 true：

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>JavaScript 数组方法
//toString() 把数组转换为数组值（逗号分隔）的字符串。
//join() 方法也可将所有数组元素结合为一个字符串。

var fruits = ["Banana", "Orange","Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * "); 
//Banana * Orange * Apple * Mango

//pop() 方法从数组中删除最后一个元素：方法返回“被弹出”的值：

//push() 方法（在数组结尾处）向数组添加一个新的元素：方法返回新数组的长度：
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x =  fruits.push("Kiwi");   //  x 的值是 5

//shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。方法返回被“位移出”的字符串：
//unshift() 方法（在开头）向数组添加新元素，并“反向位移”旧元素：方法返回新数组的长度。

//delete 运算符来删除：
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // 把 fruits 中的首个元素改为 undefined,   使用 delete 会在数组留下未定义的空洞。请使用 pop() 或 shift() 取而代之。

//splice() 方法可用于向数组添加新项：
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
/*
第一个参数（2）定义了应添加新元素的位置（拼接）。

第二个参数（0）定义应删除多少元素。

其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。

splice() 方法返回一个包含已删除项的数组：
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "原数组：<br> " + fruits;

function myFunction() {
  var removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
  document.getElementById("demo2").innerHTML = "新数组：<br>" + fruits;
  document.getElementById("demo3").innerHTML = "已删除项：<br> " + removed; 
}
 
//concat() 方法通过合并（连接）现有数组来创建一个新数组： concat() 方法不会更改现有数组。它总是返回一个新数组。concat() 方法可以使用任意数量的数组参数：concat() 方法也可以将值作为参数：

//slice() 方法用数组的某个片段切出新数组。 slice() 方法创建新数组。它不会从源数组中删除任何元素。
//slice() 可接受两个参数，比如 (1, 3)。该方法会从开始参数选取元素，直到结束参数（不包括）为止。

//所有 JavaScript 对象都拥有 toString() 方法。


//JavaScript 数组排序
//sort() 方法以字母顺序对数组进行排序：sort() 方法在对数值排序时会产生不正确的结果。
//reverse() 方法反转数组中的元素。

//Math.max.apply 来查找数组中的最高值：
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
//Math.min.apply 来查找数组中的最低值：
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

/*map() 方法通过对每个数组元素执行函数来创建新数组。

map() 方法不会对没有值的数组元素执行函数。

map() 方法不会更改原始数组。
*/
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
/*
filter() 方法创建一个包含通过测试的数组元素的新数组。

这个例子用值大于 18 的元素创建一个新数组：
*/
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//reduce() 方法在每个数组元素上运行函数，以生成（减少它）单个值。
//reduce() 方法不会减少原始数组。
//reduceRight() 方法在每个数组元素上运行函数，以生成（减少它）单个值。
//reduceRight() 方法在数组中从左到右工作。另请参见 reduce（）。
/*
every() 方法检查所有数组值是否通过测试。

这个例子检查所有数组值是否大于 18：

实例
*/
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
/*
some() 方法检查某些数组值是否通过了测试。
*/
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

document.getElementById("demo").innerHTML = "某些值大于 18 是：" + someOver18;

function myFunction(value, index, array) {
  return value > 18;
}
//某些值大于 18 是：true


//indexOf() 方法在数组中搜索元素值并返回其位置。

//find() 方法返回通过测试函数的第一个数组元素的值。
//这个例子查找（返回）大于 18 的第一个元素的值：
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//findIndex() 方法返回通过测试函数的第一个数组元素的索引。


/*--------------------------------------------------Date-------------------------------------------*/
//注释：JavaScript 从 0 到 11 计算月份。
/*
有 4 种方法创建新的日期对象：

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string) */
//一月是 0。十二月是11。

//6个数字指定年、月、日、小时、分钟、秒：
//JavaScript 将日期存储为自 1970 年 1 月 1 日 00:00:00 UTC（协调世界时）以来的毫秒数。
//JavaScript（默认情况下）将以全文本字符串格式输出日期：
//在 HTML 中显示日期对象时，会使用 toString() 方法自动转换为字符串。
//toDateString() 方法将日期转换为更易读的格式：
//toUTCString() 方法将日期转换为 UTC 字符串（一种日期显示标准）。

//JavaScript 日期格式化
/*
ISO 日期	"2018-02-19" （国际标准）
短日期	"02/19/2018" 或者 "2018/02/19"
长日期	"Feb 19 2018" 或者 "19 Feb 2019"
完整日期	"Monday February 25 2015"
*/
/*
getDate()	以数值返回天（1-31）
getDay()	以数值获取周名（0-6）
getFullYear()	获取四位的年（yyyy）
getHours()	获取小时（0-23）
getMilliseconds()	获取毫秒（0-999）
getMinutes()	获取分（0-59）
getMonth()	获取月（0-11）
getSeconds()	获取秒（0-59）
getTime()	获取时间（从 1970 年 1 月 1 日至今）
setDate()	以数值（1-31）设置日
setFullYear()	设置年（可选月和日）
setHours()	设置小时（0-23）
setMilliseconds()	设置毫秒（0-999）
setMinutes()	设置分（0-59）
setMonth()	设置月（0-11）
setSeconds()	设置秒（0-59）
setTime()	设置时间（从 1970 年 1 月 1 日至今的毫秒数）
*/

/*----------------------------------------数学-----------------------------------------------*/
/*
abs(x)	返回 x 的绝对值
acos(x)	返回 x 的反余弦值，以弧度计
asin(x)	返回 x 的反正弦值，以弧度计
atan(x)	以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
atan2(y,x)	返回从 x 轴到点 (x,y) 的角度
ceil(x)	对 x 进行上舍入
cos(x)	返回 x 的余弦
exp(x)	返回 Ex 的值
floor(x)	对 x 进行下舍入
log(x)	返回 x 的自然对数（底为e）
max(x,y,z,...,n)	返回最高值
min(x,y,z,...,n)	返回最低值
pow(x,y)	返回 x 的 y 次幂
random()	返回 0 ~ 1 之间的随机数
round(x)	把 x 四舍五入为最接近的整数
sin(x)	返回 x（x 以角度计）的正弦
sqrt(x)	返回 x 的平方根
tan(x)	返回角的正切
*/

/*
Boolean() 函数
您可以使用 Boolean() 函数来确定表达式（或变量）是否为真：
*/


/*----------------------------------比较和逻辑运算符-------------------------- */
/*
==	等于
===	值相等并且类型相等

&&	与	(x < 10 && y > 1) 为 true	
||	或	(x == 5 || y == 5) 为 false	
!	非	!(x == y) 为 true	


条件（三元）运算符:  variablename = (condition) ? value1:value2

JavaScript Switch 语句:
switch(表达式) {
     case n:
        代码块
        break;
     case n:
        代码块
        break;
     default:
        默认代码块
} 

*/

/*----------------------------------循环-------------------------- */
//for/in 语句遍历对象的属性：
/*
for (x in person) {
    text += person[x];
}
*/


//JavaScript 错误 - Throw 和 Try to Catch
/*
try 语句使您能够测试代码块中的错误。

catch 语句允许您处理错误。

throw 语句允许您创建自定义错误。

finally 使您能够执行代码，在 try 和 catch 之后，无论结果如何。
*/
//JavaScript 实际上会创建带有两个属性的 Error 对象：name 和 message。

//"use strict"; 定义 JavaScript 代码应该以“严格模式”执行。


/*------------------------------let 和 const。------------------------------ 
可以使用 let 关键词声明拥有块作用域的变量。

在块 {} 内声明的变量无法从块外访问：
{ 
  let x = 10;
}
// 此处不可以使用 x

*/


/*------------------------------------------------------------------JSON 语法规则------------------------------------- */
/*
数据是名称/值对
数据由逗号分隔
花括号保存对象
方括号保存数组
*/
//把 JSON 文本转换为 JavaScript 对象
//首先，创建包含 JSON 语法的 JavaScript 字符串：
var text = '{ "employees" : [' +
'{ "firstName":"Bill" , "lastName":"Gates" },' +
'{ "firstName":"Steve" , "lastName":"Jobs" },' +
'{ "firstName":"Alan" , "lastName":"Turing" } ]}';

//然后，使用 JavaScript 的内建函数 JSON.parse() 来把这个字符串转换为 JavaScript 对象
var obj = JSON.parse(text);
//最后，请在您的页面中使用这个新的 JavaScript 对象：





































































