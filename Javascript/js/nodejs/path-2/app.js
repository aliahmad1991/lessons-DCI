const pathFunctions = require('./pathFunctions');
const path=require("path");

console.log("app: Live Server");

pathFunctions.getConstants();

pathFunctions.getBaseName(__filename);
pathFunctions.getBaseName('/home/user/index.js');


pathFunctions.getDirName(__filename);
pathFunctions.getDirName('/home/user/index.js');

pathFunctions.getExtName(__filename);
pathFunctions.getExtName('/home/user/index.js');
pathFunctions.getExtName('/home/user/Readme.md');

let res;
 res = path.join("/home","user_folder","style.css");
 console.log("join: " +res);


 console.log('\nparse function')
 res = path.parse("/book_store/kafka_on_the_beach/book.pdf");
 console.log(res);
 console.log( typeof res);
 console.log('dir: '+res.dir);
 console.log('base: '+res.base);
 console.log('ext: '+res.ext);
 console.log('name: '+res.name);

 // format
 console.log('\n format function');
 res=path.format({
     dir:'/store/learn_node_js_in_24h',
     base:'book_name.pdf'
    
 });
 console.log('format: '+res);