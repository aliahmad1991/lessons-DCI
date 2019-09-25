let fchoose=document.getElementById("fchoose");
let schoose=document.getElementById("schoose");
let finput=document.getElementById("finput");
let sinput=document.getElementById("sinput");
let btn=document.getElementById("btn");

btn.addEventListener("click",first);
function first(){
    let url = `https://api.cryptonator.com/api/full/${fchoose.value}-${schoose.value}`;
fetch(url);



}

