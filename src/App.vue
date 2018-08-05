<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <!--第三步 在模板中使用-->
    <hr>
    <router-view></router-view>
    <hr>
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
