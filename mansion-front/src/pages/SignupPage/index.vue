<template>
  <div>
    <main-master-page>
      <div class="container">
        <div class="signup">
          <h2 class="title">Реєстрація</h2>
          <form @submit.prevent="submit">
            <div class="form">
              <input
                class="form__input"
                type="text"
                v-model="userName"
                name="name"
                placeholder="Ім'я"
                required
              />
              <label class="form__label">Ім'я :</label>
              <div>{{ errorName }}</div>
            </div>
            <div class="form">
              <input
                class="form__input"
                type="email"
                v-model="email"
                name="email"
                placeholder="E-мейл"
                required
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
                required
              />
              <label class="form__label">Пароль :</label>
            </div>
            <!-- <div>
              <label>
                Ви адмін?
                <input type="checkbox" v-model="isAdmin" />
              </label>
            </div> -->
            <div v-if="message">{{ message }}</div>
            <div>
              <button class="btn" type="submit">Реєстрація</button>
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
  name: "SignupPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      message: "",
      isAdmin: false,
      errorName: "",
      errorEmail: "",
    };
  },
  methods: {
    ...mapActions("auth", ["signup", "logout"]),

    async submit() {
      try {
        const user = {
          name: this.userName,
          email: this.email,
          password: this.password,
          isAdmin: this.isAdmin,
        };
        const result = await this.signup(user);
        if (result === true) {
          this.message = "";
          this.$router.push({
            path: "/login",
            query: { signedup: "true" },
          });
        } else {
          this.message = result; //'SignUp error!';
        }
      } catch (err) {
        this.message = err
      }
    },
  },
  watch: {
    userName() {
      if (this.userName.length >= 1 && this.userName.length < 3) {
        this.errorName = "ім'я повинно бути довшим!";
      } else {
        this.errorName = "";
      }
    },
  },

  created() {
    this.logout();
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.signup {
  margin-top: 150px;
}
</style>
