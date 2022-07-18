<template>
  <div>
    <main-master-page>
      <!-- <div class="collection__empty" v-if="isEmpty">Крамниця порожня :(</div> -->
      <div class="container">
        <section class="collection">
          <h1 class="title">Крамниця</h1>
          <product-list></product-list>
        </section>
      </div>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage";
import ProductList from "@/components/ProductList";
export default {
  name: "ShopPage",
  components: {
    MainMasterPage,
    ProductList,
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.collection {
  margin-top: 150px;
  margin-bottom: 50px;
}
</style>
