const path=require('path');

exports.getConstants = function(){
    console.log("__filename: "+__filename);
     console.log("__dirname: "+__dirname);
 }
 

exports.getBaseName = function(){
    let basePath= path.basename(__filename);
    console.log("basename: "+basePath);
}

exports.getDirName = function(file){
   let DirName = path.dirname(file);
    console.log("dirname: "+DirName);
}

exports.getExtName = function(file){
    let ExtName = path.extname(file);
     console.log("ExtName: "+ ExtName);
 }