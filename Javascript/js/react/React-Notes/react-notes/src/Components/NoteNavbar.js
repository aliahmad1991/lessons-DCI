import React from 'react'
import{Navbar} from 'react-bootstrap'
export default function NoteNavbar(props) {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand>Notes in React</Navbar.Brand>
           
                <input type="text" placeholder="NOTES  NAME"
                onChange={props.save} value={props.value}></input>
             <button className="btn btn-secondary m-2" onClick={props.create}>Add Note</button>

        </Navbar>
    )
}
