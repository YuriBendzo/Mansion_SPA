<template>
  <div>
    <main-master-page>
      <div class="container">
        <div class="login">
          <h2 class="title">Увійти</h2>
          <form @submit.prevent="submit">
            <p class="login__text">Будь-ласка увійдіть</p>
            <div class="form">
              <input
                class="form__input"
                type="text"
                v-model="email"
                name="email"
                placeholder="E-мейл"
              />
              <label class="form__label">e-мейл :</label>
            </div>
            <div class="form">
              <input
                class="form__input"
                type="password"
                v-model="password"
                name="password"
                placeholder="Пароль"
              />
              <label class="form__label">пароль :</label>
            </div>
            <div class="form error" v-if="message">{{ message }}</div>
            <div class="form__btns">
              <button class="btn">Увійти</button>
              <router-link to="/signup" class="btn btn-signup"
                >Реєстрація</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </main-master-page>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
export default {
  name: "LoginPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login", "logout"]),

    async submit() {
      try {
        const user = { email: this.email, password: this.password };
        const result = await this.login(user);

        if (result === true) {
          this.message = "";

          this.$router.push({ path: "/" });
        } else {
          this.message = "Помилка входу!";
        }
      } catch (err) {
        this.message = err.response.data.error;
      }
    },
    created() {
      this.logout();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.login {
  margin-top: 150px;
}
.form__btns {
  display: flex;
  gap: 15px;
}
</style>
