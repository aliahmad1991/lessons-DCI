const initialState={
    x:0,
    y:0

};
 function reducer(state=initialState,action){
    switch(action.type){
        case 'INCREMENT_X':
            return {
                x:state.x+1,
                y: state.y
                
            }
            case 'INCREMENT_Y':
            return {
                x:state.x,
                y:state.y+1
                
            }


            default:
                return state;
    }

}
export default reducer;