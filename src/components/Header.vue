<template>
  <div id="header">
      <h1>{{msg}}</h1>
    <button @click="getParent()">获取父组件的属性+方法</button>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            msg:"我是头部组件"
          }
      },methods:{
          run(){
              alert('header 组件方法！');
          },
          getParent(){
              console.log(this.$parent.msg);
              this.$parent.run();
          }

    }
  }
</script>
<style scoped>

</style>
