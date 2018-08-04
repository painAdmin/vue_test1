<template>
  <div id="app">

    <!--第三步 在模板中使用-->
    <v-home></v-home>
    <hr>
    <v-news></v-news>
  </div>
</template>

<script>
  /*第一步 引入组件*/
  import Home from './components/Home.vue';
  import News from './components/News.vue';

export default {
  name: 'App',
  data(){
      return{
    }
  },
  /*第二部 注册组件*/
  components:{
    'v-home':Home,
    'v-news':News
  }

}
</script>

<style>

</style>
