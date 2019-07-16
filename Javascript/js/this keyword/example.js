let btn = document.getElementById("myBtn");
btn.style.left="50px";
btn.style.top="0px";
btn.style.position="relative";
 btn.addEventListener("click",function(){
     this.style.left=parseInt(this.style.left)+10+"px";
     this.style.top=parseInt(this.style.top)+10+"px";
  // alert(this.style.left)
     
 })
///////////////////////////////////////////////////////////

let btn2=document.getElementById("imgBtn2");
let btn3=document.getElementById("imgBtn3");
let btn4=document.getElementById("imgBtn4");
let btn5=document.getElementById("imgBtn5");
let btn6=document.getElementById("btn");
let Img=document.getElementById("img");
function init(){
Img.style.left="0px";
Img.style.right="0px";
Img.style.top="0px";
Img.style.bottom="0px";
Img.style.position="relative";
}

btn2.addEventListener("click",function(){
     Img.style.top=parseInt(Img.style.top)-10+"px";
    
 
     
 });
 btn3.addEventListener("click",function(){
    Img.style.top=parseInt(Img.style.top)+10+"px";
   

    
});
btn4.addEventListener("click",function(){
    Img.style.left=parseInt(Img.style.left)-10+"px";
   

    
});
btn5.addEventListener("click",function(){
    Img.style.left=parseInt(Img.style.left)+10+"px";
   
 
    
});
function moveRight(){
Img.style.left=parseInt(img.style.left)+10+"px";    
}
btn6.addEventListener("click",function(){
    //setInterval(moveRight,20);
    animationJs();
});
window.onload=init();
    

function animationJs(){
    document.getElementById("img").animate([
    {transform:'rotate(0deg)'},
    {transform:'translate(-150px)'},
    {transform:'rotate(0deg)'},
    {transform:'rotate(360deg)'},
    {transform:'translate(-150px)'},
    {transform:'rotate(-360deg)'},

],
    {duration:1000,iterations:Infinity});
}
