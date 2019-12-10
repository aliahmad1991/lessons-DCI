var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.get('/about',(req,res)=>{
    res.send('<h1>about page </h1>');
});
// app.get('/:userid',(req,res)=>{
//     res.send(req.params);
// });
app.get('/search',(req,res)=>{
    res.send(req.query);
});
app.get('/weather',(req,res)=>{
    res.send(`
    <h2>req.protocol:${req.protocol}<br></h2>
    <h2>req.hostname: ${req.hostname}<br></h2>
   <h2> req.path: ${req.path}<br></h2>
   <h2> req.originalURL : ${req.originalUrl}<br></h2>
    <h2> req.subdomains : ${req.subdomains}<br></h2>
    `   
    )

})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
