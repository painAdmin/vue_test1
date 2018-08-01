<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <h2>{{obj.name}}</h2>
    <ul>
      <li v-for="item in list">{{item.name}}+{{item.age}}</li>
    </ul>

    <h3 v-bind:title="titletest">鼠标悬浮显示</h3>
     <br>
    <h3 v-bind:class="{'red':flag}">测试class</h3>
    这是一个根组件

    <ul>
      <li v-for="(item,key) in  list" v-bind:class="{'red':key==0}">{{item.name}}</li>
    </ul>


    <h3 v-bind:style="{'color':'blue','width':'500px'}">:style</h3>

    <input type="text" v-model="msg"/>
    <button @click="out()">获取表单里面的元素</button>
    <button v-on:click="setMsg()">设置表单中的元素</button>
    <hr>横线
    <input type="text" ref="refTest" /><button @click="getMsg()">获取表单中的属性值</button>
    <br/> 换行

    <div ref="refTest1">测试vue的ref属性</div>
    <button @click="run2()">测试ES6 方法写法</button>
    <hr>
    <button @click="array()">请求数据</button>
    <div>
      <ul>
        <li v-for="(item,key) in list2">这是第{{key}} 个 {{item}} 元素</li>
      </ul>
    </div>
    <button @click="deleteData('sss')">单击事件传值</button>


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
          msg:"this  is test  App.Vue",
          obj:{
              name:"zhang san",
              age:14
          },
          list:[
            {name:"sss1",age:12},
            {name:"sss2",age:13}
          ],
        list2:[],
        titletest:"标题",
        flag:true

    }
  }, methods:{
    out(){
      alert(this.msg);
    },
    setMsg(){
        this.msg="这是表单";
    },
    "getMsg"(){

       console.log(this.$refs.refTest.value);
       this.$refs.refTest1.style.background='red';
    },
    run2:function () {
      alert('shuchu');
    },
    array(){
      for(var i=0;i<5;i++){
          this.list2.push('test'+i);

      }
    },
    deleteData(val){
        alert(val)
    }

  }

}
</script>

<style>
  .red{
    color: red;
  }
</style>
