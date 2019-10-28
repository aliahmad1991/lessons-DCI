import React, { Component } from 'react';
import Me from './Components/Me';
import Hobbies from './Components/Hobbies';
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>About Me</h2>
        
        <Me/>
      </div>
    )
  }
}
