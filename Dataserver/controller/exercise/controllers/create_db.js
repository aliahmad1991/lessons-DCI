const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/'


function create_db(db_name,collection_name){
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        let myDB = db.db(db_name)
        myDB. createCollection(collection_name,(err,res)=>{
            if (err) throw err;
            console.log('collection created')
            db.close()
        })
    })
}

module.exports = create_db;