<template>
  <!--所有内容被根节点包围-->
  <div id="home">
      <v-header ref="Header"></v-header>
      <h1>{{msg}}</h1>
    <button @click="getChild()">获取子组件的属性+方法</button>
  </div>

</template>

<script>
  import Header from './Header.vue'
  export default{
      data(){
          return{
            msg:"我是首页组件"
        }
      },methods:{
          getChild(){
              console.log(this.$refs.Header.msg);
              this.$refs.Header.run();
          },
          run(){
              alert('父组件run方法')
          }

    }
      ,components:{
         'v-header':Header,
    }
  }

</script>

<style scoped>
  h1{
    color: red;
  }

</style>
