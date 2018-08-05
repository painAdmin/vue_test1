<template>
  <!--所有内容被根节点包围-->
  <div id="home">
      <h1>{{msg}}</h1>
    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/shopContent?aid='+key">{{item}}---{{key}}</router-link>
      </li>
    </ul>
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

    }
  }

</script>

<style scoped>
  h1{
    color: red;
  }

</style>
