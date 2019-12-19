const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";



// find just a first occurrence the whole collection
mongoClient.connect(url, function(err, db){
    if (err) throw err;
    let mydb = db.db("mydb");
    mydb.collection("customers").findOne({}, function (err, result){
        if (err) throw err;
        console.log("find just a first occurrence");
        console.log(result.name);
        console.log(result.address);
        db.close();
    });
});
// get list of all documents
mongoClient.connect(url, function(err, db){
    if (err) throw err;
    let mydb = db.db("mydb");
    mydb.collection("customers").find({}).toArray(function(err, result){
        if (err) throw err;
        console.log("get list of all documents");
        console.log(result);
        db.close();
    });
});
// how to use query
mongoClient.connect(url, function(err, db){
    if (err) throw err;
    let mydb = db.db("mydb");
    let query = {name: "google"};
    mydb.collection("customers").find(query).toArray(function(err, result){
        if (err) throw err;
        console.log("get list for facebook only");
        console.log(result);
        db.close();
    });
});