import React, { Component } from 'react';
import{connect} from 'react-redux';
class Aw extends Component {
    render() {
        return (
            <div>
                A , x = {this.props.x}
                <hr/>
                <button onClick={this.props.incrementX}>Increment X</button>

            </div>

        )
    }
}
//redux specific mappers
const mapStateToProps=(state)=>({
    x:state.x
}) ;
const mapDispatchToProps = (dispatch)=>({
    incrementX:()=>dispatch({type:'INCREMENT_X'})
});

export default connect(mapStateToProps,mapDispatchToProps)(Aw);