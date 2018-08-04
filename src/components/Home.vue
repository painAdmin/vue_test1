<template>
  <!--所有内容被根节点包围-->
  <div id="home">
      <h1>{{msg}}</h1>
    <button @click="send()">向news组件传值</button>
  </div>

</template>

<script>
  import VueEvent from '../module/vueEvent';
  export default{
      data(){
          return{
            msg:"我是首页组件"
        }
      },methods:{
         send(){
             VueEvent.$emit('id-select',1);
         }
    },components:{
       'vue-event':VueEvent
    }
  }

</script>

<style scoped>
  h1{
    color: red;
  }

</style>
