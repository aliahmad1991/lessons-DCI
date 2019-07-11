let myDiv=document.getElementById("bannerMessage");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    myDiv.classList.add("banner");
    btn.classList.add("btn");

    // myDiv.setAttribute("class","banner");
    //btn . setAttribute("class","btn");
})