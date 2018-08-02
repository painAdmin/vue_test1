<template>
  <!--所有内容被根节点包围-->
  <div id="home">
    <v-header></v-header>
          <h1 v-text="msg"></h1>
          <button @click="out()">按钮</button>

    <h1 v-text="msg1"></h1>
    <button @click="change()">改变msg1</button>

    <v-lify v-if="flag"></v-lify>

    <button @click="flag=!flag">挂载以及卸载lify</button>
  </div>

</template>

<script>
  import Header from './Header.vue';
  import Lify from './Lify.vue';
  export default{
      data(){
          return{
            msg:"我是首页组件测试绑定",
            msg1:'我是生命周期演示',
            flag:''
        }
      },methods:{
          out(){
              alert(this.msg);
          },
          change(){
              this.msg1='改变后'
          },
          delModule(){
              this.flag=false
          }

    },components:{
          'v-header':Header,
          'v-lify':Lify
    },beforeCreate(){
          console.log('实例创建之前')
    },created(){
        console.log('实例创建之后')
    },beforeMount(){
        console.log('DOM渲染之前')
    },mounted(){
        console.log('DOM渲染之后')
    },beforeUpdate(){
        console.log('数据更新之前')
    },updated(){
       console.log('数据更新之后')
    },
    beforDestory(){
        console.log('Vue销毁之前')
    },destoryed(){
        console.log('Vue销毁之后')
    }
  }

</script>

<style scoped>
  h1{
    color: red;
  }

</style>
