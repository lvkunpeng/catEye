<template>
    <div>
        <div class="topBar">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                selected:'',
                title:'猫眼电影',
                value:''
            }
        },
        methods:{

        },
        mounted:{

        },
    }
</script>

<style scoped>
    body, p {
        margin: 0;
    }

    .topBar{
        height: 70px;
        background-color: #ef4238;
    }
</style>
