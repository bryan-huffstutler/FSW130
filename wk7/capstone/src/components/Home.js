import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addItem, deleteItem, filterItem} from '../redux/itemsReducer'
import {useDispatch} from 'react-redux'
import Item from './Item'
import Form from './Form'

function Home (props) {
  const [itemToggle, setItemToggle] = useState(false)
  
  const dispatch = useDispatch()

  function handleFilter (event, option) {
    event.preventDefault()
    dispatch(filterItem(option))
    setItemToggle(true)
  }

  function setToFalse () {
    setItemToggle(false)
  }

  function addCart (id) {
    dispatch(addItem(id))
  }


  return (
    <div id="home">
      <img id="outletImg" src="http://cdn.shopify.com/s/files/1/0264/6772/9451/files/Discount_Outlet_Logo_Stacked_23289_7452ec58-cd4d-4a94-a5c9-2d3faf888b97_1200x630.png?v=1605107896"/>
      <Form filter={handleFilter} toggleFalse={setToFalse}/>
      <div id="homeItems">
        {itemToggle ? props.filteredItems.map(x => {
          return <Item  {...x} addCart={addCart} key={x._id}/>
        }) : props.items.map(x => {
          return <Item  {...x} addCart={addCart} key={x._id}/>
        })}
      </div>
    </div>
  )
}

function mapStateToProps (state){
  console.log(state)
  return {
    items: state.items,
    filteredItems: state.filteredItems
  }
}

export default connect(mapStateToProps, {addItem, deleteItem})(Home)