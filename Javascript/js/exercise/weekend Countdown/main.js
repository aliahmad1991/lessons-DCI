let btn=document.querySelector("button");
let Input=document.getElementById("input");


btn.addEventListener("click",click);
function click(){
if(Input.value==0){
    alert("Please inter your Username !!!");
}
else{
     alert("greeting "+Input.value+ " today is "+n+", "+ (5-d.getDay())+" till weekend");
}
}

 var d = new Date();
 var weekday = new Array(7);
 weekday[1] = "Monday";
 weekday[2] = "Tuesday";
 weekday[3] = "Wednesday";
 weekday[4] = "Thursday";
 weekday[5] = "Friday";
 weekday[6] = "Saturday";
 weekday[0] = "Sunday";
 var n = weekday[d.getDay()];
  

