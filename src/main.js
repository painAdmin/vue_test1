// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// vue 使用步骤
// 1）引入vue组件
import VueRouter from 'vue-router'
// 2) 使用vue
Vue.use(VueRouter)

// 3) 创建 组件
import Home from './components/Home.vue'
import News from './components/News.vue'
// 4) 配置路由
const  routes=[
  {path:'/home',component:Home},
  {path:'/news',component:News},
  {path:'*',redirect:'/home'}
]
// 5 实例化VueRouter
const router=new VueRouter({
    routes      // 相当于 routes:routes
})
// 6 挂载路由
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   //简写形式 相当于  router:router
  render:h=>h(App)
})


// 7 渲染，动态加载匹配到的组件

// <router-view></router-view>
