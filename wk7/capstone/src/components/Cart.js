import React from 'react'
import {addItem, deleteItem} from '../redux/itemsReducer'
import CartItem from './CartItem'
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useState} from 'react'

function Cart (props){
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  function delItem (id) {
    dispatch(deleteItem(id))
    setToggle(!toggle)
  }

  return (
    <div id='cart'>
      <div id='cartHeader'>
        {props.cart.length == 0 ? <h1>Your cart is empty! Don't miss out on the deals!!</h1> : <h1>The amazing deals you're getting TODAY!</h1>}
      </div>
     
      <div id='cartCost'>
        {props.cart.length == 0 ? "" : <h3>Your Total: ${props.cart.reduce((sum, item) => {
        return sum + item.cost
        }, 0)}</h3>}
      </div>
      <div id='cartItems'>
        {props.cart.map(x => <CartItem {...x} key = {x._id} deleteItem={delItem}/>)}
      </div>
      
    </div>
  )
}

function mapStateToProps (state){
  return {
    items: state.items,
    cart: state.cart
  }
}

export default connect(mapStateToProps, {addItem, deleteItem})(Cart)