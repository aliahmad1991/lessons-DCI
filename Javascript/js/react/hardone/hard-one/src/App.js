import './App.css';
import React, { Component } from 'react'
import { softshadow  }  from 'coolshadow';
export default class App extends Component {
  componentDidMount(){
    softshadow({
      shadow_type : 'hard',
      padding: true
  })
  }
  render() {
    return (
      <div>
      <img src="https://picsum.photos/id/171/300/300" title="" className="softshadow" />
      <img src="https://picsum.photos/id/191/300/300" title="" className="softshadow" />
      <img src="https://picsum.photos/id/193/300/300" title="" className="softshadow" />
      </div>
    )
  }
}