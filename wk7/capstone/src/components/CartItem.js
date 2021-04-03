import React from 'react'


function CartItem (props) {


  return (
    <div id={props._id}>
      <h3>{props.name}</h3>
      <img src={props.image} alt="description"/>
      <h5>{props.cost}</h5>
      <h4>Available: {props.sold ? "No" : "Yes"}</h4>

      {props.type === "Games" ? <h5>Available Editions: {props.colors.map(edition => `${edition} `)}</h5> : <h5>Available Colors: {props.colors.map(color => `${color} `)}</h5>}

      <button onClick={() => props.deleteItem(props._id)}>Delete</button>

    </div>
  )
}

export default CartItem