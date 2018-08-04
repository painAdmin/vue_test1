<template>
  <!--所有内容被根节点包围-->
  <div id="home">
    <v-header :title="title" :test="test" :run="run" :home="this"></v-header>
    <h1>{{msg}}</h1>
  </div>

</template>

<script>
  import Header from './Header.vue'
  export default{
      data(){
          return{
            msg:"我是首页组件测试绑定",
            title:'首页数据',
            test:'绑定无关属性'
        }
      },methods:{
          run(val){
            alert('首页组件run方法,传入子组件中的参数'+val);
          }

    },components:{
          'v-header':Header
    }
  }

</script>

<style scoped>
  h1{
    color: red;
  }

</style>
