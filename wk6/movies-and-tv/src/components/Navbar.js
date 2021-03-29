import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import TvShows from '../components/TvShows'
import Movies from '../components/Movies'

function Navbar () {
  return (
    <div>
      <div id='links'>
        <Link to = "/">Home</Link>
        <Link to = "/TvShows">TV Shows</Link>
        <Link to = "/Movies">Movies</Link>
      </div>

      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>

        <Route path = "/Movies">
          <Movies />
        </Route>

        <Route path = "/TvShows">
          <TvShows />
        </Route>
      </Switch>
    </div>
  )
}

export default Navbar