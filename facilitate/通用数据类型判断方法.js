/**
 * 1
 */
function getType1(obj){
  let type = typeof obj
  // 先进行typeof判断，如果是基础数据类型，直接返回
  if(type !== "object") {    
    return type
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return getType2(obj).replace(/^\[object (\S+)\]$/, '$1'); 
}

getType([])            // "Array" typeof []是object，因此toString返回
getType('123')         // "string" typeof 直接返回
getType(window)        // "Window" toString返回
getType(null)          // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined)     // "undefined" typeof 直接返回
getType()              // "undefined" typeof 直接返回
getType(function(){})  // "function" typeof能判断，因此首字母小写
getType(/123/g)        // "RegExp" toString返回


/**
 * 2
 */
// 如果觉得判断大小写麻烦可以直接用Object.prototype.toString
function getType2(obj){
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1'); 
}

getType2({})            // "[object Object]"
getType2(1)             // "[object Number]"
getType2('1')           // "[object String]"
getType2(true)          // "[object Boolean]"
getType2(function(){})  // "[object Function]"
getType2(null)          // "[object Null]"
getType2(undefined)     // "[object Undefined]"
getType2(/123/g)        // "[object RegExp]"
getType2(new Date())    // "[object Date]"
getType2([])            // "[object Array]"
getType2(document)      // "[object HTMLDocument]"
getType2(window)        // "[object Window]"