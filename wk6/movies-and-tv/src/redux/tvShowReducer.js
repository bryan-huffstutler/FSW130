export function addTvShow (tvShow)  {
  return {
    type: "ADD_TVSHOW",
    payload: tvShow
  }
}

export function deleteTvShow (tvShow){
  return {
    type: "DELETE_TVSHOW",
    payload: tvShow
  }
}

const initState = {
  tvShows: []
}
export default function tvShowReducer (state = initState, action){
  switch(action.type){
    case "ADD_TVSHOW": 
      return {
        tvShows: [...state.tvShows, action.payload]
      }
    case "DELETE_TVSHOW":
      const oldArr = state.tvShows
      const newArr = oldArr.filter(tvShow => tvShow.id !== action.payload)
      return {
        tvShows: newArr
      }
    default:
      return state
  }
}