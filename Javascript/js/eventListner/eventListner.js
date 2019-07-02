let img = document.getElementById("myImg");
let btn = document.getElementById("myBTN");

function changeImg() {
  if (img.getAttribute("src") == "https://picsum.photos/id/225/300/300") {
    img.setAttribute("src", "https://picsum.photos/id/295/300/300");
  } else {
    img.setAttribute("src", "https://picsum.photos/id/225/300/300");
  }
}
btn.addEventListener("click", changeImg);
