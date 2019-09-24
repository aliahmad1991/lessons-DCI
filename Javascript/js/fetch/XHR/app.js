document.querySelector(".get-jokes").addEventListener("click",getJokes);
function getJokes(e){
    e.preventDefault();
  
    let number=document.querySelector("#number").value;
    console.log(number);
    let Xhr = new XMLHttpRequest();
    Xhr.open('Get',`http://api.icndb.com/jokes/random/${number}`,true);
    Xhr.onload=function(){
        if(this.status===200){
           // alert(this.status);
            let response = JSON.parse(this.responseText);
            console.log(response);
            let output = '';
            if(response.type==="success"){
                response.value.forEach(item => {
                    output +=`<li>${item.joke}</li>`;
                    
                });
                document.querySelector(".jokes").innerHTML=output;
            }
        }
    }
Xhr.send();
}
document.querySelector(".fetch-jokes").addEventListener("click",getJokes);
function fetchJokes(){


}