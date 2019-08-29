let input=document.getElementById("input");
let btn=document.getElementById("btn");

btn.addEventListener("click",random);
function remove(){


}
function random(){

    let number = input.value;
    for (let i = 0 ;i< number;i++){
        var div=document.createElement("div");
        var rbtn=document.createElement("button");
        rbtn.style.background="red";
        rbtn.style.padding="5px";
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = hexRandom();
        div.style.float="left";
        div.style.color = "white";
        rbtn.style.color = "white";
        div.style.padding="20px";
        div.style.margin="20px";
        div.appendChild(rbtn);
        div.appendChild(document.createTextNode(hexRandom()));
        rbtn.innerHTML = "X";
        rbtn.addEventListener("click",remove);
        

      document.getElementById("main").appendChild(div); 

    }
   
}
function remove(e){
    e.target.parentElement.remove();
}

function hexRandom(){
    let allColors = '012ABCDEF3456789';
    let color = "#";
    for (i = 0; i < 6; i++){
        let x = Math.floor(Math.random() * allColors.length);
        color +=  allColors[x];
    };
        return color;
 }