<template>
  <div id="News">
    <h1>这是news 组件</h1>
      <ul>
        <li v-for="(item,key) in list" v-if="key!=1">{{item}}</li>
      </ul>
  </div>

</template>
<script>
  export default{
      data(){
          return{
           list:['张三','李四','王五']
          }
      }
  }
</script>
<style scoped>

</style>
