var number1 = 10;
var number2 = 2;
function calcute(y) {
  var x = number1 + number2 + y;
  document.getElementById("result").innerHTML = x;
}

calcute(2);

let input1 = document.getElementById("first");
let input2 = document.getElementById("second");
let inputArray = document.querySelectorAll("input");
var emptyInput = "";
console.log(inputArray);

input1.addEventListener("keyup", add);
input2.addEventListener("keyup", add);

function add() {
  document.getElementById("result").innerHTML = input1.value * input2.value;
  //  if(input1.value==0) {
  //      alert(" the input 1 is 0");
  //  } else if (input2.value==0){
  //     alert(" the input 2 is 0");
  //  }
  emptyInput = "";
  inputArray.forEach(element => {
    console.log("Element is" + element.id + "Value is " + element.value);
    if (element.value == 0) {
      emptyInput = element.id;
    }
  });
  if (emptyInput != "") {
    // alert("The input field " + emptyInput + " Is empty")
  }
}

/////////////////////////////////////////////////////////////////////////////
/////////////////// 12.09.2019 //////////////////////////////////////////////

let Countries = ["England", "sweeden", "Germany", "italy", "france"];

let inputText = document.getElementById("text");
let btn = document.getElementById("btn");

let x = [inputText, btn];

x.forEach(element => {
  element.style.height = "200px";
});

let everyinput = document.querySelectorAll("input");
console.log(everyinput);

everyinput.forEach(element => {
  element.style.background = "green";
});

/////////////////////////////////////////

