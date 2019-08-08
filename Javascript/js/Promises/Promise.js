var isMomHappy = true;

// Promise

var willIGetNewPhone = new Promise(
 function(resolve,reject){
   if(isMomHappy){
     var phone = {
       brand:"Apple",
       color:"black"
     }
     resolve(phone); // fulfield
   }
   else{
     var reson = new Error("mom is not Happy");
     reject(reason); // reject 
   }
 }
);

// call our promise

var askMom = function(){
  willIGetNewPhone
  .then(function(phone){
    // yay, You got a new phone
    console.log(phone);
  })
  .catch(function(error){
    console.error(error.message);
  })
}
askMom();
