
import uuid from 'react-uuid'

export function addItem(id) {
  return {
    type: "ADD_CART_ITEM",
    payload: id
  }
}

export function deleteItem(id) {
  return {
    type: "DELETE_CART_ITEM",
    payload: id
  }
}

export function filterItem(option){
  return {
    type: "FILTER_ITEM",
    payload: option
  }
}

const initState = {
  items: [
    {
      name: "Amazon Alexa",
      sold: false,
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyfHxhbWF6b24lMjBhbGV4YXxlbnwwfHx8fDE2MTczMzM2ODY&ixlib=rb-1.2.1&q=80&w=1080",
      colors: ["Black", "White"],
      type: "Electronics",
      cost: 34.99,
      _id: uuid()
    },
    {
      name: "Roku",
      sold: false,
      image: "https://images-na.ssl-images-amazon.com/images/I/81%2B0dqbDGWL._AC_SL1500_.jpg",
      colors: ["Black", "White"],
      type: "Electronics",
      cost: 29.99,
      _id: uuid()
    },
    {
      name: "PlayStation 5",
      sold: false,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8cGxheXN0YXRpb24lMjA1fGVufDB8fHx8MTYxNzMzMzUyNg&ixlib=rb-1.2.1&q=80&w=1080",
      colors: ["Black", "White"],
      type: "Electronics",
      cost: 499.99,
      _id: uuid()
    },
    {
      name: "Dark Souls",
      sold: false,
      image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
      colors: ["Hollow Edition", "Collectors Edition"],
      type: "Games",
      cost: 49.99,
      _id: uuid()
    },
    {
      name: "Dark Souls 2: Scholar of the First Sin",
      sold: false,
      image: "https://image.api.playstation.com/vulcan/img/rnd/202010/1216/oSOVmvoekCf9ASaAItqfKvpP.png",
      colors: ["Standard Edition", "Collectors Edition"],
      type: "Games",
      cost: 49.99,
      _id: uuid()
    },
    {
      name: "Demon Souls: Remastered",
      sold: false,
      image: "https://images-na.ssl-images-amazon.com/images/I/81QoNRp5%2BWL._SL1353_.jpg",
      colors: ["Standard Edition", "Collectors Edition"],
      type: "Games",
      cost: 69.99,
      _id: uuid()
    },
    {
      name: "Recliner",
      sold: false,
      image: "https://content.valuecityfurniture.com/images/product/phoenix_black_recliner_2119013_794393.jpg?akimg=product-img-800x800&ak-trim=false",
      colors: ["Blue"],
      type: "Furniture",
      cost: 234.99,
      _id: uuid()
    },
    {
      name: "Patio Table",
      sold: false,
      image: "https://images.thdstatic.com/productImages/8d6b818a-c921-4c63-b0d3-433674aeb698/svn/stylewell-patio-dining-tables-fts61191-64_145.jpg",
      colors: ["Glass", "Blue"],
      type: "Furniture",
      cost: 999.99,
      _id: uuid()
    },
    {
      name: "Lawn Chair",
      sold: false,
      image: "https://cdni.llbean.net/is/image/wim/504592_37948_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2",
      colors: ["Blue", "Red", "Yellow"],
      type: "Furniture",
      cost: 24.99,
      _id: uuid()
    },
    {
      name: "Ham",
      sold: false,
      image: "https://www.mccrone.com/wp-content/uploads/2018/11/cs-ham.jpg",
      colors: ["Green", "Tan"],
      type: "Food",
      cost: 24.99,
      _id: uuid()
    },
    {
      name: "Eggs",
      sold: false,
      image: "https://images.unsplash.com/photo-1504283165217-3679a64511fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8ZWdnc3xlbnwwfHx8fDE2MTc0MjEyOTI&ixlib=rb-1.2.1&q=80&w=1080",
      colors: ["Green", "White"],
      type: "Food",
      cost: 1.99,
      _id: uuid()
    },
    {
      name: "Bananas",
      sold: false,
      image: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG.jpg",
      colors: ["Green", "Yellow"],
      type: "Food",
      cost: 5.99,
      _id: uuid()
    }
  ],
  filteredItems: [],
  cart: []
}

export function itemsReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const oldArr = state.items
      const newArr = oldArr.filter(item => item._id === action.payload)
      console.log(newArr)
      return {
        ...state,
        cart: [...state.cart, newArr[0]]
      }
    case "DELETE_CART_ITEM":
      console.log('testing')
      const olArr = state.cart
      const index = olArr.findIndex(id => id._id === action.payload)
      olArr.splice(index, 1)
      return {
        ...state,
        cart: olArr
      }
    case "FILTER_ITEM":
      const oldArray = state.items
      const newArray = oldArray.filter(x => x.type === action.payload)
      return {
        ...state,
        filteredItems: newArray
      }
    default:
      return state
  }
}