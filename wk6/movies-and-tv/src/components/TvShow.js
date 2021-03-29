import React from 'react'

function TvShow (props) {
  return (
    <div id = {props.id} className = "item">
      <h2>{props.name}</h2>
      <button onClick={props.onClick}>Delete</button>
    </div>
    
  )
}

export default TvShow