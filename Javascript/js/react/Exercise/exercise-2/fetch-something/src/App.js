import React, { Component } from 'react';
import './App.css';
import './AppHooks';
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       personInfo:[]
    }
  }
  componentDidMount(){
    let initialPersonInfos =[];
    fetch("https://swapi.co/api/people/")
    .then(res => res.json())
    .then(data => {
      initialPersonInfos=data.results;
      console.log(initialPersonInfos)
   
    this.setState({
      personInfo:initialPersonInfos
    })
   })
  }
  render() {
    let allData=this.state.personInfo.map((item)=>{
      return(
        <div className="card">
        <h3><b>The Name :</b>{item.name}</h3>
        <h3><b>Height:</b>{item.height}</h3>
        <h3><b>Mass :</b>{item.mass}</h3>

        </div>
      )
    });
    return (
      <div className="App">
          <h1>DATA:</h1>
          {allData}
          
      </div>
    )
  }
}
