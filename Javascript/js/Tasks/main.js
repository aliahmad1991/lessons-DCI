let form = document.querySelector("#task-form");
let taskInput=document.querySelector("#task");
let taskList = document.querySelector("#task-list");


loadeventListner();
function loadeventListner(){
    // the submit event
    form.addEventListener("submit",addTask);

    // remove task event 
    taskList.addEventListener("click",removeTask);

} 



 

function addTask(e){
   e.preventDefault();
   if(taskInput.value !=""){   
    let h5 = document.createElement("h5");
    let taskText = document.createTextNode(taskInput.value);
    h5.appendChild(taskText);
    taskList.appendChild(h5);
   
    let delBtn = document.createElement("button");
    delBtn.innerText="X";
    delBtn.className="delete btn btn-danger ml-5";
    h5.appendChild(delBtn);
    storeToLocalStorage(taskInput.value);
    //taskInput.value="";
}
    else { alert("please add a task");
    }
}

function removeTask(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }

}
function storeToLocalStorage(task){
    
    let tasks;
    if(localStorage.getItem("tasks")===null){
       
        alert("the local storage was empty");
        tasks=[];        
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    console.log(tasks);
     tasks.push(task);
    // store the tasks in localstorage
     localStorage.setItem("tasks",JSON.stringify(tasks));


}


