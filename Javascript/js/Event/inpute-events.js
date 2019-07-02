

let input = document.querySelectorAll("input");
function myfunction(){
    
    input[0].style.background = "lightgreen";
}
function inputChange(){
    input[1].style.background = "lightblue";
}
function inputSelect(){
    input[1].style.background="red";
    alert("You have selected some Text");
}
function inputBlur(){
    input[0].style.background="none"
}