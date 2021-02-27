import React from 'react'
import {ListContextConsumer} from './context'

function Form (props) {
  return (
    <ListContextConsumer>
      {items => (
        <div id="formInputs">
          <form onSubmit={items.sub}>
            <label>Title</label>
            <input onChange={items.change} type="text" name="name" placeholder="Enter Title"></input>

            <label>Description</label>
            <input onChange={items.change} type="text" name="desc" placeholder="Enter Description"></input>

            <label>Image URL</label>
            <input onChange={items.change} type="text" name="site" placeholder="Enter Image URL"></input>

            <button>Submit</button>
          </form>
          
        </div>
      )}
      
    </ListContextConsumer>
      
  )
}

export default Form