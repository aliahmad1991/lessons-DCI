import React from 'react';
import './App.css';
import Image0 from './img/0.jpg';
import Image1 from './img/1.jpg';
import Image2 from './img/2.jpg';
import Image3 from './img/3.jpg';
import Image4 from './img/4.jpg';
import Image5 from './img/5.jpg';
import Image6 from './img/6.jpg';

function App() {  


 let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
                 "w","x","y","z"]
 let all = letters.map(item=>{
    return(<button value={item} onClick={this}>{item}</button>)
  })
  return (
    <div className="App">
    <img src={Image0} />
      <div className="btn">
      {all}
    </div>

    </div>
  );
}

export default App;
