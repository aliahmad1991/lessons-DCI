import React, { Component } from 'react';
import{connect} from 'react-redux';
class Aw extends Component {
    render() {
        return (
            <div>
                <div>
                A , x = {this.props.x}
               
                <button onClick={this.props.incrementX}>Increment X</button>


                </div>
                <hr/> 
                <div> 
                    B , y = {this.props.y}
                <button onClick={this.props.incrementY}>Increment Y</button>              
                </div>
           </div>

        )
    }
}
//redux specific mappers
const mapStateToProps=(state)=>({
    x:state.x,
    y:state.y
    
    
  
}) ;

const mapDispatchToProps = (dispatch)=>({
    incrementX:()=>dispatch({type:'INCREMENT_X'}),
     incrementY:()=>dispatch({type:'INCREMENT_Y'})
    

});





export default connect(mapStateToProps,mapDispatchToProps)(Aw);