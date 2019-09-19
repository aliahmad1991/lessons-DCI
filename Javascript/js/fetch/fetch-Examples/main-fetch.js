let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");

btn1.addEventListener("click",getText);
btn2.addEventListener("click",getJson);

//Get Local Text file data
function getText(){
fetch('test.txt')
.then(function(res){
return res.text();

})
.then(function(data){
    console.log(data);
    document.getElementById("output").innerHTML=data;
  
})
.catch(function(err){
    console.log(err);
})
}