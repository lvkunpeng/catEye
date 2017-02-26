<template>
    <div id="navs">
        <mt-tabbar v-model="selected" class="is-fixed value">
            <mt-tab-item id="film" class="mt-tab-item">
                <img slot="icon" src="">
                电影
            </mt-tab-item>
            <mt-tab-item id="cinema" class="mt-tab-item">
                <img slot="icon" src="">
                影院
            </mt-tab-item>
            <mt-tab-item id="my" class="mt-tab-item">
                <img slot="icon" src="">
                我的
            </mt-tab-item>
        </mt-tabbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="film" class="film">
                <search class="search"></search>
                <mt-cell v-for="n in 20" class="list">
                    <router-link to="/filmDetil"><list></list></router-link>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="cinema" class="cinema">
                <search class="search"></search>
                <mt-cell v-for="n in 15">
                    <filmList></filmList>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="my" class="my">
                <mt-cell title="我的订单"></mt-cell>
                <mt-cell title="优惠券"></mt-cell>
                <mt-cell title="影院会员卡"></mt-cell>
                <mt-cell title="想看的电影"></mt-cell>
                <mt-cell title="看过的电影"></mt-cell>
                <p class="tel">猫眼电影 客服电话：<a href="tel:10105335">1010-5335</a></p>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    import search from '../search/search.vue'
    import list from '../list/list.vue'
    import filmList from '../list/filmList.vue'
    import filmDetil from '../filmDetil/filmDetil.vue'
    export default{
        data(){
            return {
                selected: 'film'
            }
        },
        components: {search, list, filmList,filmDetil}
    }
</script>
<style scoped>
    #navs {
        margin-top: 0.65rem;
        width: 100%;
        overflow: hidden;
    }

    .tel {
        height: 0.3rem;
        font-size: 15px;
        line-height: 0.3rem;
        margin-top: 4.5rem;
        margin-left: 25%;

    }

    .search {
        padding-top: 0.35rem;
        margin-bottom: 0.5rem;
    }

    .my {
        margin-top: 0.38rem;
    }
    .list {
        border-bottom: 1px solid #e6e6e6;
        height: 2rem;
    }

    .film {
        padding: 0;
    }

</style>