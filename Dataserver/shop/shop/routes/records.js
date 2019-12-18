var express = require('express');
var router = express.Router();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data/db.json');
const db = low(adapter);


let data = db.get('records');
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.status(200).send(data);
});
/*Get particular record using id */
router.get('/:id',function(req,res){
  //filtering
let item = data.filter(function(e){
  return e.id == req.params.id;
  
});
res.status(200).send(item);

});

// post a new record
router.post('/',(req,res)=>{
let title = req.body.title;
let price = req.body.price;

console.log(title);
console.log(price);
let id = data.__wrapped__.records.length;
//console.log(id);
let count = db.get('count');
console.log(count)



db.get('records').push(
  {
    id:id,
    title:title,
    price:price
  }
).write();

db.update('count',n => n+1).write()
res.status(200).send('inserted. Database has been updated')
});

router.post('/delete',(req,res)=>{
  let id = parseInt(req.body.id);
  console.log(id);
  console.log(typeof id);
  db.get('records').remove({id:id}).write();
 res.status(200).send('you have removed item ' + id);
});




module.exports = router;
