<template>
  <!--所有内容被根节点包围-->
  <div id="home">
     <v-header></v-header>
      <h1>{{msg}}</h1>
      <button @click="req()">请求数据</button>
  </div>

</template>

<script>
  import Header from './Header.vue';
  import Lify from './Lify.vue';
  export default{
      data(){
          return{
            msg:"我是首页组件"

        }
      },methods:{
          req(){
             var url="http://localhost:8082/getData";
             this.$http.get(url).then(function(response){
                 console.log("成功"+response);
             },function(error){
                 console.log("失败"+error);
             });
          }
    },components:{
          'v-header':Header
    },mounted(){
          //生命周期函数内调用方 直接 this
//          this.req();
    }

  }

</script>

<style scoped>
  h1{
    color: red;
  }

</style>
