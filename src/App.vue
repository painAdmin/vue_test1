<template>
  <div id="app">
    <input type="text" v-model="todo" @keyDown="add($event)"><button @click="add()">+添加</button>
    <hr>
    <h1>正在进行中</h1>
    <ul>
      <li v-for="(item,key) in list"  v-if="item.checked==false">
        <input type="checkbox" v-model="item.checked" @change="saveList()"/>{{item.title}} - ---<button @click="del(key)">-删除</button>
      </li>
    </ul>
    <hr>
    <h1>已完成</h1>
    <ul>
      <li v-for="(item,key) in list"  v-if="item.checked==true">
        <input type="checkbox" v-model="item.checked" @change="saveList()"/>{{item.title}} - ---<button @click="del(key)">-删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  /*
  场景： 表单中使用
   mvvm 双向数据绑定
   model -》 view
   view -》 model
   */
export default {
  name: 'App',
  data(){
      return{
        todo:"",
        list:[]
    }
  },methods:{
      add(e){
//         if(!e || e.keyCode!=13){
//            return
//         }

          var item={"title":this.todo,"checked":false};
          this.list.push(item);
          localStorage.setItem('key',JSON.stringify(this.list))
      },
      del(val){
        this.list.splice(val,1);  //在数组 val位置 删除一个元素
        localStorage.setItem('key',JSON.stringify(this.list));
      },
      saveList(){
          localStorage.setItem('key',JSON.stringify(this.list));
      }

  },mounted(){
      var list=JSON.parse(localStorage.getItem('key'));
      if(list){
        this.list=list;
      }

  }

}
</script>

<style>
  .red{
    color: red;
  }
</style>
