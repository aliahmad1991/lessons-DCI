import React from 'react';
import Inputfield from './inputField';
import './App.css';
import SearchResult from './SearchResult';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div className="Head">
     <p>User Search</p>
<Header className='Header' />
</div>
<Inputfield />
<SearchResult/>

    </div>
  );
}

export default App;
