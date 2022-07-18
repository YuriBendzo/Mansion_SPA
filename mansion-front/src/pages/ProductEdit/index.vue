<template>
  <div>
    <main-master-page>
      <div class="container">
        <section class="edit__products">
          <h1 class="title">Редактор</h1>
          <edit-form></edit-form>
        </section>
      </div>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage";
import EditForm from "@/components/EditForm";
export default {
  name: "ProductEdit",
  components: {
      MainMasterPage,
      EditForm,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/global";
.edit__products {
  margin-top: 150px;
}
</style>
