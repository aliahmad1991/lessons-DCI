import React, { Component } from 'react'
import User from './Components/User'

export default class SearchResult extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
           users: [
              { id: 1, name: ' Wasif ',  email: ' wasif@email.com' },
              { id: 2, name: ' Aman ',    email: ' aman@email.com' },
              { id: 3, name: ' Saad ',   email: ' saad@email.com' },
              { id: 4, name: ' Asad ',   email: ' asad@email.com' },
              { id: 5, name: ' Asud ',   email: ' asud@email.com' },
              { id: 6, name: ' Hasad ',   email: ' hasad@email.com' }
           ]
        }
     }
    render() {
        return (
            <div>
            <table>
                
                {this.state.users.map((item,i)=>{
                    return(
                        <User email={item.email} name={item.name} id={item.id}/>
                        
                        
                    )
                })}
                   
            
            </table>
            </div>
        )
    }
}
