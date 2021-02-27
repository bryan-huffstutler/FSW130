import React from 'react'
import { ListContextConsumer } from './context'

function Card (props) {
  let count = 1
  return (
    <ListContextConsumer>
      {list => (
        <div id="card">          
            {list.list.map((item) => {
              count += 1
              console.log(count)
              return (
                <div id = {count} key = {count}>
                  <h2>{item.name}</h2>
                  <h4>{item.desc}</h4>
                  <img src={item.site}/>
                  <br/>
                  <button className="cards" onClick={list.delete}>Delete</button>
                </div>
              )
            })}
        </div>      
      )}
    </ListContextConsumer>
  )
}

export default Card