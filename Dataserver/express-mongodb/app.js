const express = require('express');
const mongo = require('mongodb');

const app = express();
app.listen ('3000',()=>{
    console.log('server started on port 3000');
});
app.get('/',(req,res)=>{
    res.send('<h2>Welcome to MongoDB here is the Homepage</h2>');
});

// create mongo DB
app.get('/createdb',(req,res)=>{
    
})