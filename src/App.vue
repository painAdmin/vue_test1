<template>
  <div id="app">
    <h1>测试style</h1>
    {{msg}}
    <!--第三步 在模板中使用-->
    <v-home></v-home>
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
         msg:"测试双向数据绑定"
    }
  },
  /*第二部 注册组件*/
  components:{
    'v-home':Home,
    'v-news':News
  },
//  mounted(){//页面刷新 时候触发
//      alert('生命周期');
//  }

}
</script>

<style>

</style>
