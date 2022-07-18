import { v4 as uuidv4 } from "uuid";

const cart = {
    namespaced: true,
    state: {
        cart: [],
    },
    getters: {
        cart: (state) => state.cart,
        product (state, getters, rootState, rootGetters) {
            return rootGetters['products/products']
        },
        getTotalPrice: (state, getters) => state.cart.reduce((prevSum, cartItem) => {
            const clothes = getters.product.find(item => item._id === cartItem.productId)
            return prevSum + clothes.productPrice * cartItem.count;
          }, 0),
    },
    mutations: {
        addProductToCart(state, productId) {
            const cartProduct = state.cart.find((item) => item.productId === productId);
            if (cartProduct) cartProduct.count++;
            else
              state.cart.push({
                  id: uuidv4(),
                  productId,
                  count: 1,
              })
        },
        clearProductFromCart(state, productId) {
            const cartProduct = state.cart.find((item) => item.productId === productId);
            state.cart.pop(cartProduct);
        },
        deleteCartItem(state, productId) {
            state.cart = state.cart.filter((item) => item.id !== productId);
        },
        incrementProductsCount(state, productId) {
            const item = state.cart.find(item => item.id === productId)
            item.count += 1;
          },
        decrementProductsCount(state, productId) {
            const item = state.cart.find(item => item.id === productId)
            if (item.count > 1) item.count -= 1;
        },
    },
    actions: {
        cartAction({commit}, payload) {
            switch (payload.type) {
              case 'increment':
                commit('incrementProductsCount', payload.value)
                break;
              case 'decrement':
                commit('decrementProductsCount', payload.value)
                break;
              case 'delete':
                commit('deleteCartItem', payload.value)
                break;
            }
        },
        addToCart({commit}, productId) {
            commit('addProductToCart', productId);
        },
        clearCart({commit}, productId) {
            commit('clearProductFromCart', productId);
        }
    },
};

export default cart