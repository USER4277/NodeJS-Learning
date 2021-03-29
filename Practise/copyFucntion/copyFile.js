// module: copy file

var fs = require('fs');

/*
* fucntion for copying file
*src:file to be read
*dist: target file
:callback: callback function
*/
function copyFile(src,dist, callback){
    //read file
    fs.readFile(src,function(err,data){
        if(err){
            //使用回调函数返回错误对象err
            return callback(err);
        }else{
            fs.writeFile(dist,data.toString(),function(err){
                if(err){
                    return callback(err);
                }else{
                    //回调函数返回null
                    return callback(null);
                }
            })
        }
    });
};

//最后使用module.export将copy（）函数对外开放。
module.exports = copyFile;