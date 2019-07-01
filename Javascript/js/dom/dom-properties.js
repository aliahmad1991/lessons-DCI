let tag = document.getElementById("firstItem").style.color="red";
let liTags=document.getElementsByClassName("light");// selector with class name
liTags[1].innerHTML="list Item 3 after edeting !!!"// the innerHTML of the HTML tag
console.log(liTags[1].innerHTML);
liTags[0].style.color="green"; // Change the color of the list item 2 is now green

let headingTag= document.getElementsByTagName("h1"); // selector with Tag name

console.log(headingTag);
headingTag[0].innerHTML="Changing the heading from Hello to this";
headingTag[1].style.background="lightblue";
headingTag[1].style.color="white";
headingTag[1].style.border="1px solid blue";
headingTag[1].style.textAlign="center";

