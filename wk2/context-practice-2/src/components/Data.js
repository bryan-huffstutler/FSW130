import React from 'react'
import { ContextConsumer } from './Context'

function Data(props) {
  let count = 0
  return (
    <div id="movieBody">
      <h1 id="moviesListHeader">Favorite Movies</h1>
      <ContextConsumer>
        {context => (
          <div>
            {context.movies.map(movie => {
              count += 1
              return (
                <div id="movieListItem" key={count}>
                  <h1>{movie.title}</h1><br />
                  <h4>Director(s): <b>{movie.director}</b></h4><br />
                  <h4>Producer(s): <b>{movie.producer}</b></h4><br />
                  <h2>ReleaseDate: {movie.releaseDate}</h2>
                </div>
              )

            })}
          </div>
        )}

      </ContextConsumer>
    </div>

  )
}

export default Data