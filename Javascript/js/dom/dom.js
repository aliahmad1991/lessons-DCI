let h1=document.querySelector("h1");
let body = document.querySelector("body");
body.style.background="lightblue";
let isblue=false;
function changeColor(){
if(isblue==true){
    body.style.background="purple";
}

else {
    body.style.background="lightgreen";
}
isblue=!isblue;

}
setInterval(changeColor,1500); // Make something after 2000ms
h1.style.color= "green";
h1.style.margin="60px";
