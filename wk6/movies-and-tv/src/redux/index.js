import { createStore } from 'redux'
import {movieReducer} from "./moviesReducer"
import tvShowReducer from "./tvShowReducer"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  movieReducer,
  tvShowReducer
})

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

export default store