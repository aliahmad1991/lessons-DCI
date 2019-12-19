const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url,(err,db)=>{

 if(err) throw err;
 let mydb = db.db("mydb");
 let myquery = {name:"google"};
 mydb.collection("customers").deleteOne(myquery,(err, obj)=>{
     if(err) throw err;
     console.log("deleting the first occurrence with name google");
     db.close();

 });
});
 // get list of all documents
mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let mydb = db.db("mydb");
    mydb.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log("get list of all documents");
        console.log(result);
        db.close();
    });
});

// delete all of them
mongoClient.connect(url,()=>{
    if(err) throw err;
    let mydb = db.db("mydb");
    let myquery ={name:"facebook"};
    mydb.collection("customers").deleteMany(myquery,(err,obj)=>{
        if(err) throw err;
        console.log("deleting all facebook documents");
        console.log(obj.result.n+"document(s) deleted");
        db.close();
    });
});