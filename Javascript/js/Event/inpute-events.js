

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

function KeyDown(){
console.log("You pressed a Key in Keydown ");
input[0].style.background="yellow";
input[1].style.background="yellow"
}

function Keyup(){
    console.log("You released a Key in Keyup ");
    input[0].style.background="pink";
    input[1].style.background="yellow"
    }
    function formSubmit(){
        alert("You will be redirected to the page: www.loghatnameh.de thank you !!!");
    }