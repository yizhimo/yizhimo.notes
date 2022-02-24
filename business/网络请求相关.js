// 原生ajax
// 1：创建Ajax对象
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');// 兼容IE6及以下版本
// 2：配置 Ajax请求地址
xhr.open('get','index.xml',true);
// // 3：发送请求
// xhr.send(null);
// 4:监听请求，接受响应
xhr.onreadysatechange = function(){
  if(xhr.readySate == 4 && xhr.status == 200 || xhr.status == 304) {
    console.log(xhr.responsetXML)
  }
}
xhr.onerror = function() {
  
};
// 设置响应的数据类型
xhr.responseType = "json";
// 设置请求头信息
xhr.setRequestHeader("Accept", "application/json");
// 发送 http 请求
xhr.send(null);
 
// jq
$.ajax({
  type: 'post',
  url: '',
  async: ture,  // async 异步  sync  同步
  data: data,  // 针对post请求
  dataType:'jsonp',
  success:function (msg) {

  },
  error:function (error) {

  }
})

// axios封装
import axios from 'axios'
import { BASE_URL, TIMEOUT } from "./config"

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(config => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

  // 3.params/data序列化的操作

  return config
}, err => {

})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误")
        break;
      case 401:
        console.log("未授权访问")
        break;
      default:
        console.log("其他错误信息")
    }
  }
  return err
})

export default instance
