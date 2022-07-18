<template>
  <div class="collection">
    <button class="collection__item-link" @click="onShowProduct(clothes._id)">
      <img class="collection__item-img" :src="clothes.productImage" />
      <div class="collection__item-box">
        <div class="collection__item-title">{{ clothes.productTitle }}</div>
        <div class="collection__item-price">{{ clothes.productPrice }}₴</div>
      </div>
    </button>
    <to-favorite :favProd="clothes"></to-favorite>
    <button class="add__btn" @click="onAdd(clothes._id)">
      <v-icon class="add__img">mdi-cart-plus</v-icon>
    </button>
    <div v-if="loggedUser && loggedUser.isAdmin">
      <button class="edit__btn" @click="onEdit(clothes._id)">
        <v-icon class="edit__img">mdi-pencil</v-icon>
      </button>
      <button class="delete__btn" @click="onDelete(clothes._id)">
        <v-icon class="delete__img">mdi-trash-can</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ToFavorite from "@/components/filters/ToFavorite";
export default {
  name: "ProductItem",
  components: {
    ToFavorite,
  },
  props: {
    clothes: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("auth", ["getAuthData"]),
    loggedUser() {
      return this.getAuthData;
    },
  },
  methods: {
    ...mapActions("products", ["deleteProduct"]),
    ...mapActions("cart", ["addToCart"]),

    onShowProduct(id) {
      this.$router.push({
        name: "productPage",
        params: {
          id,
        },
      });
    },
    onDelete(id) {
      this.deleteProduct(id);
    },
    onEdit(id) {
      this.$router.push({ name: "productEdit", params: { id } });
    },
    onAdd(id) {
      if (!this.loggedUser) {
        this.$router.push({ path: "/login" });
      } else {
        this.addToCart(id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.collection {
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
.delete {
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
.edit {
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
.add {
  &__btn {
    position: absolute;
    bottom: 0;
    z-index: 2;
    right: 80px;
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
