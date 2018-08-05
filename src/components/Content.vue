<template>
  <div id="content">
       我是详情
        <h1>{{msg}}</h1>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            msg:'我是数据',
            aid:''
          }
      },mounted(){
           console.log(this.$route.params);
           var aid=this.$route.params.aid;
           var url='http://localhost:8082/getData?aid='+aid;
           this.$http.get(url).then(function(res){
               this.msg=res.bodyText;
           })
    }
  }
</script>
<style>

</style>
