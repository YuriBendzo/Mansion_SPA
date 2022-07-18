import { createStore } from 'vuex'

import products from './products'
import auth from './auth'
import cart from './cart'
import favorite from './favorite'

const store = createStore({
  modules: {
    products,
    auth,
    cart,
    favorite,
  },
})

export default store