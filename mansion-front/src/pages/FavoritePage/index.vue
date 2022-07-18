<template>
    <div>
        <main-master-page>
            <div class="container">
                <div class="favorite">
                    <h2 class="title favorite__title">Улюблені товари</h2>
                    <fav-list></fav-list>
                </div>
            </div>
        </main-master-page>
    </div>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import FavList from '@/components/FavList'
    export default {
        name: 'FavoritePage',
        components: {
            MainMasterPage,
            FavList,
        },
    }
</script>

<style lang="scss" scoped>
.favorite {
    margin-top: 120px;
    &__title {
        margin-bottom: 30px;
    }
}
</style>