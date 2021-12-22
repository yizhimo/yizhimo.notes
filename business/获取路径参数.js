// 1.
function getQueryVariable(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split("&")
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=")
    if (pair[0] == variable) {
      return pair[1]
    }
  }
  return false
}
getQueryVariable('路径参数')

// 2.
const q = {};
location.search.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>q[k]=v);
console.log(q); 