import React from 'react'

function Contact (props) {
  return (
    <div id={props.id} className = "contact">
      <h1>{props.name}</h1>
      <h2>{props.number}</h2>
      <button onClick = {props.onClick}>Delete</button>
    </div>
  )
}

export default Contact