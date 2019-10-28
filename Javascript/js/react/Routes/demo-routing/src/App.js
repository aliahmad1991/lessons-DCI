import React, { Component } from 'react';
import Home from './component/Home';
import About from './component/About';
import Dashboard from './component/Dashboard';
import Topics from './Topics/topics';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";


 class App extends Component {
  render() {
    return (
     
       <Router>
         <div>
           <ul className="topnav">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/Topics">Topics</Link>
              </li>
           </ul>
          
       
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/topics">
              <Topics/>
            </Route>
          </Switch>            
          </div> 
      </Router>
       
    );
  }
}
export default App;


