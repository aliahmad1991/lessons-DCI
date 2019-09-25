

var express = require('express');
var app = express();
var port=3000;

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","origin,X-Requested-With,Content-Type,Accept");
    next();
});

app.get('/',function(req,res){
    res.send('hello world!');
});
app.get('/states',function(req,res){
   var states = {
        'state':'Hamburg',
        'Capital':'Hamburg'
    }
    res.send(states);
});

app.listen(port,function(){
    console.log(`Example app listening on port ${port}!`)
})
