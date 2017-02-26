<template>
    <div class="my">
        <div class="my-top">
            <ul>
                <router-link to="/order"><li>我的订单</li></router-link>
                <router-link to="/order"><li>优惠券</li></router-link>
                <router-link to="/order"><li>影院会员卡</li></router-link>
            </ul>
        </div>
        <div class="my-bottom">
            <ul>
                <li>想看的电影</li>
                <li>看过的电影</li>
            </ul>
        </div>
        <p>c猫眼电影 客服电话：<a href="tel:10105335">1010-5335</a></p>
    </div>
</template>
<script>
    export default {
      data(){
        return{

        }
      },
        mounted:{

        }
    }
</script>

<style scoped>
    ul{
        padding: 0;
        margin: 0;
    }
    .my {
       background-color: #f5f5f5;
    }

    li {
        height: 50px;
        background-color: #ffffff;
        line-height: 50px;
        font-size: 18px;
        border-bottom: 1px solid #e3e3e3;
        padding-left: 15px;
    }

    .my-top {

    }

    .my-bottom {

    }
    p{
        position: fixed;
        bottom: 70px;
        margin-left: 120px;
    }
</style>
