//State
const initialState = {
  contacts: []
}

//Reducer
function reducer (state = initialState, action) {
  switch (action.type){
    case 'ADD_NEW_PERSON':
    var newArr = state.state.contacts
    newArr.push(action.payload)
      return {
        state : {
          contacts: newArr
        }
        
    }

    case 'REMOVE_PERSON': 
      const arrCopy = state.state.contacts
      let x = parseInt(action.payload)
      const updatedArr = arrCopy.splice(x, 1)
      console.log(state.state.contacts)
      console.log("REMOVE_PERSON ACTION")
      return {
        state: {
          contacts: updatedArr
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
  console.log("in the render", state.state.contacts)
  state.state.contacts.map((x, i) => {
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
    div.id=i
    div.appendChild(h3)
    div.appendChild(h4email)
    div.appendChild(h4phone)
    div.appendChild(btn)
    contacts.appendChild(div)
  })
}

//Subscribe
store.subscribe(render)

//Event Listeners
document.getElementById('sub-add')
  .addEventListener('click', function (e) {
    e.preventDefault()
    const firstName = document.getElementById('add-first-name').value
    const lastName = document.getElementById('add-last-name').value
    const email = document.getElementById('add-email').value
    const phone = document.getElementById('add-phone').value
    store.dispatch(addNewPerson({firstName: firstName, lastName: lastName, email: email, phone: phone, id: store.getState().state.contacts.length}))
  })

//Deleting from DOM
let deleteBtn = document.getElementsByClassName('del')
contacts.addEventListener('click', function(e){  
  for (i=0; i<deleteBtn.length; i++){
    if (e.target == deleteBtn[i]){
      let x = deleteBtn[i].parentNode
      contacts.removeChild(x)
    }
  }
  let x = e.target.parentNode.id
  store.dispatch(removePerson(x))
})