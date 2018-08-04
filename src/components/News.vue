<template>
  <div id="news">
      <h1>{{msg}}</h1>
  </div>
</template>
<script>
  import VueEvent from '../module/vueEvent'
  export default{
      data(){
          return{
            msg:"我是新闻组件"
          }
      },methods:{


    },components:{
          'vue-event':VueEvent
    },mounted(){
        VueEvent.$on('id-select',function(id){
        console.log('接收到:'+id);
      })
    }
  }


</script>
<style scoped>

</style>
