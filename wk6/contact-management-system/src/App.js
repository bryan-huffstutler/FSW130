import React from "react"
import './App.css';
import {connect} from "react-redux"
import {addContact, deleteContact} from "./redux"
import {useDispatch} from 'react-redux'
import Form from './components/Form'
import Contact from './components/Contact'

function App (props) {
  const dispatch = useDispatch()
  function delContact (e) {
    const id = e.target.parentNode.id
    dispatch(deleteContact(id))
  }
    return (
      <div>
        <Form />
        {props.contacts.map((x) => {           
          return <Contact name = {x.name} number = {x.number} id={x.id} onClick={delContact}/>
        })}
      </div>
    );
  }

function mapStateToProps (state) {
  return {
    contacts: state
  }
}

export default connect(mapStateToProps, {addContact, deleteContact})(App)