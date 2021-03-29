
//callback fucntion will receive result of asynchronus code
function parseJsonStrToJSObject(str,callback){
    setTimeout(
        function(){
            try{
                var obj = JSON.parse(str);
                callback(null, obj);
            }catch(error){
                callback(error,null);
            }
        }, 0
    )
};
//在上述代码中，第2行parseJsonStrToObj（）函数的第二个参数为回调函数，该函数在第14行进行调用，
//回调函数中第一个参数err为错误信息，第二个参数result为返回数据，
//在第6行和8行使用callback（）函数返回错误信息和返回数据，在调用异步API时，
//优先判断回调函数中的第一个参数err对象是否为空，用以确定在异步代码执行的过程中，是否发生了异常。
parseJsonStrToJSObject('{"name1":"Jesse"}',function(err,result){
    if(err){
        return console.log('Error occured');
    }
    console.log(result);
});