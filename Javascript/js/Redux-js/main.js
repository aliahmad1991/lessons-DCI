// Here we import redux and take the method createStore

const redux = require ('redux');
const createStore = redux.createStore;

//the first value for our store
const firstStore={
    name:'Farhan',
    address:'Berlin',
    job:'developer'
}
const reducer = (state=firstStore,action)=>{
    if(action.type === 'change-Name'){
        return({
            ...state,
            name:action.value
        })
    }
    if(action.type === 'change-Address'){
        return({
            ...state,
            address:action.value
        })
    }
    return state
}

// create store with the redux function createStore
const store = createStore(reducer)
console.log(store.getState())

store.subscribe(()=>{
console.log('store has been updated',store.getState())
})
// dispatch Action
store.dispatch({
    type:'change-Name',
    value:'Maria'

})
store.dispatch({
    type:'change-Address',
    value:'Hamburg'
})

console.log(store.getState())


