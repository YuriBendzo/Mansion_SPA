<template>
  <div>
    <button class="fav__btn" @click="toggleFav(favProd._id)">
      <div v-if="isFav == true">
        <v-icon class="fav__icon">mdi-heart-minus</v-icon>
      </div>
      <div v-else>
        <v-icon>mdi-heart-plus</v-icon>
      </div>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ToFavorite",
  data() {
    return {
      isFav: false,
    };
  },
  props: {
    favProd: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("auth", ["getAuthData"]),

    loggedUser() {
      return this.getAuthData;
    },
    isItFav() {
      return this.isFav ? "mdi-heart-plus" : "mdi-heart-minus";
    },
  },
  methods: {
    ...mapActions("favorite", ["addToFav", "clearFav"]),
    toggleFav(id) {
      if (!this.loggedUser) {
        this.$router.push({ path: "/login" });
      } else {
        if (this.isFav == false) {
          this.isFav = true;
          this.addToFav(id);
        } else {
          this.isFav = false;
          this.clearFav(id);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fav {
  &__btn {
    position: absolute;
    bottom: 0;
    z-index: 2;
    right: 10px;
    bottom: 325px;
  }
  &__icon {
    color: #6e9c9f;
  }
}
</style>
