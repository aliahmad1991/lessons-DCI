import React from 'react';
import {Link} from 'react-router-dom';


export default function Navigator() {
    return (
        <div>
        <div>
     <h3>React Router</h3>
     <ul>
       <li>
         <Link to={'/about'}>About US</Link>
       </li>
       <li>
         <Link to={'/'}>Home</Link>
       </li>
     </ul>
   </div>
        </div>
    )
}
