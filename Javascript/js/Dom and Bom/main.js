// alert(document.documentElement.getAttribute("lang"));
// document.body.innerHTML="body";


let elementName = document.body.firstElementChild.nodeName;
// alert(elementName);
document.body.firstElementChild.textContent="hiiiiiiiiii";


//////////////////////////////////////////////////////////////////

let h1 = document.body.childNodes[0];
let newH2=document.createElement("h2");
newH2.innerHTML="the first h2";
document.body.insertBefore(newH2,h1);

//////////////////////////////////////////////////////////////////
// we will change the background of the p with class test to yellowgreen
let matches = document.getElementsByClassName("test");
for(let i=0;i<matches.length;i++){
    matches[i].style.background="yellowgreen";
}


//////////////////////////////////////////////////////////

let lastGreenP = matches[matches.length-1];
let newRedP=document.createElement("p");
newRedP.innerHTML="new Red Paragraph";
newRedP.style.background="red";
document.body.insertBefore(newRedP,lastGreenP);

/////////////////////////////////////////////////////////

let paragraph=document.getElementsByTagName("p");
console.log(paragraph.length);
// we will change the font for all p to bold using for loop
for(let i=0;i<paragraph.length;i++){
    paragraph[i].style.fontWeight="bold";
    paragraph[i].style.border="1px solid blue"
}

