let myDiv=document.getElementById("main");
myDiv.addEventListener("dragstart",start);
myDiv.addEventListener("dragend",end);




function start(){
console.log("drag started");
}

function end(){
console.log("drag ended");
}
let destDiv=document.querySelectorAll(".destination");
for(let i=0; i<destDiv.length;i++){
    // console.log(destDiv[i]);
    destDiv[i].addEventListener("dragover",over);
    destDiv[i].addEventListener("dragenter",entered);
    destDiv[i].addEventListener("dragleave",leave);
    destDiv[i].addEventListener("drop",drop);
}

function over(e){
    e.preventDefault();

    console.log("drag over");
}
function entered(e){
    e.preventDefault();
    console.log("drag entered");
}
function leave(){
    console.log("drag leaved");
}
function drop(){
    this.append(myDiv);
}