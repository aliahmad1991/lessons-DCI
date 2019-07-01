let link = document.querySelector("a");// we get the first link
console.log(link.getAttribute("href"));// www.google.com

//we change the href to www.bing.com
link.setAttribute("href","https://www.bing.com");
console.log(link.getAttribute("href")); // www.bing.com

///////////////////////////////////////////////////////////////////

let img = document.querySelector("img");
console.log(img.getAttribute("src"));
img.setAttribute("src","../../../image/owl.png");
console.log(img.getAttribute("src"));

function mypic(){
    document.getElementById("myImg").src="../../../image/trump.jpeg";
}