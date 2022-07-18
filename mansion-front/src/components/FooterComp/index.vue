<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="logo">
          <p class="logo__text">mansion</p>
          <img class="logo__img" :src="imgLogo" />
        </div>
        <nav>
          <ul class="nav__list">
            <li>
              <router-link class="nav__list-link" to="/"
                >Головна</router-link
              >
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
          </ul>
        </nav>
        <a class="footer__phone" href="tel:+380950950955">+38 095 095 09 55</a>
      </div>
      <a class="footer__mail" href="mailto:hello@mansion.com"
        >hello@mansion.com</a
      >
      <div class="footer__bottom">
        <div class="copyright">
          <p class="copyright__text">© Всі права захищені</p>
          <a class="copyright__link" href="#">Політика конфіденційності</a>
          <a class="copyright__link" href="#">Публічна оферта</a>
        </div>
        <ul class="footer__social">
          <li>
            <a class="footer__social-icon" href="https://www.instagram.com/">
              <v-icon>mdi-instagram</v-icon>
            </a>
          </li>
          <li>
            <a class="footer__social-icon" href="https://facebook.com/">
              <v-icon>mdi-facebook</v-icon>
            </a>
          </li>
          <li>
            <a class="footer__social-icon" href="https://twitter.com/">
              <v-icon>mdi-twitter</v-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
      return {
          imgLogo: require("@/assets/logo-icon.svg"),
      }
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.footer {
  background-color: #f1eadc;
  padding: 50px 0;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__phone {
    font-family: "Comfortaa", cursive;
    font-weight: 400;
    font-size: 15px;
    text-decoration: none;
    color: #000;
    &:hover {
      color: #6e9c9f;
    }
  }
  &__mail {
    display: block;
    max-width: 135px;
    font-size: 15px;
    text-decoration: none;
    color: #000;
    margin-top: 5px;
    margin-left: auto;
    margin-bottom: 10px;
    &:hover {
      color: #6e9c9f;
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
  }
  &__social {
    margin: 0;
    list-style: none;
    display: flex;
    gap: 10px;
    padding-top: 21px;
    &-icon {
      text-decoration: none;
      color: #000;
      &:hover {
          color: #6e9c9f;
      }
    }
  }
}
.copyright {
  max-width: 200px;
  text-align: left;
  &__text {
    font-family: "Comfortaa", cursive;
    font-size: 13px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #000;
    margin: 0;
    padding-bottom: 5px;
  }
  &__link {
    display: block;
    font-family: "Comfortaa", cursive;
    font-size: 13px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #000;
    text-decoration: none;
    padding-bottom: 5px;
    &:hover {
      color: #6e9c9f;
    }
  }
}
</style>
