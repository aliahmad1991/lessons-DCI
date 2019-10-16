import React, { Component } from 'react'
import Ctime from './Ctime'


export default class Clocks extends Component {
    constructor(props) {
        super(props)
        this.state = {
             countries:['Europe/Berlin','Asia/Kabul','America/Bogota'],
             time:new Date()
        }
    }
    componentDidMount(){
        this.timer = setInterval(
            () => this.tick(),1000
        );
    }
    tick = ()=>{
        this.setState({time:new Date()})
    }

    render() {
        return (
            <div>
             <Ctime time={this.state.time} timezone={this.state.countries[0]}/>
            </div>
        )
    }
}
