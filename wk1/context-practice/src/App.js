import React from 'react'
import './index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ThemeContext from './themeContext'

class App extends React.Component {
  constructor () {
    super()
    this.state = ({
      theme: "light"
    })
    this.handleClick = this.handleClick.bind(this)
  }
//The handleClick controls the theme toggle when the buttons are clicked
  handleClick(e) {
    this.setState ({
      theme: e.target.id    
    })
  }

  render() {
    //moved ThemeContext.Provider into the app instead of index.js in order to control theme with state i.e. theme={this.state.theme}
      return (
        //this ternary controls the full background color to not see any gaps between the components
      <div className={`${this.state.theme}-theme}`} style={{backgroundColor: this.state.theme == 'light' ? "#b3ecff" : "black", height: "100vh", width: "100vw"}} >
        
        <ThemeContext.Provider value={this.state.theme}>

          <ThemeContext.Consumer>
            {theme => (
                <Header theme={theme}/>
            )}        
          </ThemeContext.Consumer>

          <ThemeContext.Consumer>
            {theme => (
                <Main theme={theme}/>
            )}        
          </ThemeContext.Consumer>
           
          <button onClick={this.handleClick} id="light" className={`light-theme`}>Light Theme</button> 
          <button onClick={this.handleClick} id="dark" className={`dark-theme`}>Dark Theme</button>
          

          

          <ThemeContext.Consumer>
            {theme => (
                <Footer theme={theme}/>
            )}        
          </ThemeContext.Consumer>          

        </ThemeContext.Provider> 

      </div>
    )
  }
  
}

export default App;
