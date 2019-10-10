import React from 'react';

const ListTodo = (props) =>{
    let listOfItems;
    if(props.list.length > 0 ){
        listOfItems = props.list.map((item,index) => 
            <h4 key={index}>{item}</h4>
        );
    }
else{
    listOfItems = <p>Please add some Tasks</p>
}

    return(
        <div>
            
        {listOfItems}
                
            

        </div>
    )
}
export default ListTodo;