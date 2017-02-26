<template>
    <div class="ss">
   <mt-search v-model="value"  placeholder="找电影、剧院"></mt-search>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                value:''
            }
        }
    }
</script>
<style scoped>
    .ss{
        height: 0.3rem;
    }
</style>