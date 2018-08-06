<template>
  <!--所有内容被根节点包围-->
  <div id="home">
      <h1>{{msg}}</h1>
    <button @click="toNews()">通过js跳转到新闻</button>
  </div>

</template>

<script>
  export default{
      data(){
          return{
            msg:"我是首页组件",
            list:['1atest','ipad','苹果']
        }
      },methods:{
        toNews(){
//           this.$router.push({path:'/news'})
          this.$router.push({name:'news'})
        }
    }
  }

</script>

<style scoped>
  h1{
    color: red;
  }

</style>
