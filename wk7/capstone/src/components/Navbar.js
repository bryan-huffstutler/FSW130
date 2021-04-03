import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Cart from '../components/Cart'

function Navbar () {
  return (
    <div id='linksDiv'>
      <div id='links'>
        <Link to = "/">Home</Link>
        <Link to ='/Cart'>Cart</Link>
        <Link to ="/About">About</Link>
        <Link to ="/Contact">Contact Us</Link>
      </div>

      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>

        <Route path = '/Cart'>
          <Cart />
        </Route>

        <Route path = '/About'>
          <About />
        </Route>

        <Route path = '/Contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  )
}

export default Navbar