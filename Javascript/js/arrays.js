//define Array in Javascript


let colors= new Array ("red","blue","green","yellow");
let Colors= ["red","blue","green","yellow"];

console.log(colors);

// adding the white color to the end of color Array


colors.push('white');
console.log(colors);

let mycolor=colors[2];

let mydiv="<div style='color:"+colors[1]+";background:"+mycolor+"'>" + mycolor + " </div><br>";


let Mydiv="<div style='color:"+colors[0]+";background:"+colors[3]+"'>" + mycolor + " </div><br>";
let Mydiv1="<div style='color:"+colors[2]+";background:"+colors[4]+"'>" + mycolor + " </div><br>";
let Mydiv2="<div style='color:"+colors[1]+";background:"+colors[0]+"'>" + mycolor + " </div><br>";
let Mydiv3="<div style='color:"+colors[0]+";background:"+colors[1]+"'>" + mycolor + " </div>";



document.write(mydiv);
document.write(Mydiv);
document.write(Mydiv1);
document.write(Mydiv2);
document.write(Mydiv3);