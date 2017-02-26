<template>
    <div id="home">
        <topBar class="top"></topBar>
        <Navs></Navs>
    </div>
</template>
<script>
    import Navs from '../nav/nav.vue'
    import topBar from '../topBar/topBar.vue'
    import search from '../search/search.vue'
    export default{
        name: 'home',
        components: {Navs, topBar, search}
    }
</script>
<style scoped>
    #home {
        overflow: hidden;
    }

    .top {
        z-index: 2;
    }
</style>