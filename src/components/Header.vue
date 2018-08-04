<template>
  <div id="header">
        <h1>{{msg}}  ::: {{title}}::::{{test}}</h1>
    <button @click="run('子组件方法入参')">方法执行</button>
    <button @click="getParent()">获取父组件数据+方法+dom</button>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            msg:"我是头部组件"
          }
      },methods:{
          getParent(){
//              alert(this.title);
              console.log("执行结束:"+this.home.title);
          }

    },props:['title','test','run','home']
  }
</script>
<style scoped>

</style>
