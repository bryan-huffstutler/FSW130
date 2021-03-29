import React from 'react'
import {connect} from 'react-redux'
import {addMovie, deleteMovie} from '../redux/moviesReducer'
import {useDispatch} from 'react-redux'
import Movie from './Movie'
import uuid from 'react-uuid'

function Movies (props) {
  const dispatch = useDispatch()

  function delMovie (e) {
    const id = e.target.parentNode.id
    dispatch(deleteMovie(id))
  }
  function onSubmit(event) {
    event.preventDefault()
    let movie = document.getElementById('newMovie')
    dispatch(addMovie({"name": movie.value, "id": uuid()}))
  }

  return (
    <div>
      <form onSubmit = {onSubmit} className="form">
        <input
          id="newMovie"
          type="text"
          name="addMovie"
          placeholder="Enter New Movie"  
        />

        <button>Add Movie</button>
      </form>

      {props.movies.map((x) => {
        return <Movie name = {x.name} id={x.id} onClick={delMovie} key={uuid()}/>
      })}
    </div>
  )
}

function mapStateToProps (state){
  console.log(state)
  return {
    movies: state.movieReducer.movies
  }
}

export default connect(mapStateToProps, {addMovie, deleteMovie})(Movies)