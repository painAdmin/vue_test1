<template>
  <!--所有内容被根节点包围-->
  <div id="home">
      <h1>{{msg}}</h1>
    <button @click="toNews()">通过js跳转到新闻</button>
    <el-row>
      <el-button class="el-icon-error">默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
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
