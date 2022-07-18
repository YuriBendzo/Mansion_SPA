<template>
  <div>
    <div v-if="isLoading">
      <div class="loading">
        <div class="loading__wrapper">
          <img :src="require('@/assets/loading.svg')" />
          <p class="loading__text">Завантаження...</p>
        </div>
      </div>
    </div>
    <div v-if="isError">Error!!!!</div>

    <div v-show="!isLoading && !isError">
      <slot name="header">
        <header-comp></header-comp>
      </slot>
      <slot></slot>
      <slot name="footer">
        <footer-comp></footer-comp>
      </slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
export default {
  name: "MainMasterPage",
  components: {
    HeaderComp,
    FooterComp,
  },
  computed: {
    ...mapGetters("products", ["isLoading", "isError"]),
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.loading {
  height: 100vh;
  position: relative;
  &__wrapper {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  &__text {
    font-size: 30px;
  }
}
</style>
