import React, { Component } from 'react'

export default class Images extends Component {
constructor(props) {
    super(props)

    this.state = {
         url:'',
         isloading:false,
         fetchedData:[]
    }
}
static getDerivedStateFromProps(props, state) {
    if(state.url !== props.url){
        return(state.url=props.url)
    }else{
        return null
    }
}
componentDidMount() {
    this.setState({isloading:true})
const url = this.state.url
fetch(url)
.then((response)=>{
    return(response.json())
}).then((data)=>{
    console.log(data)
    this.setState({fetchedData:data.hits,isLoading:false})
})

}
    render() {
        let image_array=null;
        let loading=null;

        if(this.state.isLoading){
            loading=<div>
                <h2>is loading ...</h2>
                <div className="load-div"></div>
            </div>
        }
if(this.state.fetchedData.length>0){
    image_array=this.state.fetchedData.map((item,index)=>{
        let style={width:item.previewWidth,
                    height:item.previewHeight,
                    display:'inline-block'}
                    return(
                        <div key={index} style={style}>
                            <a href={item.largeImageURL} target="_blank">
                            <img src={item.previewURL} alt={item.tags} />
                            </a>
                        </div>
                    )
    })
}

        return (
            <div>
                {loading}
                {image_array}
            </div>
        )
    }
}
