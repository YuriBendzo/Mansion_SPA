<template>
  <div>
    <div class="cart__info">
      <span class="cart__info-item">Товар</span>
      <div class="cart__info-box">
        <span class="cart__info-price">Ціна</span>
        <span class="cart__info-amount">Кількіть</span>
      </div>
    </div>
    <cart-product
      v-for="item in cart"
      :key="item._id"
      :cart-item="item"
    ></cart-product>
    <div class="total-box">
      <div class="cart__info-total">
        Всього: <span>{{ getTotalPrice }}₴</span>
      </div>
      <button @click="goOrder" class="btn order__btn">
        Оформити замовлення
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartProduct from "./CartProduct.vue";
export default {
  name: "CartList",
  components: {
    CartProduct,
  },
  computed: {
    ...mapGetters("cart", ["cart", "getTotalPrice"]),
  },
  methods: {
    // goOrder() {
    //   this.$router.push({ name: "order",});
    // },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.cart__info {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding-bottom: 15px;
  &-box {
    display: flex;
    gap: 130px;
  }
  &-total {
    background-color: #f1eadc;
    width: 280px;
    height: 60px;
    padding: 16px 30px;
    border-radius: 20px;
    & span {
      margin-left: 25px;
    }
  }
}
.total-box {
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  margin-bottom: 25px;
}
.order__btn {
  margin-top: 0;
}
</style>
