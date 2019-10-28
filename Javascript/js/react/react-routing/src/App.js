import React from 'react'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Error from './Components/Error';
import Navigator from './Components/Navigator';

 function App() {
  return (
   <BrowserRouter>
  <Navigator/>
   <Switch>
   <Route path="/" component={Home} exact/>
   <Route path="/about" component={About}/>
   <Route component={Error}/>
   </Switch>
   </BrowserRouter>
  )
}
export default App;