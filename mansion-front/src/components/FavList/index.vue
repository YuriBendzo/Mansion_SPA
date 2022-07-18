<template>
  <div class="favorite__wrapper">
    <fav-product
      v-for="fav in favorite"
      :key="fav._id"
      :fav-item="fav"
    ></fav-product>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FavProduct from "./FavProduct.vue";
export default {
  name: "FavList",
  components: {
    FavProduct,
  },
  computed: {
    ...mapGetters("favorite", ["favorite"]),
  },
};
</script>

<style lang="scss" scoped>
.favorite__wrapper {
  display: flex;
  gap: 30px;
}
</style>
