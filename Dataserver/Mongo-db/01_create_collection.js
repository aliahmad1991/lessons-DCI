const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";

// create a new collection "customers" in the database "mydb"
mongoClient.connect(url,(err,db)=>{
if(err) throw err;
let mydb = db.db('mydb');
mydb.createCollection("customers",(err,res)=>{
    if(err) throw err;
    console.log("Collection created!");
    db.close();
});
});

mongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    let mydb=db.db("mydb");
    let myobj={name:"google",address:"silicon valley"};
    mydb.collection("customers").insertOne(myobj,(err,res)=>{
        if(err) throw err;
        console.log("1st document inserted");
        db.close();
    });
    let myobj2={name:"facebook",address:"London"};
    mydb.collection("customers").insertOne(myobj2,(err,res)=>{
        if(err) throw err;
        console.log("2nd document inserted");
        db.close();
    });
    let myobj3={name:"ebay",address:"los Angeles"};
    mydb.collection("customers").insertOne(myobj3,(err,res)=>{
        if(err) throw err;
        console.log("3nd document inserted");
        db.close();
    });

});