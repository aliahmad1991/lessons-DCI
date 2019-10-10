import React,{Component} from 'react';
import inputTodo from './inputTodo';
import './App.css';


let todoItems=[];
todoItems.push({id:1 , task:"Learn React",done:false});
todoItems.push({id:2 , task:"dinner with friends",done:false});
todoItems.push({id:3 , task:"go to Gym",done:false});

class TodoList extends Component{
  render(){
return(
  todoItems.map((item)=>{
  return <h1>{item.task}</h1>
  })
)
  }
}
export default TodoList;
