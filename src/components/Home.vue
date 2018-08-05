<template>
  <!--所有内容被根节点包围-->
  <div id="home">
      <h1>{{msg}}</h1>
  </div>

</template>

<script>
  export default{
      data(){
          return{
            msg:"我是首页组件"
        }
      },methods:{

    }
  }

</script>

<style scoped>
  h1{
    color: red;
  }

</style>
