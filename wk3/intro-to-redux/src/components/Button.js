import React from "react"

function Button(props) {
    return (
        <button className='button' onClick={props.onClick}>{props.description}</button>
    )
}

export default Button