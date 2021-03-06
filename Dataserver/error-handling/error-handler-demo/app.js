var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// custom 404 page
app.get('*',function(req,res,next){
  //  throw new Error ('oh...not such a Page Found');
//   let err = new Error('oh ...! Nothing to reveal');
//   err.statusCode = 404;
//   next(err);
res.sendFile(__dirname+'/public/404.html');
});

//user defined error handler using middleware
app.use(errorHandler);
function errorHandler(err,req,res,next){
    res.status(500);
    res.json({message:err.message});
};



module.exports = app;
