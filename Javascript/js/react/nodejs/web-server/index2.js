const http=require('http');
const server = http.createServer((request,response)=>{
    
    response.setHeader('Content-type','text/plain');
    response.setHeader('Access-Control-Allow-Origin','*');
    response.writeHead(200); // status code 200 / ok

    response.end('Hello from node js web server');
    if(request.url==="/home"){
        response.end('hi from Home');
        console.log('you requested the home page')
    }
});
server.listen(1234,()=>{
    console.log('listining to port 1234')
})