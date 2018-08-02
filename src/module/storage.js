// 封装操作 localStorage 操作
// 相当于模块化的文件

var storage={
   set(key,value){
     localStorage.setItem(key,JSON.stringify(value));
   },
  get(key){
     return JSON.parse(localStorage.getItem(key));
  },
  remove(key){
    localStorage.removeItem(key);
  }
}
// 向外 暴露模块
export default storage;
