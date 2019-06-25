toDoList=["React", "Vue", "Angular", "Ember"];
//the first question
userAnswer=prompt("What would you like to do?");
while (userAnswer!=="quit"){
if(userAnswer=="list") {
 printlist();
 // console.log(toDoList);
}
else if(userAnswer=="new"){
  addNew();
}
else if (userAnswer=="delete"){
delToDo();
}
}
console.log("Okay you close the app !!!");
function printlist(){
 toDoList.forEach(function(item)
{
   console.log(item);
   console.log('*************');
 } );
}
function addNew()
{
let newToDo=prompt("Add new task");
 toDoList.push(newToDo);
   console.log(newToDo + "Added to the list");
}
function delToDo()
{
let delIndex=prompt("Which task you wanna delete?");
let toDelete=toDoList[delIndex];
 toDoList.splice(delIndex,1);
console.log("The task" + toDelete  + "is deleted");
   }

