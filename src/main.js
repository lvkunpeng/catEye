import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import MintUI, {Tabbar, TabItem, TabContainer, TabContainerItem, Search} from "mint-ui";
import home from "./compontent/home/home.vue";
import filmDetil from "./compontent/filmDetil/filmDetil.vue";
import "mint-ui/lib/style.css";
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Search.name, Search);
Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
const router = new VueRouter({
    routes: [
        {path: '/', component: home},
        {path: '/filmDetil', component: filmDetil},
    ]
});
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
});
//将vuex注入跟目录后子组件通过this.$store.state获得全局的state
//可以通过store.commit('increment')触发状态的变更。
new Vue({
    el: '#app',
    store,
    router: router,
    render: h => h(App)
});



