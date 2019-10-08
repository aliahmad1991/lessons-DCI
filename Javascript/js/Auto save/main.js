let field = document.querySelector("#field");
field.addEventListener("change",autosave);
let div = document.getElementById("ali");
function autosave(){
let save = sessionStorage.setItem("save",field.value);

}
if(sessionStorage.getItem("save")){
   div.innerHTML = sessionStorage.getItem("save");
}