<template>
  <div id="header">
     <h1 v-html="msg"></h1>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            msg:'我是头部组件'
          }
      }
  }

</script>
<style scoped>

</style>
