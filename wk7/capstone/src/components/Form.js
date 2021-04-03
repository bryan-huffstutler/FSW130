import React from 'react'
import {useState} from 'react'

function Form (props) {
  const [option, setOption] = useState([])

  function handleChange () {
    const filterDrop = document.getElementById('filterDrop')
    console.log(filterDrop.value)
    return setOption(filterDrop.value)
  }


  return (
    <div id='filterForm'>
      <form onSubmit={(event) => props.filter(event, option)} >
        <label>--Filter Items--</label><br/>
        <select id='filterDrop' onChange={handleChange}>
          <option value = ""></option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Food">Food</option>
          <option value="Games">Games</option>
        </select>

        <button>Submit</button>
      </form>
      <button onClick={props.toggleFalse}>Reset</button>
      
    </div>
  )
}

export default Form