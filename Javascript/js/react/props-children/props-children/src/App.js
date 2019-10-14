import React from 'react';
import Person from './Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Props Children</h1>
      <Person name=" Mona" city=" Hamburg" job=" React Watcher">
        Her name is Tazagol
        </Person>
      <Person name=" Mina" city=" Berlin" job=" JS Watcher"/>
      <Person name=" Lona" city=" hanover" job=" CSS Watcher">
     
        <h2>My name is Ali and my job is Web developping</h2>
        <h4> I love Coding</h4>
  
      </Person>

     
    </div>
  );
}

export default App;
