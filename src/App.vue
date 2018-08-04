<template>
  <div id="app">

    <!--第三步 在模板中使用-->
    <v-home></v-home>
  </div>
</template>

<script>
  /*第一步 引入组件*/
  import Home from './components/Home.vue';

export default {
  name: 'App',
  data(){
      return{
    }
  },
  /*第二部 注册组件*/
  components:{
    'v-home':Home
  }

}
</script>

<style>

</style>
