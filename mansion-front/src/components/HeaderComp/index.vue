<template>
  <header class="header">

    <div class="container">
      <div class="header__inner">
        <div class="logo">
          <p class="logo__text">mansion</p>
          <img class="logo__img" :src="imgLogo" />
        </div>
        <nav>
          <ul class="nav__list">
            <li>
              <router-link class="nav__list-link" to="/">Головна</router-link>
            </li>
            <li>
              <router-link class="nav__list-link" to="/shop"
                >Крамниця</router-link
              >
            </li>
            <li>
              <router-link class="nav__list-link" to="/about"
                >Про бренд</router-link
              >
            </li>
            <li>
              <router-link class="nav__list-link" to="/contacts"
                >Контакти</router-link
              >
            </li>
            <li v-if="loggedUser && loggedUser.isAdmin">
              <button class="nav__list-link" @click="onAddNewGoods">
                Додати товар
              </button>
            </li>
          </ul>
        </nav>

        <div class="box">
          <router-link class="cart" to="/cart">
            <div class="cart__mark" v-if="showProductsInCart">
              <span>{{ cart.length }}</span>
            </div>
            <v-icon class="cart__img">mdi-cart</v-icon>
          </router-link>
          <router-link class="favorite" to="/favorite">
            <div class="favorite__mark" v-if="showProductsInFav">
              <span>{{ favorite.length }}</span>
            </div>
            <v-icon class="favorite__img">mdi-heart-multiple</v-icon>
          </router-link>
          <div class="login">
            <div class="login__user" v-if="loggedUser">
              {{ loggedUser.name }}
            </div>
            <router-link
              class="btn login__link"
              v-if="!isAuthenticated()"
              to="/signup"
              >Реєстрація</router-link
            >
            <router-link
              class="btn login__link"
              v-if="!isAuthenticated()"
              to="/login"
              >Вхід</router-link
            >
            <button
              class="btn btn__logout"
              v-if="isAuthenticated()"
              @click="onLogout"
            >
              Вийти
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HeaderComp",
  components: {
  },
  data() {
    return {
      isPopupVisible: false,
      imgLogo: require("@/assets/logo-icon.svg"),
    };
  },
  computed: {
    ...mapGetters("auth", ["usersList", "isAuthenticated", "getAuthData"]),
    ...mapGetters("cart", ["cart"]),
    ...mapGetters("favorite", ["favorite"]),

    showProductsInCart() {
      return this.cart.length > 0;
    },
    showProductsInFav() {
      return this.favorite.length > 0;
    },
    loggedUser() {
      return this.getAuthData;
    },
  },
  methods: {
    ...mapActions("auth", ["loadUsers", "logout"]),
    ...mapActions("favorite", ["clearFav"]),
    ...mapActions("cart", ["clearCart"]),

    onLogout() {
      this.clearFav();
      this.clearCart();
      this.logout();
      this.$router.push({ path: "/login" });
    },
    onAddNewGoods() {
      this.$router.push({ name: "productEdit" });
    },
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.header {
  background-color: rgba($color: #f1eadc, $alpha: 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }
}
.box {
  display: flex;
  align-items: center;
  gap: 30px;
}
.login {
  display: flex;
  align-items: center;
  gap: 20px;
}
.login__link,
.btn__logout {
  padding: 5px 10px;
}
.cart {
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #6e9c9f;
    border-radius: 100%;
  }
  &__img {
    width: 35px;
    height: 35px;
    padding: 5px;
  }
  &__mark {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #998e78;
    right: 0;
    top: 0;
    border-radius: 50%;
    text-align: center;
    z-index: 5;
    & span {
      font-size: 9px;
      line-height: 100%;
      color: #fff;
      display: block;
      padding-top: 4px;
    }
  }
}
.favorite {
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #6e9c9f;
    border-radius: 100%;
  }
  &__img {
    width: 35px;
    height: 35px;
    padding: 5px;
  }
  &__mark {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #998e78;
    right: 0;
    top: 0;
    border-radius: 50%;
    text-align: center;
    z-index: 5;
    & span {
      font-size: 9px;
      line-height: 100%;
      color: #fff;
      display: block;
      padding-top: 4px;
    }
  }
}
</style>
