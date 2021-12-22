// 以JQ为例子
$(document).click(function(event) {
  var _con = $('.dom')  // 设置目标区域
  if(!_con.is(event.target) && _con.has(event.target).length === 0) {
    // 操作...(比如消失)
  }
})