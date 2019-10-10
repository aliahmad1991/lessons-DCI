import React,{Component} from 'react';
import TableHeader from './components/TableHeader.js';
import TableBody from './components/TableBody.js';
import './App.css';

class App extends Component{
  state = {
list:[
  {id:1,name:'Ali',age:28,email:'Ali@dci.com'},
  {id:2,name:'Andrew',age:202,email:'Andrew@dci.com'},
  {id:3,name:'Ahmad',age:50,email:'Ahmad@dci.com'},
  {id:4,name:'Mamad',age:80,email:'Mamad@dci.com'},
]
  }
render(){
  return(
    <div className='App'>
      <table>
        <thead>
          <tr>
            <TableHeader list={this.state.list}/>
        </tr>
        </thead>
        <tbody>
          <TableBody list={this.state.list}/>
        </tbody>
      </table>
    </div>
  );
}
}

export default App;
