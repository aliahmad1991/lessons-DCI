const fs = require('fs');

varfileExistPath='./index.html';
var missingFilePath='./404.html';

// let out = fs.readFile('./index.html','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });


// how to read File
var data=fs.readFileSync(varfileExistPath,'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
console.log('this is after file read function SYNC');