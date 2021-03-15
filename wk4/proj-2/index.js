//State
const initialState = {
  contacts: []
}

//Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NEW_PERSON':
      var newArr = state.state.contacts
      newArr.push(action.payload)
      return {
        state: {
          contacts: newArr,
          newContact: action.payload
        }
      }

      case 'REMOVE_PERSON':
        const arrCopy = state.state.contacts
        let x = parseInt(action.payload)
        const updatedArr = arrCopy.filter(person => person.id !== x)
        return {
          state: {
            contacts: updatedArr
          }
        }

        default:
          return {
            state
          }

  }
}

//Creating Store
const store = Redux.createStore(reducer)


//Actions
function addNewPerson(person) {
  return {
    type: 'ADD_NEW_PERSON',
    payload: person
  }
}

function removePerson(person) {
  return {
    type: 'REMOVE_PERSON',
    payload: person
  }
}

//Render function for subscribe
function render() {
  let state = store.getState()
  const contacts = document.getElementById('contacts')
  let x = state.state.newContact
  console.log("in the render", state.state.contacts)
  let div = document.createElement('div')
  let h3 = document.createElement('h3')
  let h4email = document.createElement('h4')
  let h4phone = document.createElement('h4')
  let btn = document.createElement('button')
  btn.textContent = 'Delete'
  btn.classList.add('del')
  h4phone.innerHTML = `Phone: ${x.phone}`
  h4email.innerHTML = `Email: ${x.email}`
  h3.innerHTML = `Name: ${x.firstName} ${x.lastName}`
  div.id = state.state.contacts.length - 1
  btn.id = state.state.contacts.length - 1
  btn.addEventListener('click', function (e) {
    let x = btn.parentNode
    console.log(x)
    if (e.target.id == btn.id) {
      contacts.removeChild(x)
      store.dispatch(removePerson(x.id))
    }
  })
  div.appendChild(h3)
  div.appendChild(h4email)
  div.appendChild(h4phone)
  div.appendChild(btn)
  contacts.appendChild(div)
}

//Subscribe
store.subscribe(() => console.log(store.getState()))

//Event Listeners
document.getElementById('sub-add')
  .addEventListener('click', function (e) {
    e.preventDefault()
    const firstName = document.getElementById('add-first-name').value
    const lastName = document.getElementById('add-last-name').value
    const email = document.getElementById('add-email').value
    const phone = document.getElementById('add-phone').value
    store.dispatch(addNewPerson({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      id: store.getState().state.contacts.length
    }))
    render()
  })