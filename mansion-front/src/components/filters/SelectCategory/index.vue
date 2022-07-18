<template>
  <div class="select">
    <p class="select__title select__title-edit">Виберіть категорію:</p>
    <div class="select__header" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </div>
    <div class="options" v-if="areOptionsVisible">
      <div
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectCategory",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.select {
  width: 200px;
  position: relative;
  cursor: pointer;
  margin-top: 30px;
  &__title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  &__header {
    border: 2px solid #000;
    padding: 5px;
    border-radius: 5px;
  }
}
.options {
  position: absolute;
  border: 2px solid #000;
  border-radius: 5px;
  width: 100%;
  margin-top: 5px;
  z-index: 3;
  background-color: #fff;
  & div:hover{
    background-color: #6e9c9f;
    border-radius: 4px;
  }
}
</style>
