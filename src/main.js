// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router/router.js'

import VueResource from 'vue-resource'

Vue.use(ElementUI);

// 使用VueResource
Vue.use(VueResource)

// 6 挂载路由
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   //简写形式 相当于  router:router
  render:h=>h(App)
})


// 7 渲染，动态加载匹配到的组件

// <router-view></router-view>
