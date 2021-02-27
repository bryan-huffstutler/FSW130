import React from 'react'

const { Provider, Consumer } = React.createContext()

class ContextProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [
        {
          title: "The Matrix",
          producer: "Joel Silver",
          director: "The Wachowskis",
          releaseDate: "March 31, 1999"
        },
        {
          title: "300",
          producer: "Gianni Nunnari, Bernie Goldman, Mark Canton, Jeffrey Siler",
          director: "Zack Snyder",
          releaseDate: "March 9, 2007"
        },
        {
          title: "Gremlins",
          producer: "Michael Finnell, Frank Marshall",
          director: "Joe Dante",
          releaseDate: "June 8, 1984"
        },
        {
          title: "Boogie Nights",
          producer: "JoAnne Sellar, John S. Lyons, Michael DeLuca, Lloyd Levin",
          director: "Paul Thomas Anderson",
          releaseDate: "October 10, 1997"
        }
      ],
      title: "",
      producer: "",
      director: "",
      releaseDate: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let newEntry = {
      title: this.state.title,
      producer: this.state.producer,
      director: this.state.director,
      releaseDate: this.state.releaseDate
    }
    this.state.movies.push(newEntry)
    this.setState({
      title: "",
      producer: "",
      director: "",
      releaseDate: ""
    })
  }

  render() {
    return (
      <Provider value={{ movies: this.state.movies, sub: this.handleSubmit, change: this.handleChange}}>
        {this.props.children}
      </Provider>
    )
  }
}

export { ContextProvider, Consumer as ContextConsumer }