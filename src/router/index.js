//引入、配置路由的相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
//1.Vue.use安装插件
Vue.use(VueRouter)
import HomePage from '../pages/HomePage.vue'
import Home from '../pages/Home.vue'
import Reference from '../pages/Reference.vue'
import OneSelf from '../pages/OneSelf.vue'
import Share from '../pages/Share.vue'
import Login from '../pages/Login.vue'
import register from '../components/register.vue'
import sign from '../components/Sign.vue'
const routes =[
     {
          path:"/",
          component:HomePage,
          children:[
               {
                    path:"Home",
                    component:Home
               },{
                    path:"Reference",
                    component:Reference
               },{
                    path:'OneSelf',
                    component:OneSelf
               },{
                    path:'Share',
                    component:Share
               }
          ]
     },{
          path:"/Login",
          component:Login,
          children:[
               {
                    path:"register",
                    component:register
               },{
                    path:"sign",
                    component:sign
               }
          ]
     }
]
//2.创建路由对象
const router = new VueRouter({
     //配置路由与组件的关系
     routes,

})
//3.将router对象导出
export default router


