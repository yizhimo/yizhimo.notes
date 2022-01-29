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