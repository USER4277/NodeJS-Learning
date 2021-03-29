var fs = require('fs');


// appendFile(file,data,option,callback);
try {
    fs.appendFileSync('C:/Users/I540371/Desktop/Cloud/Node/Practise/txt/1.txt', 'appended txt');
    console.log('successed to append file');
} catch (error) {
    console.log('failed to append file');
}
