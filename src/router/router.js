import Vue from 'vue'

// vue 使用步骤
// 1）引入vue组件
import VueRouter from 'vue-router'
// 2) 使用vue
Vue.use(VueRouter)

// 3) 创建 组件
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Content from '../components/Content.vue'
import ShopContent from '../components/ShopContent.vue'

import User from '../components/User.vue'

import UserAdd from '../components/user/UserAdd.vue'
import UserList from '../components/user/UserList.vue'

// 4) 配置路由
const  routes=[
  {path:'/home',component:Home},
  {path:'/news',component:News,name:'news'},
  {path:'/content/:aid',component:Content},
  {path:'/shopContent',component:ShopContent},
  {
    path:'/user',
    component:User,
    children:[
      {path:'userAdd',component:UserAdd},
      {path:'userList',component:UserList}
    ]
  },
  {path:'*',redirect:'/home'}
]
// 5 实例化VueRouter
const router=new VueRouter({
  routes,      // 相当于 routes:routes
  mode:'history'
})


// 暴露 路由

export default router;
