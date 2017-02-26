<template>
   <router-view></router-view>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                selected:'',
                title:'猫眼电影',
                value:''
            }
        }
    }
</script>

<style scoped>
    body, p {
        margin: 0;
    }
    .tab-item .mt-tab-item{
        background-color: #f7f7fa;
    }
    .mint-tabbar > .mint-tab-item.is-selected{
        color: #ef4238;
    }
</style>
