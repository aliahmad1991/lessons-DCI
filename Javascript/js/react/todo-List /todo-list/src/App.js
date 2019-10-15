import React,{Component} from 'react';
import InputTodo from './inputTodo';
import ListTodo from './listTodo';
import './App.css';


let todoItems=[];
todoItems.push({id:1 , task:"Learn React",done:false});
todoItems.push({id:2 , task:"dinner with friends",done:false});
todoItems.push({id:3 , task:"go to Gym",done:false});

class TodoList extends Component{
  state={
    todoValue:"",
    todoList:[]
  }
  changeToDoValue(e){
    this.setState({todoValue:e.target.value})
  }
  addToList(){
    let list = this.state.todoList;
    list.push(this.state.todoValue);
    this.setState({todoList : list , todoValue : ''})
    console.log(this.state.todoList);
  }

  isValid=()=>{
    if(this.state.todoValue === ""){
        return false;
    }
    return true;
}

removeTodoList=()=>{
  alert("you want to delete ???");
  let myList = this.state.todoList;
  console.log(myList);
}

  render(){
    return(
      <div className='App'>
      {todoItems.map((item)=>{
      return <h1>{item.task}</h1>
      })
      }
      <InputTodo todoValue={this.state.todoValue} changed={(e)=>this.changeToDoValue(e)} />
      <button onClick={()=> this.addToList()} disabled={this.isValid()? '':"Please Enter some Shit"}> add to the list </button>
      <button onClick={()=> this.clearList()}>clear</button>
      <ListTodo list={this.state.todoList} remove={(item)=>this.removeTodoList(item)}/>
    </div>
    )
}
}
export default TodoList;
