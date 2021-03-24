import {createStore} from 'redux'

//actions
export function addContact (payload) {
  return {
    type: "ADD_CONTACT",
    payload: payload
  }
}

export function deleteContact (payload) {
  return {
    type: "DELETE_CONTACT",
    payload: payload
  }
}

//reducer
function reducer(state = [], action){
  switch(action.type){
    case "ADD_CONTACT":
      return [...state, action.payload]
    case "DELETE_CONTACT":
      const newArr = state.filter(x => x.id !== action.payload)
      return newArr
    default: 
      return state 
    
  }
}

//store
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store