import React from 'react';
import Input from './input';
import './App.css';

const handleSubmit=(e) => {
  e.preventDefault();
  //alert('submit');
  console.log(e.target["todo"].value);
}


function App() {
  return (
    <div className="App">
     <h2>Control component in React</h2>
<form onSubmit={handleSubmit}>
<Input  />
<button>Submit</button>



</form>
<div className="div"></div>

    </div>
  );
}

export default App;
