import React, { Component } from 'react';
import InputField from './component/inputField';
import './App.css';
import Videos from './component/videos'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       root:'https://pixabay.com/api/videos/',
       key:'13971375-1b40a5bb667fb9ed7f8b139be',
       query:'',
       url:'',
       letSearch:false,
       loadedVideos:null

    }
  }
  saveQuery = (e) =>{this.setState({query:e.target.value,letSearch:false})}

  searchVideos = ()=>{
let words = this.state.query.split(' ');
let newUrl = this.state.root+'?key='+this.state.key+'&q=';
words.forEach((word)=>{
  newUrl+=`${word}+`
  console.log(newUrl);
})
this.setState({url:newUrl, loadedVideos:null})
  }
loadVideos= () =>{
let newVideos= <Videos url={this.state.url} />
this.setState({
  loadedVideos:newVideos,letSearch:false
})
}


  render() {
    if(this.state.letSearch===true){
this.loadVideos();
    }
    return (
      <div>
        <InputField change={this.saveQuery} click={this.searchVideos} />
      </div>
    )
  }
}
