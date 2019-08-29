var input1=document.getElementById("plus1");
var input2=document.getElementById("plus2");
var input3=document.getElementById("plus3");

input1.addEventListener("keyup",add);
input2.addEventListener("keyup",add);
function add(){
    let addResult =parseFloat(input1.value) + parseFloat(input2.value);
    input3.value = addResult;
    
}

///////////////////////////////////////////////////////////////////////////

var min1=document.getElementById("min1");
var min2=document.getElementById("min2");
var min3=document.getElementById("min3");


min1.addEventListener("keyup",minus);
min2.addEventListener("keyup",minus);
function minus(){
    let minResult =parseFloat(min1.value) - parseFloat(min2.value);
    min3.value = minResult;
    
}
////////////////////////////////////////////////////////////////////////////

var times1=document.getElementById("times1");
var times2=document.getElementById("times2");
var times3=document.getElementById("times3");

times1.addEventListener("keyup",multiple);
times2.addEventListener("keyup",multiple);
function multiple(){
    var multipleRes=parseFloat(times1.value) * parseFloat(times2.value);
    times3.value=multipleRes;
}



/////////////////////////////////////////////////////////////////////
var div1=document.getElementById("div1");
var div2=document.getElementById("div2");
var div3=document.getElementById("div3");

div1.addEventListener("keyup",divide);
div2.addEventListener("keyup",divide);
function divide(){
    var divideRes=parseFloat(div1.value) / parseFloat(div2.value);
    div3.value=divideRes;
}
///////////////////////////////////////////////////////////////////

var pers1=document.getElementById("pers1");
var pers2=document.getElementById("pers2");
var pers3=document.getElementById("pers3");

pers1.addEventListener("keyup",perse);
pers2.addEventListener("keyup",perse);
function perse(){
    var persRes=parseFloat(pers1.value) % parseFloat(pers2.value);
    pers3.value=persRes;
}