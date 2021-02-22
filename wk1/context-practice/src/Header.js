import React from 'react'

function Header(props) {
  
    return (
      <div className = {`${props.theme}-theme`} id='nav'>
        <h1>HOME</h1>
        <h1>ABOUT</h1>
        <h1>SERVICES</h1> 
      </div>
    )
  
}

export default Header