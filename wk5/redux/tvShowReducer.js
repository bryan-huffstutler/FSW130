function addTvShow (tvShow)  {
  return {
    type: "ADD_TVSHOW",
    payload: tvShow
  }
}

function deleteTvShow (tvShow){
  return {
    type: "DELETE_TVSHOW",
    payload: tvShow
  }
}

function getAllTvShows (){
  return {
    type: "GET_ALL_TVSHOWS"
  }
}

const initialState = {tvShows: []}
function tvShowReducer (state = initialState, action){
  switch(action.type){
    case "ADD_TVSHOW": 
      return {
        tvShows: [...state.tvShows, action.payload]
      }
    case "DELETE_TVSHOW":
      const oldArr = state.tvShows
      const newArr = oldArr.filter(tvShow => tvShow !== action.payload)
      return {
        tvShows: newArr
      }
    default:
      return state
  }
}

module.exports = { 
  addTvShow, deleteTvShow, tvShowReducer
}