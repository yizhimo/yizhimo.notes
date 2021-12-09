/**
 * 默认图 
 * src="/static/pc-show-page-static/img/new-index/lazy_default.png"
 * 图片地址
 * data-lazy 
 * */

// 1. 瀑布流
/**
 * lazy-img 直接懒加载
*/ 

// 2.带切换的
/**
 * lazy-tab (切换按钮)
 * lazy-tab-imgs (当前切换项) 
 * lazy-tab-img (当前切换项下需要懒加载图片)
 * */ 

 function getTop(e) {
  var T = e.offsetTop
  while(e = e.offsetParent) {
    T += e.offsetTop
  }
  return T
}

function lazyLoadImgs(lazy_imgs) {
  var H = document.documentElement.clientHeight
  var S = document.documentElement.scrollTop || document.body.scrollTop
  for (var i = 0; i < lazy_imgs.length; i++) {
    if(lazy_imgs[i].src.indexOf('lazy_default.png') != -1) {
      if (H + S > getTop(lazy_imgs[i])) {
        lazy_imgs[i].src = lazy_imgs[i].getAttribute('data-lazy')
      }
    }
  }
}

var lazy_imgs = document.querySelectorAll('.lazy-img')
var lazy_tabs = document.querySelectorAll('.lazy-tab')
var hArr = []
var lazy_tab_imgs = document.querySelectorAll('.lazy-tab-imgs')
if (lazy_tabs.length === 0) {
  window.onload = window.onscroll = function () {
    lazyLoadImgs(lazy_imgs)
  }
} else {
  for (var a=0; a < lazy_tabs.length; a++) {
    hArr.push(true)
    var _a = a
    if (a === 0) {
      var _a0 = a
      window.onload = window.onscroll = function () {
        lazyLoadImgs(lazy_imgs)

        var nodeImg0 = lazy_tab_imgs[_a0]
        lazyLoadImgs(nodeImg0.querySelectorAll('.lazy-tab-img'))
      }
    }
    lazy_tabs[a].addEventListener('click', function(_a) {
      return function() {
        var initH = document.body.scrollTop || document.documentElement.scrollTop
        if (hArr[_a]) {
          window.scrollTo(0, initH+1)
          hArr[0] = false
          hArr[_a] = false
        }
        window.onscroll = function () {
          lazyLoadImgs(lazy_imgs)

          var nodeImg = lazy_tab_imgs[_a]
          lazyLoadImgs(nodeImg.querySelectorAll('.lazy-tab-img'))
        }
      }
    }(_a))
  }
}