// 百度地图
function initMap(lng, lat) {
  $('#map').empty()
  map = new BMap.Map("map")
  map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
  map.centerAndZoom(new BMap.Point(lng, lat), 13);

  var marker = new BMap.Marker(new BMap.Point(lng, lat))  // 创建标注
  var content = address
  map.addOverlay(marker)  // 将标注添加到地图中
  addClickHandler(content, marker)
}

function addClickHandler(content, marker) {
  marker.addEventListener("click", function (e) {
    openInfo(content, e)
  })
}

function openInfo(content, e) {
  var opts = {
    width: 250, // 信息窗口宽度
    height: 80, // 信息窗口高度
    title: title, // 信息窗口标题
    enableMessage: true //设置允许信息窗发送短息
  }
  var p = e.target
  var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat)
  var infoWindow = new BMap.InfoWindow(content, opts)  // 创建信息窗口对象
  map.openInfoWindow(infoWindow, point)  // 开启信息窗口
}