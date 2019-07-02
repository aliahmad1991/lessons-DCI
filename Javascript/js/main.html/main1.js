// we have array of Colors and we have Button
// when i click on the Button then the bsckground color of the body will 
// change th the colors inside the array 
// after the last element of the array it will start again.

let colors= ["red","orange","blue","green","yellow","pink"];
let body = document.querySelector('body');
let buttonText=document.getElementById("color");
let buttonSize=document.getElementById("color");
let size = ['10px','20px','30px','40px','50px','60px']

let counter = 0;
function bgc(){
if(counter == colors.length){
    counter = 0;
}
if(counter < colors.length){
    body.style.background = colors[counter];
    buttonText.innerText = colors[counter];
    buttonText.style.color=colors[counter];
    buttonSize.style.padding=size[counter];


    counter++;
}
}
