<template>
    <div class="all">
        <div class="bg"></div>
        <topBar></topBar>
        <div class="filmInfo">
            <div class="top">
                <img src="http://p1.meituan.net/165.220/movie/f2c42c3bb14aa32726e5e6f42783a5945961833.jpeg" alt="">
                <div class="left">
                    <h3>生化危机：终章</h3>
                    <h5>Resident Evil: The Final Chapter</h5>
                    <ul class="list">
                        <li>动作、惊悚、科幻</li>
                        <li>美国/99分钟</li>
                        <li>2017年-02-24大陆上映</li>
                    </ul>
                </div>
                <div class="bottom">
                    <div class="button1">想看</div>
                    <div class="button1">评分</div>
                </div>
            </div>
            <div class="content">
                <p>爱丽丝在华盛顿特区被威斯克背叛后身陷险境，人类几乎要失去最后的希望。作为唯一的幸存者，也是人类对抗僵尸大军的最后防线...</p>
            </div>
        </div>
        <div class="personDetail">
            <p>演职人员</p>
            <div id="wrapper">
                <ul>
                    <li>
                        <img src="http://p0.meituan.net/movie/c9f9504a2ba5e5ea277299b18b9e532a53858.jpg@130w_180h.webp"
                             alt="">
                        <h4>保罗.安德森</h4>
                        <h5>导演</h5>
                    </li>
                    <li>
                        <img src="http://p0.meituan.net/movie/c9f9504a2ba5e5ea277299b18b9e532a53858.jpg@130w_180h.webp"
                             alt="">
                        <h4>保罗.安德森</h4>
                        <h5>导演</h5>
                    </li>
                    <li>
                        <img src="http://p0.meituan.net/movie/c9f9504a2ba5e5ea277299b18b9e532a53858.jpg@130w_180h.webp"
                             alt="">
                        <h4>保罗.安德森</h4>
                        <h5>导演</h5>
                    </li>
                    <li>
                        <img src="http://p0.meituan.net/movie/c9f9504a2ba5e5ea277299b18b9e532a53858.jpg@130w_180h.webp"
                             alt="">
                        <h4>保罗.安德森</h4>
                        <h5>导演</h5>
                    </li>
                    <li>
                        <img src="http://p0.meituan.net/movie/c9f9504a2ba5e5ea277299b18b9e532a53858.jpg@130w_180h.webp"
                             alt="">
                        <h4>保罗.安德森</h4>
                        <h5>导演</h5>
                    </li>
                    <li>
                        <img src="http://p0.meituan.net/movie/c9f9504a2ba5e5ea277299b18b9e532a53858.jpg@130w_180h.webp"
                             alt="">
                        <h4>保罗.安德森</h4>
                        <h5>导演</h5>
                    </li>
                    <li>
                        <img src="http://p0.meituan.net/movie/c9f9504a2ba5e5ea277299b18b9e532a53858.jpg@130w_180h.webp"
                             alt="">
                        <h4>保罗.安德森</h4>
                        <h5>导演</h5>
                    </li>
                    <li>
                        <img src="http://p0.meituan.net/movie/c9f9504a2ba5e5ea277299b18b9e532a53858.jpg@130w_180h.webp"
                             alt="">
                        <h4>保罗.安德森</h4>
                        <h5>导演</h5>
                    </li>
                </ul>
            </div>

        </div>
        <div class="buy">优惠购票</div>
    </div>
</template>
<script>
    import topBar from '../topBar/topBar.vue'
    export default{
        data(){
            return {}
        },
        mounted(){
            this.load()
        },
        methods: {
            load: function () {
                new IScroll('#wrapper', {
                    scrollbars: false,
                    scrollX: true,
                    scrollY: false,
                });
                var myScroll;
                function loaded() {
                    setTimeout(function () {
                        myScroll = new iScroll('wrapper');
                    }, 1);
                }
                window.addEventListener('load', loaded, false);
            }
        },
        components: {topBar}
    }
</script>
<style scoped>
    .bg {
        width: 100%;
        height: 5rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background: url("http://p1.meituan.net/165.220/movie/f2c42c3bb14aa32726e5e6f42783a5945961833.jpeg") no-repeat;
        background-size: 100%;
        -webkit-filter: blur(25px);
        -moz-filter: blur(25px);
        -ms-filter: blur(25px);
        filter: blur(20px);
    }

    .top {
        margin-top: 1rem;
        padding: 0.5rem 0.2rem 0 0.3rem;
        height: 3.8rem;
    }

    img {
        width: 1.8rem;
        float: left;
    }

    .left {
        float: left;
        margin-left: 0.4rem;
    }

    h3 {
        color: #ffffff;
        font-size: 0.4rem;
    }

    h5 {
        color: #ffffff;
        font-size: 12px;
    }

    .list {
        margin-top: 0.75rem;
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
    }

    .bottom {
        margin-top: 3rem;
        width: 6rem;
        height: 0.4rem;
    }

    .button1 {
        width: 2.8rem;
        font-size: 12px;
        float: left;
        height: 0.6rem;
        border-radius: 5px;
        background-color: #ffffff;
        opacity: 0.4;
        line-height: 0.6rem;
        text-align: center;
        margin-left: 0.1rem;
    }

    .content p {
        font-size: 16px;
        letter-spacing: 0.05rem;
    }

    .content {
        padding: 0 0.2rem 0.2rem 0.3rem;
        border-bottom: 1px solid #d9d9d9;
    }

    .personDetail {
        height: 3rem;
        margin-top: 0.15rem;
        border-top: 1px solid #d9d9d9;
        border-bottom: 1px solid #d9d9d9;
    }

    .personDetail p {
        font-size: 0.35rem;
    }

    .personDetail img {
        width: 1.3rem;
        height: 1.7rem;
    }

    .personDetail ul {
        margin-top: 0.2rem;
        height: 2.5rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 10rem;
    }

    .personDetail li {
        float: left;
        height: 2.5rem;
        margin-right: 0.1rem;
        text-align: center;
    }

    .personDetail li h4 {
        font-size: 12px;
        color: #0f0f0f;
    }

    .personDetail li h5 {
        font-size: 12px;
        color: #a1a1a1;
    }

    .buy {
        height: 1rem;
        background-color: #ee4238;
        width: 100%;
        font-size: 16px;
        line-height: 1rem;
        color: #ffffff;
        text-align: center;
        position: fixed;
        bottom: 0;
    }
    #wrapper{
        position: relative;
        width: 100%;
        overflow: hidden;
        height: 2.5rem
    }
</style>