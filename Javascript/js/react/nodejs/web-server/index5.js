const http=require('http');
const fs = require('fs');

const server = http.createServer((request,response)=>{
    
 
    response.setHeader('Access-Control-Allow-Origin','*');
  
if(request.url==='/'){
    

    fs.createReadStream(__dirname+'/index5.html').pipe(response);
}else if(request.url==='/api'){
    response.setHeader('Content-type','application/json');
    response.writeHead(200); // status code 200 / ok
    let data = {
        firstname : 'John',
        lastName:'Doe'
    }

    response.end(JSON.stringify(data));
}
    else{
        response.writeHead(404);
        response.end('not found: 404');
    

}
console.log("you are in : ",request.url)


});
    server.listen(1237,()=>{
        console.log('listining to port 1237');})