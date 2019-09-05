var number1=10;
var number2=2;
function calcute(){
    var x=number1+number2;
document.getElementById("result").innerHTML=x;
}

calcute();


let input1=document.getElementById("first");
let input2=document.getElementById("second");
let inputArray = document.querySelectorAll("input");
var emptyInput = '';
console.log(inputArray);

input1.addEventListener("keyup",add);
input2.addEventListener("keyup",add);

function add(){
    document.getElementById("result").innerHTML=input1.value*input2.value; 
    //  if(input1.value==0) {
    //      alert(" the input 1 is 0");
    //  } else if (input2.value==0){
    //     alert(" the input 2 is 0");
    //  }
    emptyInput = '';
    inputArray.forEach(element => {
        console.log("Element is" + element.id + "Value is " + element.value)
        if(element.value == 0){
            emptyInput = element.id;
        }
    });
    if(emptyInput != ''){
        alert("The input field " + emptyInput + " Is empty")
    }        
}


