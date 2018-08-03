<template>
  <div id="header">
     <h1 v-html="msg"></h1>
    <button @click="request()">Axios 测试</button>
  </div>
</template>
<script>
//  引入Asios组件
import Axios from 'axios';
  export default{
      data(){
          return{
            msg:'我是头部组件'
          }
      },methods:{
          request(){
            var url="http://localhost:8082/getData";
             Axios.get(url).then(function(response){
              console.log(response);
             }).
              catch(function(error){
               console.log(error);
            });
          }
    }
  }

</script>
<style scoped>

</style>
