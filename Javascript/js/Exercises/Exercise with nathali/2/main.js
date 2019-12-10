let btn=document.getElementById("btn");
let createinput=document.getElementById("create");
let styleinput=document.getElementById("style");
let place=document.getElementById("place");

btn.addEventListener("click",add);
function add(){
    let newElement=document.createElement(createinput.value);
    newElement.setAttribute("style",styleinput.value);

    place.appendChild(newElement);
    if(creatinput.value== "button" || 
        creatinput.value== "p"){
       
            newElement.innerHTML=creatinput.value;
    }
}
