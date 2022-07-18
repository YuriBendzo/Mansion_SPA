export default {
    products: {
      readList: `${process.env.VUE_APP_API_URL}/products`,
      add: `${process.env.VUE_APP_API_URL}/products/add`,
      update: `${process.env.VUE_APP_API_URL}/products/update`,
      getProductById: (id) => `${process.env.VUE_APP_API_URL}/products/${id}`,
      delete: `${process.env.VUE_APP_API_URL}/products/delete`,
    },
    user: {
      usersList: `${process.env.VUE_APP_API_URL}/users`,
      signup: `${process.env.VUE_APP_API_URL}/users/signup`,
      login: `${process.env.VUE_APP_API_URL}/users/login`,
    },
  }
  