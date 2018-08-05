<template>
  <div id="shop">
    商品详情:+{{msg}}
  </div>
</template>
<script>
  export default{
      data(){
          return{
              msg:'我是数据'
          }
      },mounted(){
          this.msg=this.$route.query.aid
    }
  }
</script>
<style>

</style>
