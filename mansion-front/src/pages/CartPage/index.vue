<template>
  <div>
    <main-master-page>
      <div class="container">
        <div class="cart">
          <h2 class="title">Корзина</h2>
          <cart-list></cart-list>
        </div></div
    ></main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import CartList from "@/components/CartList";
export default {
  name: "CartPage",
  components: {
    MainMasterPage,
    CartList,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.cart {
    margin-top: 120px;
}
</style>
