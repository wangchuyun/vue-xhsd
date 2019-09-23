import VueRouter from 'vue-router'

//导入对应的路由组件
import ShopcarCont from './components/tabbar/ShopcarCont.vue'
import SortCont from './components/tabbar/SortCont.vue'
import MyselfCont from './components/tabbar/MyselfCont.vue'
import HomeCont from './components/tabbar/HomeCont.vue'
import BookSuper from './components/tabbar/BookSuper.vue'
//登录注册子组件
import login from './components/subcom/login.vue'
import register from './components/subcom/register.vue'
import liter from './components/subcom/liter.vue'
import human from './components/subcom/human.vue'
import children from './components/subcom/children.vue'
import child from './components/subcom/child.vue'
import uservip from './components/subcom/uservip.vue'

//创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/',redirect: '/home'},
        { path: '/home', component:HomeCont },
        { path: '/sort', 
        component:SortCont,
        children: [       
            { path: '/',redirect: 'liter'},
           { path: 'liter', component:liter },
           { path: 'human', component:human },
           { path: 'children', component:children },
           { path: 'child', component:child },


       ]
     },
        { path: '/shopcar', component:ShopcarCont },
        { path: '/myself', 
        component:MyselfCont,
        children: [       
             { path: '/',redirect: 'login'},
            { path: 'login', component:login },
            { path: 'register', component:register },
            { path: 'uservip', component:uservip },
        ]
    },
        { path: '/BookSuper', component:BookSuper },



    ],
    linkActiveClass:'mui-active',//覆盖默认路由高亮的类
    // linkExactActiveClass:'active'
    
})
export default router