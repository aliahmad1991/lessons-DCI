


function loadWebsite(){
    window.location.assign("https://www.youtube.com");
}
let myBtn = document.getElementById("location");
myBtn.addEventListener("click",loadWebsite);
//////////////////////////////////////////////////////

let btn=document.createElement("button");
btn.innerHTML="leran javascript";

btn.addEventListener("click",function(){
    window.location.href="https://www.tutorialrepublic.com/javascript-tutorial";

});
document.body.appendChild(btn);

// the Page will redirect to the youtube.com after 4000 ms
// document.addEventListener("load", setTimeout(loadWebsite,4000));
   
let back = document.getElementById("back");
let forward=document.getElementById("forward");

back.onclick=function(){
    window.history.back();

}
forward.onclick=function(){
    window.history.forward();
}