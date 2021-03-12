//State
const initialState = {
  contacts: []
}

//Reducer
function reducer (state = initialState, action) {
  switch (action.type){
    case 'ADD_NEW_PERSON': 
    //console.log(action.payload, "payload")
    //console.log(state.state)
    var newArr = state.state.contacts
    newArr.push(action.payload)
      return {
        //...state,
        state : {
          ...state.state,
          contacts: newArr
        }
        
    }

    case 'REMOVE_PERSON': {
      const arrCopy = state.state.contacts
      const updatedArr = arrCopy.filter(person => { 
        
        if(person.firstName.toLowerCase() == action.payload.firstName.toLowerCase() && person.lastName.toLowerCase() == action.payload.lastName.toLowerCase()){
          return false
        } return person
      })
      console.log(updatedArr)
        
      return {
        state: {
          contacts: updatedArr
        }  
      }
    }  

    default: return {
      state
    }
    
  }
}

//Creating Store
const store = Redux.createStore(reducer)
let state = store.getState()

//Actions
function addNewPerson (person) {
  return {
    type: 'ADD_NEW_PERSON',
    payload: person
  }
}

function removePerson (person) {
  return {
    type: 'REMOVE_PERSON',
    payload: person
  }
}

//Render function for subscribe
function render () {
  const contacts = document.getElementById('contacts')
  contacts.innerHTML=""
  console.log("in the render", state.state)
  state.state.contacts.map((x, i) => {
    console.log(x)
    let h3 = document.createElement('h3')
    h3.innerHTML = x.firstName + " " + x.lastName
    h3.id=i
    contacts.appendChild(h3)
  })
}

//Subscribe
store.subscribe(render)

//Event Listeners
document.getElementById('sub-add')
  .addEventListener('click', function () {
    const firstName = document.getElementById('add-first-name').value
    const lastName = document.getElementById('add-last-name').value
    store.dispatch(addNewPerson({firstName: firstName, lastName: lastName, id: store.getState().state.contacts.length}))
    //render()
  })

  // document.getElementById('sub-remove')
  // .addEventListener('click', function () {
  //   const firstName = document.getElementById('remove-first-name').value
  //   const lastName = document.getElementById('remove-last-name').value
  //   store.dispatch(removePerson({firstName: firstName, lastName: lastName}))
  //   const contacts = document.getElementById('contacts')
  //   console.log(contacts.children)

  //   for (var i = 0; i < contacts.children.length; i++){
  //     console.log(contacts.children[i].textContent, (firstName + " " + lastName))
  //     if(contacts.children[i].textContent === (firstName + " " + lastName)){
        
  //       // contacts.removeChild(contacts.children[i])
  //       console.log(contacts)
  //     }
  //   }
  //   // contacts.children.filter((x) => {
  //   //   console.log(x)
  //   //   return x.textContent !== (firstName + " " + lastName)
  //   // })
  // })

//preventDefault() for forms
document.getElementById('add-form').addEventListener('submit', function (e){
    e.preventDefault()
  })
    document.getElementById('sub-remove').addEventListener('click', function (e) {
      e.preventDefault()
      const firstName = document.getElementById('remove-first-name').value
      const lastName = document.getElementById('remove-last-name').value
      store.dispatch(removePerson({firstName: firstName, lastName: lastName}))
      const contacts = document.getElementById('contacts')
      for (var i = 0; i < contacts.children.length+1; i++){
        if(contacts.children[i].textContent === (firstName + " " + lastName)){
          contacts.removeChild(contacts.children[i])
        }
      }
    })