/////// First way ////////////


// function Bold() {
//   document.getElementById("divToStyle").style.fontWeight = "900";
// }
// function Italic() {
//     document.getElementById("divToStyle").style.fontStyle = "italic";
//   }
//   function Tahoma() {
//     document.getElementById("divToStyle").style.fontFamily = "Genova";
//   }
//   function Areal() {
//     document.getElementById("divToStyle").style.fontFamily = "Courier New ";
//   }
//   function Red() {
//     document.getElementById("divToStyle").style.color = "red";
//   }
//   function Green() {
//     document.getElementById("divToStyle").style.color = "green";
//   }
//   function Black() {
//     document.getElementById("divToStyle").style.color = "black";
//   }
//   function size() {
//     document.getElementById("divToStyle").style.fontSize = "50px";
//   }
//   function border() {
//     document.getElementById("divToStyle").style.border = "2px solid black";
//   }
////////////////////////////////////////////////////////////////////////
////////////// Second way ////////////////////////////////////////
let mydiv = document.getElementById("divToStyle");

let btn = document.querySelectorAll("button");
function txtBold(){
    mydiv.style.fontWeight="bold";
} 
function fIt(){
    mydiv.style.fontStyle="italic";
}
function tahoma(){
    mydiv.style.fontFamily="tahoma";
}
function arial(){
    mydiv.style.fontFamily="Arial";
}
function redC(){
    mydiv.style.color="red";
}
function greenC(){
    mydiv.style.color="green";
}
function blackC(){
    mydiv.style.color="black";
}
function Fonts(){
    mydiv.style.fontSize="20px";
}
function Bord(){
    mydiv.style.border="2px solid black";
}


btn[0].addEventListener("click",txtBold);
// btn[1].addEventListener("click",fIt);
btn[2].addEventListener("click",tahoma);
btn[3].addEventListener("click",arial);
btn[4].addEventListener("click",redC);
btn[5].addEventListener("click",greenC);
btn[6].addEventListener("click",blackC);
btn[7].addEventListener("click",Fonts);
btn[8].addEventListener("click",Bord);
btn[10].removeEventListener("click",rset);



//////////////////////////////////////////////////////////////////////////
////////////////////////// third way ///////////////////////////////////

btn[1].addEventListener("click",function(){mydiv.style.fontStyle="italic"});
btn[9].addEventListener("click",function(){mydiv.style.backgroundColor="lightblue"});

