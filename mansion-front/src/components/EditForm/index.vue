<template>
  <div>
    <div class="form">
      <input
        class="form__input"
        type="text"
        v-model="product.productTitle"
        placeholder="Title"
      />
      <label class="form__label"> Назва продукту: </label>
    </div>
    <div class="form__select">
      <select-category class="select" 
        :selected="selected"
        :options="categories"
        @select="chooseCategory"
      ></select-category>
    </div>
    <div class="form">
      <input
        class="form__input"
        type="text"
        v-model="product.productDescr"
        placeholder="Description"
      />
      <label class="form__label"> Опис товару: </label>
    </div>
    <div class="form">
      <input
        class="form__input"
        type="number"
        v-model="product.productPrice"
        placeholder="Price"
      />
      <label class="form__label"> Ціна продукту: (₴)</label>
    </div>
    <div>
      <label>
        Image
        <input type="file" @input="createLogoImage" />
      </label>
      <img class="product__img" id="img" :src="imageSrc" alt="" />
    </div>
    <button class="btn" @click="onSave">{{ btnLabel }}</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SelectCategory from "@/components/filters/SelectCategory";
export default {
  name: "EditForm",
  components: {
    SelectCategory,
  },
  data() {
    return {
      product: {},
      rawPhotoData: null,
      categories: [
        { name: "куртки", value: "jackets" },
        { name: "футболки", value: "t-shirts" },
        { name: "сорочки", value: "shirts" },
        { name: "светри", value: "sweaters" },
        { name: "штани", value: "pants" },
        { name: "костюми", value: "suits" },
      ],
      selected: "",
    };
  },
  computed: {
    imageSrc() {
      return this.rawPhotoData || this.product.productImage;
    },
    receivedProductId() {
      return this.$route.params.id;
    },
    btnLabel() {
      return this.receivedProductId ? "Update" : "Add";
    },
  },
  methods: {
    ...mapActions("products", [
      "getProductById",
      "addProduct",
      "updateProduct",
    ]),

    chooseCategory(category) {
      this.product.productCategory = category.name;
      this.selected = category.name;
    },


    createLogoImage(event) {
      const file = event.target.files[0];
      let reader = new FileReader();
      const self = this;
      reader.onload = (e) => {
        self.rawPhotoData = e.target.result;
        self.product.productImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    async onSave() {
      try {
        if (!this.receivedProductId) await this.addProduct(this.product);
        else await this.updateProduct(this.product);
        this.$router.push({ name: "shop" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    if (this.receivedProductId) {
      try {
        this.product = await this.getProductById(this.receivedProductId);
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.product {
  &__img {
    border-radius: 5px;
    max-width: 50px;
  }
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none; // Yeah, yeah everybody write about it
}

input[type="number"],
input[type="number"]:hover,
input[type="number"]:focus {
  appearance: none;
  -moz-appearance: textfield;
}
.select__category {
  border: 1px solid #000;
}
.select {
  color: #9b9b9b;
}
</style>
