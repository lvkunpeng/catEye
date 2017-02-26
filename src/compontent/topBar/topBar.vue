<template>
    <div id="top">
        <p>{{title}}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                title: '猫眼电影'
            }
        }
    }
</script>
<style scoped>
    #top {
        height: 1rem;
        background-color: #dd4039;
        position: fixed;
        width: 100%;
        top:0;
    }
    p{
        font-size: 0.3rem;
        color: #ffffff;
        margin: 0;
        line-height: 1rem;
        padding-left: 0.3rem;
    }
</style>