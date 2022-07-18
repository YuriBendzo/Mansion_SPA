<template>
  <div>
    <div class="fav">
      <button class="fav__item-link" @click="onShowProduct(products._id)">
        <img class="fav__item-img" :src="products.productImage" />
        <div class="fav__item-box">
          <div class="fav__item-title">{{ products.productTitle }}</div>
          <div class="fav__item-price">{{ products.productPrice }}₴</div>
        </div>
      </button>
      <button class="add__btn" @click="onAdd(products._id)">
        <v-icon class="add__img">mdi-cart-plus</v-icon>
      </button>
      <button class="delete__btn" @click="DelFav">
        <v-icon class="delete__img">mdi-delete-outline</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FavProduct",
  props: {
    favItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("products", ["getProductsId"]),

    products() {
      return this.getProductsId(this.favItem.productId);
    },
  },
  methods: {
    ...mapActions("favorite", ["deleteFav"]),
    ...mapActions("cart", ["addToCart"]),

    onShowProduct(id) {
      this.$router.push({
        name: "productPage",
        params: {
          id,
        },
      });
    },
    DelFav() {
      this.deleteFav(this.favItem.id);
    },
    onAdd(id) {
      this.addToCart(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.fav {
  position: relative;
  &__item-link {
    text-decoration: none;
    z-index: 1;
  }
  &__item-img {
    width: 200px;
    height: 300px;
    border-radius: 5px;
  }
  &__item-title {
    font-weight: 700;
    font-size: 17px;
    line-height: 140%;
    color: #000;
    margin-top: 10px;
    max-width: 120px;
  }
  &__item-price {
    font-family: "Comfortaa", cursive;
    font-size: 15px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #998e78;
    max-width: 120px;
  }
  &__item-box {
    max-width: 240px;
    text-align: left;
  }
}
.add {
  &__btn {
    position: absolute;
    bottom: 0;
    z-index: 2;
    right: 0;
    bottom: 8px;
  }
  &__img {
    width: 35px;
    height: 35px;
    background-color: #6e9c9f;
    padding: 5px;
    border-radius: 10px;
  }
}
.delete {
  &__btn {
    position: absolute;
    bottom: 0;
    z-index: 2;
    right: 40px;
    bottom: 8px;
  }
  &__img {
    width: 35px;
    height: 35px;
    background-color: #6e9c9f;
    padding: 5px;
    border-radius: 10px;
  }
}
</style>
