<template>
  <div>
    <main-master-page>
      <div class="container">
        <section class="product">
          <v-breadcrumbs class="breadcrumbs" :items="items" divider="/">
          </v-breadcrumbs>
          <div class="product__content">
            <img class="product__img" :src="productsData.productImage" alt="" />
            <div class="product__box">
              <h1 class="product__title">{{ productsData.productTitle }}</h1>
              <div class="product__price">{{ productsData.productPrice }}₴</div>
              <div class="product__descr">
                  Опис товару:
                  <p class="product__descr-text">{{ productsData.productDescr }}</p>
              </div>
              <button class="btn" @click="onAdd(productsData._id)">Додати в корзину</button>
            </div>
          </div>
        </section>
      </div>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      productsData: {},
      items: [
        {
          text: "Головна",
          disabled: false,
          href: "/",
        },
        {
          text: "продукт",
          disabled: true,
          href: "/product/:id?",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("products", ["products"]),
    currentProductId() {
      return this.$route.params.id;
    },
  },
  methods: {
      ...mapActions("cart", ["addToCart"]),

      onAdd(id) {
      this.addToCart(id);
    },
  },
  mounted() {
    if (this.currentProductId)
      this.productsData = this.products.find(
        (item) => item._id === this.currentProductId
      );
  },
};
</script>

<style lang="scss" scoped>
.product {
  margin-top: 150px;
  &__content {
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    gap: 75px;
  }
  &__title {
    font-size: 55px;
    line-height: 110%;
    margin-bottom: 30px;
  }
  &__img {
    width: 536px;
    height: 729px;
  }
  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__price {
    font-size: 40px;
    line-height: 110%;
    color: #998e78;
  }
  &__descr {
      font-size: 20px;
      line-height: 120%;
      margin-top: 30px;
      margin-bottom: 60px;
      &-text {
          font-size: 16px;
          margin-top: 15px;
      }
  }
}
</style>
