let shape = document.getElementById("shape");
let start = new Date().getTime();
function makeShapeAppear(){
    document.getElementById("shape").style.display="block";
    let start = new Date().getTime();
}
function appearAfterDelay(){
    setTimeout(makeShapeAppear,2000)
}
appearAfterDelay();
shape.addEventListener("click",function(){
shape.style.display="none";
let end = new Date().getTime(); // after  clicking on the shape
let timeTaken = (end - start)/1000 ; 
// alert ("your time is" + timeTaken+"second");
document.getElementById("timeTaken").innerHTML=timeTaken;
appearAfterDelay();
});