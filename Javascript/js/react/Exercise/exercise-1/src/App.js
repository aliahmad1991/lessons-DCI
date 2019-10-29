import React, { Component } from 'react';
import Me from './Components/Me';
import {Link,BrowserRouter} from 'react-router-dom';

import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="Header">
        <h2>About Me</h2>
        <div>
          <BrowserRouter>
          <ul>
            <li><Link to="/">Me </Link></li>
            <li><Link to="Hobbies"> Hobbies</Link></li>
            <li><Link to="Contact"> Contact</Link></li>
          </ul>
          </BrowserRouter>
        </div>
       
        </div>
        
        <Me/>
      </div>
    )
  }
}
