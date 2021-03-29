
import {combineReducers, createStore} from 'react-redux'
import  { addTvShow, deleteTvShow, tvShowReducer} from "./tvShowReducer"
import { addMovie, deleteMovie, movieReducer} from './movieReducer'


const rootReducer = combineReducers({
  movieReducer,
  tvShowReducer
})

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))
export default store