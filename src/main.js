
// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'
import app from './App.vue'


import axios from 'axios';

import Toast from 'muse-ui-toast';
Vue.use(Toast);


import './lib/mui/css/mui.css'
import './lib/mui/js/mui.min.js'
import './lib/mui/css/icons-extra.css'

//导入jq
// import $ from 'jquery'
// Vue.use($)
//导入bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// 
import { Header,Swipe, SwipeItem,Search } from 'mint-ui'
Vue.component(Header.name, Header);


import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.$ajax = axios

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex);
var store = new Vuex.Store({
    state: {//this.$store.state.***
        car:[], //购物车中商品的数据，{商品名称，购买数量，商品价格，selected}
        count:0

    },
    mutations: {//this.$store.commit('方法名称'，'按需传递唯一的参数')
    addcarshop(state){

        state.count++
    },
    redusceshop(state){
        if(state.count>1){
            state.count--
        }
        
    },

    // addtocar(state,getBookList){
    //     var flag = false
    //     state.car.some(i => {
    //         if(i.id == getBookList.id){
    //             i.count +=parseInt(getBookList.count)
    //             flag = true
    //             return true
    //         }
    //     })
    //     //如果最终循环完毕，得到的flag还是false，则把商品数据直接push到购物车中
    //     if(!flag){
    //         state.car.push(getBookList)
    //     }

    // }

    },
    getters: {//this.$store.getters.***

    }
})

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入自己的router.js路由模块
import router from './router.js'

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },

    // render: function (createElements) {
    //     return createElements(login)

    // }
    render:c => c(app),
    router,
    store //挂载store状态管理对象

})