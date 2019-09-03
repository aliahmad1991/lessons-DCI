// $("h1") is the same of document.queryselectorAll("h1");



// we change all li colors to green in vanilla js
let lis=document.querySelectorAll("li");
for(let i=0;i<lis.length;i++){
  lis[i].style.color="green";
}

// i will change all li color to red using jquery
$("li").css("color","red");

$("li").css({"border":"2px solid #ccc","background":"lightblue","fontSize":"2em"});
//select all divs and giv them a purple background
$("div").css("background","purple");
// select the divs with the class "highlight" and make them 200 px
$("div.highlight").css("width","200px");

$("div#third").css("border","4px solid orange");

$("div:first").css("color","pink");
//$("div:eq(1)").css("color","pink");


//{
//document.querySelectorAll("h1")[1].textContent="Jquery is awsome";
$("h1:eq(1)").text("jquery is awsome");
//}


$("h1:eq(1)").html("<input type='text'> jquery is awsome");

document.querySelector("input").value="jquery is awsome";

// in jquery
$("input").val("jquery is nice");
console.log($("input").attr("type"));
$("input").attr("type","color");


$("img").attr("src","   https://picsum.photos/id/390/800/400");
$("img").css("width","200px");
$("img:eq(0)").attr("src","https://picsum.photos/id/380/800/400");

$("img:eq(0)").attr("title","Kosesher");