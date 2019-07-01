function sayhi(){
let name= prompt("Hello what is your name???");
alert(" hi "+name+" !!! ")
}
function bgchange(){
    let body=document.querySelector("body");
    body.style.backgroundColor="purple";
}
function bgchange2(){
    let body=document.getElementsByTagName("body")[0];
    body.style.backgroundColor="gray";
}
let body=document.getElementsByTagName("body")[0];
function bgcolor(color){
    body.style.backgroundColor=color;

}
function chgimg(){
    let img= document.getElementById("logoImg");
    img.setAttribute("src","http://picsum.photos/id/506/300/300");

}
function chgimg2(){
    let img=document.getElementById("logoImg2");
    let firstImg="http://picsum.photos/id/667/300/300";
    let secondImg="http://picsum.photos/id/668/300/300";
    if(img.getAttribute("src")==firstImg){
        img.setAttribute("src",secondImg);
    }
    else{
        img.setAttribute("src",firstImg);
    }
}