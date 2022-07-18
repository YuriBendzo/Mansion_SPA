<template>
  <div class="products__wrapper">
    <div class="sidebar">
      <div>
        <select-category
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
        ></select-category>
      </div>
      <!-- <price-range :products="products"></price-range> -->

      <div class="range">
        <div class="range__title">Сортувати за ціною:</div>
        <div class="range__slider">
          <input
            type="range"
            min="0"
            max="10000"
            step="10"
            v-model.number="minPrice"
            @change="setRangeSlider"
          />
          <input
            type="range"
            min="0"
            max="10000"
            step="10"
            v-model.number="maxPrice"
            @change="setRangeSlider"
          />
        </div>
        <div class="range__values">
          <div>min: {{ minPrice }}</div>
          <div>max: {{ maxPrice }}</div>
        </div>
      </div>
    </div>
    <div class="products__inner">
      <product-item
        v-for="clothes in filteredProducts"
        :key="clothes._id"
        :clothes="clothes"
      >
      </product-item>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductItem from "@/components/ProductList/ProductItem.vue";
import SelectCategory from "@/components/filters/SelectCategory";
// import PriceRange from "@/components/filters/PriceRange";
export default {
  name: "ProductList",
  components: {
    ProductItem,
    SelectCategory,
    // PriceRange,
  },
  data() {
    return {
      categories: [
        { name: "Всі", value: "all" },
        { name: "куртки", value: "jackets" },
        { name: "футболки", value: "t-shirts" },
        { name: "сорочки", value: "shirts" },
        { name: "светри", value: "sweaters" },
        { name: "штани", value: "pants" },
        { name: "костюми", value: "suits" },
      ],
      selected: "Всі",
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
    };
  },
  computed: {
    ...mapGetters("products", ["products"]),

    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.products;
      }
    },
  },
  methods: {
    ...mapActions("products", ["loadProducts"]),

    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.products];
      this.sortedProducts = this.sortedProducts.filter((item) => {
        return (
          item.productPrice >= vm.minPrice && item.productPrice <= vm.maxPrice
        );
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected = category.name;
          return e.productCategory === category.name;
        });
      }
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.products {
  &__wrapper {
    display: flex;
    margin-top: 20px;
  }
  &__inner {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-left: 20px;
  }
}
.sidebar {
  width: 300px;
}
.range {
  &__slider {
    max-width: 200px;
    margin: 0 20px;
    text-align: center;
    position: relative;
    & input[type="range"] {
      position: absolute;
      left: 0;
      right: 0;
      top: 30px;
    }
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    margin-top: 30px;
  }
  &__values {
    margin-top: 50px;
    max-width: 250px;
    display: flex;
    justify-content: space-between;
  }
}
::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
input[type="range"] {
  -webkit-appearance: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 300px;
  height: 5px;
  background: #6e9c9f;
  border: none;
  border-radius: 3px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1.5px solid #6e9c9f;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #6baeb3;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  box-shadow: 1px 1px 1px #6e9c9f, 0px 0px 1px #787878;
  border-radius: 2px;
}
</style>
