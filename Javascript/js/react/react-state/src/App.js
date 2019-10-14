import React, { Component } from 'react'
import Person from './Person';
import './App.css';
export default class App extends Component {
  state={
person:[
  {name:" Max",city:" Hamburg",job:" dentist"},
  {name:" Lax",city:" Kiel",job:" Teacher"},
  {name:" Jax",city:" Berlin",job:" Taxi driver"}
],
country:"Germany",
currency:"Euro"

  }
 changeData=()=>{
  //alert(this.state.person[2].name);
  this.setState({
    person:[
      {name:" Fax",city:" London",job:" Doctor"},
      {name:" Hax",city:" Manchester",job:" Sport Teacher"},
      {name:" Tax",city:" Lipzig",job:" Bus driver"}
    ],
   
      })


 }
  render() {
    return (
      <div className="App">
        <h1>this is React Class Component</h1>
        <Person name=" Lars" city=" Hannover" job=" web developer"></Person>
        <Person name={this.state.person[0].name} city={this.state.person[0].city} job={this.state.person[0].job}></Person>
        <Person name={this.state.person[1].name} city={this.state.person[1].city} job={this.state.person[1].job}></Person>
        <Person name={this.state.person[2].name} city={this.state.person[2].city} job={this.state.person[2].job}>
          <button onClick={this.changeData}>Click here</button>
        </Person>



      </div>
    )
  }
}
