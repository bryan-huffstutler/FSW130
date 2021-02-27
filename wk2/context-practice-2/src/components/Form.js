import React from 'react'
import { ContextConsumer } from './Context'

function Form() {
  return (

    <ContextConsumer>
      {context => (
        <div>
          <form onSubmit={context.sub}>
            <h2>Enter a new movie</h2>

            <label>Movie Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter Movie Title"
              onChange={context.change}>
            </input>

            <label>Producers' Name</label>
            <input
              type="text"
              name="producer"
              placeholder="Enter Producers' Name"
              onChange={context.change}>
            </input>

            <label>Directors' Name</label>
            <input
              type="text"
              name="director"
              placeholder="Enter Directors' Name"
              onChange={context.change}>
            </input>

            <label>Release Date</label>
            <input
              type="text"
              name="releaseDate"
              placeholder="Enter Release Date"
              onChange={context.change}>
            </input>

            <button>Submit</button>
          </form>
        </div>


      )}

    </ContextConsumer>

  )
}

export default Form