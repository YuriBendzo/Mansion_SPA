import { v4 as uuidv4 } from "uuid";

const favorite = {
    namespaced: true,
    state: {
        favorite: [],
    },
    getters: {
        favorite: (state) => state.favorite,
    },
    mutations: {
        addProductToFavorite(state, productId) {
            const favoriteProduct = state.favorite.find((item) => item.productId === productId);
            if (favoriteProduct) favoriteProduct.count++;
            else
              state.favorite.push({
                  id: uuidv4(),
                  productId,
                  count: 1,
              })
        },
        clearProductFromFavorite(state, productId) {
            const favoriteProduct = state.favorite.find((item) => item.productId === productId);
            state.favorite.pop(favoriteProduct);
        },
        deleteFavItem(state, productId) {
            state.favorite = state.favorite.filter((item) => item.id !== productId);
        },
    },
    actions: {
        deleteFav({commit}, productId) {
            commit('deleteFavItem', productId);
        },
        addToFav({commit}, productId) {
            commit('addProductToFavorite', productId);
        },
        clearFav({commit}, productId) {
            commit('clearProductFromFavorite', productId);
        }
    },
};

export default favorite