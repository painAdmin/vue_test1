<template>
  <div id="app">
    <h1>test</h1>
    <button aid="ziroom" @click="out($event)">测试当事件对象</button>

  </div>
</template>

<script>
  /*
  场景： 表单中使用
   mvvm 双向数据绑定
   model -》 view
   view -》 model
   */
export default {
  name: 'App',
  data(){
      return{
          msg:"this  is test  App.Vue"
    }
  },methods:{
      out(e){
          console.log(e);
          e.srcElement.style.background="red";
        console.log(e.srcElement.attributes.aid);
      }
  }

}
</script>

<style>
  .red{
    color: red;
  }
</style>
