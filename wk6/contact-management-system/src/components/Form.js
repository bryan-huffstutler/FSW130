import React from 'react'
import {useDispatch} from 'react-redux'
import {addContact} from "../redux"
import uuid from 'react-uuid'

function Form (props) {
  const dispatch = useDispatch()
  
  function onSubmit (e) {
    e.preventDefault()
    const name = document.getElementById("name")
    const number = document.getElementById("number")
    dispatch(addContact({"name": name.value, "number": number.value, "id": uuid()}))
    
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter Name'
          name='name'
          id='name'
        /><br/>

        <input
          type='text'
          placeholder='Phone Number'
          name='number'
          id='number'
        /><br/>

        <button>Add</button>
      </form>
    </div>
  )
}

export default Form