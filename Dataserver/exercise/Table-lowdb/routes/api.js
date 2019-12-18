const  express  =  require('express'); //Step 2
const  router  =  express.Router(); //Step 2
const  low  =  require('lowdb') //Step 3
const  FileSync  =  require('lowdb/adapters/FileSync') //Step 3
const  adapter  =  new  FileSync('data/data.json')//Step 4
const  db  =  low(adapter) //Step 5
let list=db.get('list');

router.get('/', function (req, res, next) {

    res.json(data);
  });