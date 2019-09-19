document.getElementById("resultDiv").style.display="none";
document.getElementById("personalDiv").style.display="block";
document.getElementById("addressDiv").style.display="none";
document.getElementById("profileInfo").style.display="none";



function nextDiv(e){
    e.preventDefault();
    let checkFirstName = document.getElementsByName("firstName")[0].checkValidity();
    let checkLastName = document.getElementsByName("lastName")[0].checkValidity();
    let checkBirthDate = document.getElementsByName("birthDate")[0].checkValidity();
    let checkNationality = document.getElementsByName("nationality")[0].checkValidity();
    let checkuName = document.getElementsByName("userName")[0].checkValidity();
    let checkAddress=document.getElementsByName("address")[0].checkValidity();
    let checkHousNumber=document.getElementsByName("houseNumber")[0].checkValidity();
    let checkZipCode=document.getElementsByName("zipCode")[0].checkValidity();
    let checkpassword=document.getElementsByName("password")[0].checkValidity();
    let passwordMatch=
    document.getElementsByName("password")[0].value === document.getElementsByName("repeatPassword")[0].value;
let checkImageFile=document.getElementById("imageFile").checkValidity();
   // alert('Next btn is clicked');
let parentDivId = e.target.parentElement.id;
//alert(parentDivId);
switch(parentDivId){
    case 'personalDiv':
        if(checkFirstName && checkLastName && checkBirthDate && checkNationality){
        e.target.parentElement.style.display="none";
        document.getElementById("addressDiv").style.display="block";
        document.getElementById("profileInfo").style.display="none";
        document.getElementById("resultDiv").style.display="none";
        }
        else{alert('please fill the blank')}
        break;
    case 'addressDiv':
        e.target.parentElement.style.display="none";
        document.getElementById("resultDiv").style.display="none";
        document.getElementById("personalDiv").style.display="none";
        document.getElementById("profileInfo").style.display="block";
        break;
    case 'profileInfo' :
        if(checkuName && checkImageFile && passwordMatch){
        e.target.parentElement.style.display="none";
        document.getElementById("addressDiv").style.display="none";
        document.getElementById("personalDiv").style.display="none";
        document.getElementById("resultDiv").style.display="block";
        showDate();
        }
        else{
            alert("You have invalid entries ");
        }
        break;
}
}
function previousDiv(e){
    e.preventDefault();
    let parentDiv=e.target.parentElement.id;
   // alert('Previous Button is clicked');
   switch(parentDiv){
       case 'addressDiv':
           e.target.parentElement.style.display="none";
           document.getElementById("personalDiv").style.display="block";
           document.getElementById("resultDiv").style.display="none";
           document.getElementById("profileInfo").style.display="none";
           break;
           case 'profileInfo':
                e.target.parentElement.style.display="none";
                document.getElementById("addressDiv").style.display="block";
                document.getElementById("resultDiv").style.display="none";
                document.getElementById("personalDiv").style.display="none";
                break;
                case 'resultDiv':
                        e.target.parentElement.style.display="none";
                        document.getElementById("addressDiv").style.display="none";
                        document.getElementById("profileInfo").style.display="block";
                        document.getElementById("resultDiv").style.display="none";
                        break;
            }
}
let btns=document.querySelectorAll("button");
console.log(btns);
btns.forEach(function(item){
    if(item.classList.contains("next")){
        item.addEventListener("click",nextDiv);
    }
    else if(item.classList.contains("previous")){
        item.addEventListener("click",previousDiv);
    }
})

function showDate(){
    let fName = document.getElementsByName("firstName")[0].value;
    let lName=document.getElementsByName("lastname")[0].value;
    let bDate=document.getElementsByName("birthDate")[0].value;
    let nationality=document.getElementsByName("nationality")[0].value;
}