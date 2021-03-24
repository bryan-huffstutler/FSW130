const redux = require('redux')
const {combineReducers, createStore} = redux
const { addTvShow, deleteTvShow} = require("./tvShowReducer")
const { addMovie, deleteMovie} = require('./movieReducer')
const {movieReducer} = require("./movieReducer")
const {tvShowReducer} = require("./tvShowReducer")

const rootReducer = combineReducers({
  movieReducer,
  tvShowReducer
})

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

store.dispatch(addTvShow("Cheers"))
store.dispatch(addTvShow("Dexter"))
store.dispatch(addTvShow("Snowpiercer"))
store.dispatch(addTvShow("Spartacus"))
store.dispatch(addMovie("Batman")) 
store.dispatch(addMovie("Superman"))
store.dispatch(addMovie("Wonder Woman"))
store.dispatch(addMovie("Pitch Black"))
store.dispatch(deleteMovie("Batman"))
store.dispatch(deleteMovie("Superman"))
store.dispatch(deleteMovie("Wonder Woman"))
store.dispatch(deleteMovie("Pitch Black"))
store.dispatch(deleteTvShow("Cheers"))
store.dispatch(deleteTvShow("Dexter"))
store.dispatch(deleteTvShow("Snowpiercer"))
store.dispatch(deleteTvShow("Spartacus"))