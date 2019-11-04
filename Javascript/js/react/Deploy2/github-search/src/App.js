import React, { Component } from 'react';
import './App.css';
const API='https://api.github.com/users';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
     username:'facebook',
     name:'',
     avatar:'',
     loaction:'',
     repos:'',
     followers:'',
     homeUrl:'',
     notfound:''
    }
  }
  fetchProfile(username){
let url = API+'/'+username;
fetch(url)
.then((res)=>res.json())
.then((data)=>{
  this.setState({
  username:data.login,
  name:data.name,
  avatar:data.avatar_url,
  location:data.location,
  repos:data.public_repos,
  followers:data.followers,
  following:data.following,
  homeurl:data.home_url,
  notfound:data.message
})
})
.catch((error)=>console.log('Oops! there is a Problem'));

}

componentDidMount(){
  this.fetchProfile(this.state.username);
}


  render() {
    return (
      <div>
        <SearchProfile fetchProfile={this.fetchProfile}/>
        <Profile data={this.state}/>
      </div>
    )
  }

}
 class SearchProfile extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handelForm}>
          <label>
            <input type='search' ref={(ref)=>this.search=ref}
            placeholder="Please type a Username + Enter"
            />
          </label>
        </form>
      </div>
    )
  }
  handelForm(e){
    e.preventDefault();
    let username = this.search.value;
    this.props.fetchProfile(username);
    this.search.value='';

  }
}


 class Profile extends Component {
  render() {
    let data=this.props.data;
    let followers=`${data.homeUrl}/followers`;
    let repositories=`${data.homeUrl}?tab=repositories`;
    let following =`${data.homeUrl}/following`;
    if(data.notfound==='Not Found'){
    return(
<div className='notfound'>
  <h2>Oops !!!</h2>
  <p>The Component that you are looking for is not found. try again !!!</p>

</div>
    )}else
    return(
      <section>
        <div>
          <a href={data.homwUrl} target="_blank" title={data.name}>
          <img src={data.avatar}/>
           </a>
          <h2>
            <a href={data.homeUrl} target="_blank">{data.name}</a>
          </h2>
         
        </div>
      </section>
    )
    return (
      <div>
        
      </div>
    )
  }
}


export {SearchProfile};

