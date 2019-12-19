const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;


// create database
mongoClient.connect('mongodb://localhost:27017/mydb',(err,db)=>{
    if(err) throw err;
    console.log("Database created!");
    db.close();
})