let htag=document.getElementsByTagName("h1");
//htag[0].style.color="blue";
htag[1].style.color="lightgreen";

//htag[0].style.border="5px solid lightblue";

htag[0].classList.add("light");
htag[0].classList.add("bg");
//htag[0].classlist.remove("light");
let par=document.getElementsByTagName("p");
par[0].classList.add("light");

// getting the Text content 

let p=document.querySelector("p");
console.log(p.textContent);
p.textContent="I love<strong>Javascript</strong>";//this giv:I love 
// Textcontent will not render the strong Tag
p.innerHTML="I love<strong>Javascript</strong>";
//innerHTML is rendering the strong tag

// We add h2 to the Paragraph
p.innerHTML="<h4> Javascript</h4> I love <strong> Javascript</strong>";

// we remove the class bg from the first paragraph
par[0].classList.remove("bg");
//we add the class light to the second Paragraph
par[1].classList.add("light");

//we want to change yhe color of every html element with class "light " to red
let pClass=document.querySelectorAll(".light");
pClass[1].style.color="red";
pClass[0].style.color="red";
//we want to change yhe color of every p html element to gray
let allP=document.querySelectorAll("p");
for(let i = 0; i< allP.length;i++){
    allP[i].style.color="gray";
}

