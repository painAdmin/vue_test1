<template>
  <div id="app">
    <header class="header">
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
    </header>

    <!--第三步 在模板中使用-->
    <hr>
    <router-view></router-view>
    <hr>
    <h1>我是根组件底部</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
      return{
    }
  }
}
</script>

<style>

</style>
