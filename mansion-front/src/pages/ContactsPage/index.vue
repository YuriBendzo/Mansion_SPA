<template>
  <div>
    <main-master-page>
      <div class="container">
        <div class="contacts">
          <h1 class="title">Контакти</h1>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.513639281147!2d22.296701632018493!3d48.61915232717698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b1dc81544f%3A0xb4a0a32b3a9f14a3!2z0L_Qu9C-0YnQsCDQqNCw0L3QtNC-0YDQsCDQn9C10YLQtdGE0ZYsINCj0LbQs9C-0YDQvtC0LCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDg4MDAw!5e0!3m2!1sru!2sua!4v1653144082546!5m2!1sru!2sua"
              style="border: 0"
              width="100%"
              loading="lazy"
            ></iframe>
          </div>
          <div class="contacts__info">
            <div class="contacts__info-phone">
              Телефон
              <a class="contacts__info-link" href="tel:+380950950955"
                >+38 095 095 09 55</a
              >
            </div>
            <div class="contacts__info-mail">
              E-mail
              <a class="contacts__info-link" href="mailto:hello@mansion.com"
                >hello@mansion.com</a
              >
            </div>
            <div class="contacts__info-address">
              Адреса
              <span>м.Ужгород, пл. Петефі</span>
            </div>
          </div>
        </div>
      </div>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
export default {
  name: "ContactsPage",
  components: {
    MainMasterPage,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.contacts {
  font-family: "Comfortaa", cursive;
  margin-top: 150px;
  &__form-input {
    width: 500px;
  }
  &__info {
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    line-height: 140%;
    margin-bottom: 50px;
    &-phone,
    &-mail,
    &-address {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    &-link {
      color: #000;
      text-decoration: none;
      &:hover {
        color: #6e9c9f;
      }
    }
  }
  &__form {
    margin-bottom: 50px;
    &-title {
      font-size: 35px;
      line-height: 110%;
      padding: 50px 0 15px;
    }
  }
  &__wrapper {
    position: relative;
    padding: 20px 0;
    margin-top: 10px;
    max-width: 400px;
    &-input {
      font-family: inherit;
      width: 100%;
      border: none;
      border-bottom: 2px solid #9b9b9b;
      outline: 0;
      font-size: 17px;
      color: #9b9b9b;
      padding: 7px 0;
      background: transparent;
      transition: border-color 0.2s;
    }
    &-input::placeholder {
      color: transparent;
    }
    &-input:placeholder-shown ~ &-label {
      font-size: 17px;
      cursor: text;
      top: 20px;
    }
    &-label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 17px;
      color: #9b9b9b;
      pointer-events: none;
    }
    &-input:focus {
      padding-bottom: 6px;
      font-weight: 700;
      border-width: 3px;
      border-image: linear-gradient(to right, #6e9c9f, #f1eadc);
      border-image-slice: 1;
    }
    &-input:focus ~ &-label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 15px;
      color: #6e9c9f;
      font-weight: 700;
    }
    &-input:required,
    &-input:invalid {
      box-shadow: none;
    }
  }
}
.map {
  margin-top: 50px;
  margin-bottom: 50px;
  iframe {
    height: 475px;
    border-radius: 20px;
  }
}
</style>
