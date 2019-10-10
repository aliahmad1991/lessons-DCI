import React from 'react';

const InputTodo = (props) =>{
    return(
        <input type="type" placeholder="Enter new Task to do ..."

        value={props.todoValue}
        onChange={(e)=>props.changed(e)}
        />
    )
}
export default InputTodo;