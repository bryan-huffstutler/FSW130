import React from 'react';
const { Provider, Consumer } = React.createContext();


class ListContextProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [{
        name: "Turkey",
        desc: "Very Ugly",
        site: "http://photos1.blogger.com/blogger/761/1659/1600/turkey_elliottzone.jpg"
      },
      {
        name: "Ugly Sweater",
        desc: "Very ugly sweater",
        site: "https://images-na.ssl-images-amazon.com/images/I/91uLvZrpJ%2BL._AC_UX342_.jpg"
      },
      {
        name: "Baby",
        desc: "Ugly Baby",
        site: "https://i.ytimg.com/vi/K_A0qv-wEaw/hqdefault.jpg"
      }],
      name: "",
      desc: "",
      site: ""
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };
  //handleDelete DOM Manipulation style, I tried to do it with .filter() but cannot access parentNode.id from this array as the id is being given in a different file.
  handleDelete(e) {
    let deleteBtn = document.getElementsByClassName("cards")
    console.log(deleteBtn)
    for (var i = 0; i < deleteBtn.length; i++) {
      if (e.target == deleteBtn[i]) {
        let x = deleteBtn[i].parentNode
        let y = x.parentNode
        y.removeChild(x)
      }
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let newEntry = {
      name: this.state.name,
      desc: this.state.desc,
      site: this.state.site
    }
    this.state.list.push(newEntry)
    this.setState({
      name: "",
      desc: "",
      site: ""
    })
  }

  render() {
    const items = this.state.list
    return (
      <Provider value={{ list: items, delete: this.handleDelete, sub: this.handleSubmit, change: this.handleChange }} >
        { this.props.children}
      </Provider>
    )
  }
}

export { ListContextProvider, Consumer as ListContextConsumer };