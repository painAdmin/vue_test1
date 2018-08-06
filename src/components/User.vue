<template>
  <div id="user">
     <h1>{{msg}}</h1>

    <div class="user">
      <div class="left">
           <ul>
             <router-link to="/user/userAdd"> <li>增加用户</li></router-link>
             <router-link to="/user/userList"><li>用户列表</li></router-link>
           </ul>
      </div>
      <div class="right">
          <!--内容区域-->
         <!--动态加载的组件 ，渲染的位置-->
          <router-view></router-view>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
      data(){
          return{
             msg:'用户中心'
          }
      }
  }
</script>
<style  scoped>
    .user{
      display: flex;
    }
  .left{
    width: 200px;
    min-height: 400px;
    border-right: 2px solid #eee;

  }
  .right{
    flex:1;
  }
  .li{
    line-height: 2;
  }
</style>
