let pass=document.querySelector(".password");
let lower=document.querySelector(".lowercase");
function checkLength(input){
    if(input.value.length >=8){
        document.querySelector(".length").style.color="green";
    }

    else{
        document.querySelector(".length").style.color="red";
    }
}
pass.addEventListener("keyup",function(){
   checkLength(pass);

});

