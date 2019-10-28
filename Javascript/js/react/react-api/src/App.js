import React, { Component } from 'react';
import Inputfield from './components/Inputfield';
import Images from './components/Images';
export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       root:'https://pixabay.com/api',
       key:'13971375-1b40a5bb667fb9ed7f8b139be',
       query:'',
       url:'',
       letSearch:false,
       loadedImages:null
    }
  }
savequery=(e)=>{
  this.setState({query:e.target.value,letSearch:false})
}
  
searchImages = () =>{
  const newURL = this.state.root+'?key='+this.state.key+'&per_page=200'+'&q='+this.state.query+'+';
  console.log(newURL)
  this.setState({url:newURL,letSearch:true,loadedImages:null})

}


loadImage=()=>{
  let newImages = <Images url={this.state.url} />;
  this.setState({loadedImages:newImages,letSearch:false})
}
  render() {
    if(this.state.letSearch){
      this.loadImage()
    }
    return (
      <div>
        <Inputfield change={this.savequery} click={this.searchImages} />
        {this.state.loadedImages}
      </div>
    )
  }
}
