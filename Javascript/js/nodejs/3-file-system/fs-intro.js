fs.readFile(path.join(__dirname,'/test','hello.text'),'utf8',(err,data)=>{
    if(err){
        console.log(``)
    }
})