<template>
  <div>
    <main-master-page>
      <div class="container">
        <div class="wrapper">
          <div class="slider">
            <p class=" slider__text">Витончені поєднання та відтінки - ось те, що ви шукали цього сезону. Час досліджувати.</p>
            <v-carousel hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              >
              </v-carousel-item>
            </v-carousel>
          </div>
          <section class="priority">
            <h3 class="priority__title">Що для нас важливо</h3>
            <div class="priority__inner">
              <div class="priority__box">
                <v-icon class="priority__img"
                  >mdi-check-decagram-outline</v-icon
                >
                <h6 class="priority__box__title">Якість</h6>
                <p class="priority__text">
                  Наші професіонали працюють на найкращому обладнанні для пошиву
                  одягу небувалої якості
                </p>
              </div>
              <div class="priority__box">
                <v-icon class="priority__img">mdi-cog-outline</v-icon>
                <h6 class="priority__box__title">Швидкість</h6>
                <p class="priority__text">
                  Завдяки налагодженій системі в Mansion ми можемо відшивати до
                  20-ти одиниць продукції в наших власних цехах
                </p>
              </div>
              <div class="priority__box">
                <v-icon class="priority__img">mdi-hand-heart</v-icon>
                <h6 class="priority__box__title">Відповідальність</h6>
                <p class="priority__text">
                  Ми підклуємось про людей і планету. Безвідходне виробництво і
                  комфортні умови праці - все це Mansion
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
export default {
  name: "HomePage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      items: [
        {
          src: require("../../assets/images/image-1.jpg"),
        },
        {
          src: require("../../assets/images/image-2.jpg"),
        },
        {
          src: require("../../assets/images/image-3.jpg"),
        },
        {
          src: require("../../assets/images/image-4.jpg"),
        },
        {
          src: require("../../assets/images/image-5.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@use "@/assets/styles/global";
.wrapper {
  margin-top: 200px;
}
.new__collection__title,
.priority__title {
  text-align: left;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  font-size: 35px;
  line-height: 110%;
  color: #000;
  margin: 0;
  padding-bottom: 50px;
}
.priority {
  margin-top: 50px;
  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 75px;
  }
  &__box {
    width: 300px;
    height: 270px;
  }
  &__img {
    font-size: 78px;
  }
  &__box__title {
    font-family: "Comfortaa", cursive;
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #000;
    margin: 0;
    padding-top: 20px;
  }
  &__text {
    font-size: 17px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #000000;
  }
}
.slider__text {
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
}
.v-img__img--contain {
  object-fit: cover;
  max-width: 100%;
  border-radius: 20px;
}
.v-carousel__controls {
  gap: 15px;
}
.mdi-circle::before {
  content: "\F0374" !important;
  color: #f1eadc;
}
.mdi-chevron-left::before {
  content: "\F0441" !important;
  color: #f1eadc;
}
.mdi-chevron-right::before {
  content: "\F0443" !important;
  color: #f1eadc;
}
.v-btn--variant-elevated {
  background-color: transparent;
  box-shadow: none;
}
</style>
