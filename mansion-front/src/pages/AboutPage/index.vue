<template>
  <div>
    <main-master-page>
      <div class="container">
        <div class="about">
          <h1 class="title">Про бренд</h1>
          <div class="about__info">
            <div class="info__one">
              <img
                class="info__one-img"
                :src="require('@/assets/images/about-1.jpg')"
              />
              <div class="info__one-content">
                <h3 class="info__one-title">Ідея і чоловік</h3>
                <p class="info__one-text">
                  Mansion був заснований в 2020-му і став одним із найбільш
                  успішних компаній нашої країни. Як і більшість англійських
                  фірм, Mansion залишається сімейною компанією, хоча ні один із
                  членів сім'ї не являється модельєром.
                </p>
                <p class="info__one-text">
                  Ми діємо по успішній формулі, прибігаючи до послуг відомих
                  модельєрів для створення своїх коллекцій. Цей метод був
                  описаний критиком моди Коліном Макдауеллом як форма
                  дизайнерської співтворчості, характерна для ряду англійських
                  pret-a-porter компаніях.
                </p>
              </div>
            </div>
            <div class="info__two">
              <div class="info__two-content">
                <h3 class="info__two-title">Магія в деталях</h3>
                <p class="info__two-text">
                  Перший магазин Mansion був відкритий в маленькому містечку на
                  півночі країни в 2020-му році. Перша коллекція складалася із
                  двух пальто і костюма, які були копіями англійських моделей.
                </p>
                <p class="info__two-text">
                  Недивлячись на те, що по освіті засновник був адвокатом, його
                  сім'я завжди була тісно повязана з пошивом (прабабця
                  засновника шила одяг для жінок і чоловіків, а мати заснувала
                  професіональну школу крову та шиття). Прегнення створювати
                  одяг для мас несло в собі великі перспективи, особливо в той
                  час, коли висока мода як і раніше донімірувала, а ринку
                  якісного pret-a-porter просто не існувало.
                </p>
              </div>
              <img
                class="info__two-img"
                :src="require('@/assets/images/about-2.jpg')"
              />
            </div>
          </div>
          <button @click="goShop" class="btn btn-shop">Відкрити крамницю</button>
        </div>
      </div>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
export default {
  name: "AboutPage",
  components: {
    MainMasterPage,
  },
  methods: {
    goShop() {
      this.$router.push({ name: "shop" });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.about {
  margin-top: 150px;
  &__info {
    margin: 0 auto;
    padding-top: 50px;
  }
}
.info {
  &__one,
  &__two {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 100px;
    &-img {
      width: 450px;
      height: 550px;
      border-radius: 20px;
    }
    &-content {
      max-width: 540px;
    }
    &-title {
      font-size: 25px;
      line-height: 140%;
      margin-bottom: 45px;
      font-weight: 700;
      color: #000;
    }
    &-text {
      font-size: 15px;
      line-height: 140%;
      margin-bottom: 25px;
    }
    &-text:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
}
.btn-shop {
    margin: 0 auto 50px;
}
</style>
