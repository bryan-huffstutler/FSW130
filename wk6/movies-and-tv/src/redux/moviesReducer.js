export function addMovie (movie){
  return {
    type: "ADD_MOVIE",
    payload: movie
  }
}

export function deleteMovie (movie){
  return {
    type: "DELETE_MOVIE",
    payload: movie
  }
}

export function movieReducer (state = {movies: []}, action) {
  switch(action.type){
    case "ADD_MOVIE": 
      
      return {
        movies: [...state.movies, action.payload]
      }
    case "DELETE_MOVIE":
      const oldArr = state.movies
      const newArr = oldArr.filter(movie => movie.id !== action.payload)
      return {
        movies: newArr
      }
    default: 
      return state
  }
}