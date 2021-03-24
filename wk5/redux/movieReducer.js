function addMovie (movie){
  return {
    type: "ADD_MOVIE",
    payload: movie
  }
}

function deleteMovie (movie){
  return {
    type: "DELETE_MOVIE",
    payload: movie
  }
}

function getAllMovies () {
  return {
    type: "GET_ALL_MOVIES"
  }
}

function movieReducer (state = {movies: []}, action) {
  switch(action.type){
    case "ADD_MOVIE": 
      
      return {
        movies: [...state.movies, action.payload]
      }
    case "DELETE_MOVIE":
      const oldArr = state.movies
      const newArr = oldArr.filter(movie => movie !== action.payload)
      return {
        movies: newArr
      }
    default: 
      return state
  }
}


module.exports = {
  addMovie, deleteMovie, movieReducer
}