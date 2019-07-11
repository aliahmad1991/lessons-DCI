let myList=document.getElementById("list");

console.log(myList.firstElementChild.innerHTML);// water
console.log(myList.lastElementChild.innerHTML);// tea
console.log(myList.children[2].innerHTML);//tea

let btn=document.getElementById("myBtn");
btn.onclick=function(){
    let children = document.getElementById("list").children; 

    document.getElementById("content").innerHTML=children;

};
// btn.addEventListener("click",function(){alert("Hello")});

// let children = document.getElementById("list").children; //all the children inside ul
//children[0].innerHTML; // water