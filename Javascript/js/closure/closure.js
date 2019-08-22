

//
//function makeCounter(n){
//function incr(){
 // return n +=1;
//}
//return incr();
//}
//var res = makeCounter(4);// 5
//console.log(res);

////////////////////////////////////////////////////////////


//function makeCounter(n){
 // var currentValue=1
//return function(){
 //return currentValue++;
 // }
//}
//var counter = makeCounter();
//console.log(counter());// .....(!)
//console.log(counter());//

////////////////////////////////////////////////////////////

  
//function makeCounter(n){
 // var currentValue=2;
 // return function(){
 //   return currentValue *=2;  
 // }
  
 // }
//var counter = makeCounter();
//console.log(counter());
//console.log(counter());
//console.log(counter());
//console.log(counter());
//console.log(counter());



/////////////////////////////////////////////////////////////

 
  
function makeCounter(n){
  function incr(){
    return incr.currentValue++;
  }
  incr.currentValue = 1;
  return incr;
  
  }
var counter = makeCounter();
counter.currentValue = 5;
console.log(`counter #1: ${counter()}`);
console.log(`counter #1: ${counter()}`);
var counter2 = makeCounter();
console.log(`counter #2: ${counter2()}`);
console.log(`counter #1: ${counter()}`);
 




