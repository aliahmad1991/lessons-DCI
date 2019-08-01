function doSomething(callback){
  callback()
  
}

function sayHi(){
  alert("Good Morning")
}
doSomething(sayHi)


///// ///// ////// //////// ////// ///// ////// //// //// /// //// //// ////

function doHomework(subject,callback){
  console.log("Starting my "+subject );
  callback();
}

doHomework("Math",function(){
  console.log("Finishing my Homework");
});

////////////////////////////////////////////////////////////////////////////

function serverRequest(query,callback){
  setTimeout(function(){
    var response=query+ " 20 is available";
    callback(response);
    
  },5000);
}
  
  function getResult(result){
    console.log("the Response from the server; "+result);
  }
  serverRequest("available Cars in Hamburg",getResult);
/////////////////////////////////////////////////////////////////////////////////////////////////////

var str = "Visit W3Schools";
  var patt = /w3schools/i;
  var result = str.match(patt);

document.write(result);
console.log(result)