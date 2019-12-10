const http=require('http');
const fs = require('fs');

const server = http.createServer((request,response)=>{
    
    response.setHeader('Content-type','text/html');
    response.setHeader('Access-Control-Allow-Origin','*');
    let message="Hello Babe";
    let src="https://picsum.photos/500";
    let html =fs.readFileSync(__dirname + '/index3.html','utf8');
    html=html.replace('{message}',message);
    html=html.replace('{imgSrc}',src);
    response.writeHead(200); // status code 200 / ok

    response.end(html);
});
server.listen(1233,()=>{
    console.log('listining to port 1233');})