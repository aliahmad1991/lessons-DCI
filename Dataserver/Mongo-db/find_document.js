const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

// find just a first occurence from the whole collection
mongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    let mydb = db.db("mydb");
    mydb.collection("customers").findOne({},(err,result)=>{
        if (err) throw err;
        console.log(result.name);
        console.log(result.adress);
        db.close();
    })
})