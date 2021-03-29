import React from 'react'
import {connect} from 'react-redux'
import {addTvShow, deleteTvShow} from '../redux/tvShowReducer'
import {useDispatch} from 'react-redux'
import TvShow from './TvShow'
import uuid from 'react-uuid'

function TvShows (props) {
  const dispatch = useDispatch()

  function delTvShow (e) {
    const id = e.target.parentNode.id
    dispatch(deleteTvShow(id))
  }
  function onSubmit(event) {
    event.preventDefault()
    let newTvShow = document.getElementById('newTvShow')
    dispatch(addTvShow({"name": newTvShow.value, "id": uuid()}))
  }

  return (
    <div>
      <form onSubmit = {onSubmit} className="form">
        <input
          id="newTvShow"
          type="text"
          name="addTvShow"
          placeholder="Enter New TV Show"  
        />

        <button>Add TV Show</button>
      </form>

      {props.tvShows.map((x) => {
        return <TvShow name = {x.name} id={x.id} onClick={delTvShow} key={uuid()}/>
      })}
    </div>
  )
}

function mapStateToProps (state){
  
  return {
    tvShows: state.tvShowReducer.tvShows
  }
}

export default connect(mapStateToProps, {addTvShow, deleteTvShow})(TvShows)