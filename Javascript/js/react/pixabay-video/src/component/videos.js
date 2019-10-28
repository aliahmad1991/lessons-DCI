import React, { Component } from 'react'

export default class Videos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             url:'',
             isLoading:false,
             fetchedData:[]
        }
    }
    static getDerivedStateFromProps(state,props) {
        if(state.url!==props.url){
            return state.url=props.url
        }else{
            return null}
    }
componentDidMount() {
    this.setState({isLoading:true});
    let url = this.state.url;
    fetch(url)
    .then((res)=>{return res.json();
    })
    .then((data)=>{
this.setState({fetchedData:data.hits,isLoading:false})
    })
}


    render() {
        let video_array=null;
        if(this.state.fetchedData.length>0){
            video_array=this.state.fetchedData.map((item,index)=>{
                return(
                <div key={index}>
                <p>{item.id}</p>
                </div>)
            })

        }
        return (
            <div>
          {video_array}
            </div>
        )
    }
}
