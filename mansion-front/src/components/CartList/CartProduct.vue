<template>
  <div class="cart-item__wrapper">
    <div class="cart-item__boxone">
      <button class="delete__btn" @click="onDelete">
        <span class="delete__btn-text">Видалити</span>
        <span class="delete__btn-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
            ></path></svg
        ></span>
      </button>
      <div class="cart-item__product">
        <img class="cart-item__img" :src="products.productImage" alt="" />
        <div class="cart-item__title">{{ products.productTitle }}</div>
      </div>
    </div>
    <div class="cart-item__boxtwo">
      <div class="cart-item__price">{{ products.productPrice }}₴</div>
      <div>
        <button class="decrement__btn" @click="onDecrement">
          <span>-</span>
        </button>
        <span>{{ cartItem.count }}</span>
        <button class="increment__btn" @click="onIncrement">
          <span>+</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CartProduct",
  props: {
    cartItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("products", ["getProductsId"]),
    products() {
      return this.getProductsId(this.cartItem.productId);
    },
  },
  methods: {
    ...mapActions("cart", ["cartAction"]),

    onDecrement() {
      this.cartAction({
        type: "decrement",
        value: this.cartItem.id,
      });
    },
    onIncrement() {
      this.cartAction({
        type: "increment",
        value: this.cartItem.id,
      });
    },
    onDelete() {
      this.cartAction({
        type: "delete",
        value: this.cartItem.id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.cart-item {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 25px 0;
  }
  &__boxone {
    display: flex;
    align-items: center;
    gap: 45px;
  }
  &__boxtwo {
    display: flex;
    align-items: center;
    gap: 115px;
  }
  &__product {
    display: flex;
    align-items: center;
  }
  &__img {
    max-width: 80px;
    margin-right: 25px;
    border-radius: 5px;
  }
  &__title {
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
  }
  &__price {
    font-family: "Comfortaa", cursive;
    font-size: 15px;
    line-height: 140%;
    letter-spacing: 0.02em;
  }
}
.delete__btn {
  width: 100px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: #e62222;
  & span {
    transition: 200ms;
  }
  & &-text {
    transform: translateX(5px);
    color: white;
    font-weight: bold;
    font-size: 14px;
  }
  & &-icon {
    position: absolute;
    transform: translateX(76px);
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & svg {
    width: 15px;
    fill: #eee;
  }
  &:hover {
    background: #ff3636;
  }
  &:hover &-text {
    color: transparent;
  }
  &:hover &-icon {
    width: 150px;
    border-left: none;
    transform: translateX(-25px);
  }
  &:active &-icon svg {
    transform: scale(0.8);
  }
  &:focus {
    outline: none;
  }
}
.decrement__btn,
.increment__btn {
  cursor: pointer;
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: white;
  background: linear-gradient(
    0deg,
    rgba(110, 156, 159, 1) 0%,
    rgba(45, 145, 152, 1) 100%
  );
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  &:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
  }
  &:active {
    box-shadow: 0 0.3em 1em -0.5em #14a73e98;
  }
}
.decrement__btn {
  margin-right: 5px;
}
.increment__btn {
  margin-left: 5px;
}
</style>
