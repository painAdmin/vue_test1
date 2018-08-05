<template>
  <div id="news">
    <h1>{{msg}}</h1>
    <button @click="requestData()">请求数据</button>
    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/content/'+key">{{key}}---{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
      data(){
          return{
              msg:'新闻组件',
             list:['aaaa','bbbb','ccc']
          }
      },methods:{

          requestData(){
            var url='http://localhost:8082/getData?aid=1';
            this.$http.get(url).then(function(res){
//                成功回调
                this.list=[res.bodyText];
            });
          }
    }
  }
</script>
