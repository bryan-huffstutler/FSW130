import { createStore } from 'redux'
import {itemsReducer} from './itemsReducer'

const store = createStore(itemsReducer)
store.subscribe(() => console.log(store.getState()))

export default store