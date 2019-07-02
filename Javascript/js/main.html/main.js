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
let counter= 1;
let width=300;
let height=300;
function chgimg(){
    let img= document.getElementById("logoImg");
    counter++; width+=10 ; height+=10;
    let newSrc= "http://picsum.photos/id/"+counter+"/"+width +"/"+height;
    img.setAttribute("src",newSrc);

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


////////////////////////////////////////////////////////////////////////
function startAuto(){
    setInterval()
}

function showValue(){
let input=document.getElementById("name");
alert(input.value);
}

let p = document.getElementById("paragraph");
function over(){
    p.textContent = "stop Hovering me !!!";
    p.style.color="red";
}
function out(){
    p.textContent="thank you...";
    p.style.color="green";
    p.style.fontWeight="bold";
}