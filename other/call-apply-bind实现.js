// call
// 给所有的函数添加一个ycall的方法
Function.prototype.ycall = function(thisArg, ...args) {
  // 在这里可以去执行调用的那个函数(foo)
  // 问题: 得可以获取到是哪一个函数执行了ycall
  // 1.获取需要被执行的函数
  var fn = this

  // 2.对thisArg转成对象类型(防止它传入的是非对象类型)
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg): window

  // 3.调用需要被执行的函数
  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn

  // 4.将最终的结果返回出去
  return result
}
function test1(num1, num2) {
  console.log("test1函数被执行", this, num1, num2)
  return num1 + num2
}
var callResult = test1.ycall("abc", 20, 30)
console.log('callResult', callResult)

// apply
Function.prototype.yapply = function(thisArg, argArray) {
  // 1.获取到要执行的函数
  var fn = this

  // 2.处理绑定的thisArg
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg): window

  // 3.执行函数
  thisArg.fn = fn
  var result
  argArray = argArray || []
  result = thisArg.fn(...argArray)
  delete thisArg.fn

  // 4.返回结果
  return result
}
function test2(num1, num2) {
  console.log("test2函数被执行", this, num1, num2)
  return num1 + num2
}
var applyResult = test2.yapply("abc", 20, 30)
console.log('applyResult', applyResult)

// bind
Function.prototype.ybind = function(thisArg, ...argArray) {
  // 1.获取到真实需要调用的函数
  var fn = this

  // 2.绑定this
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg): window

  function proxyFn(...args) {
    // 3.将函数放到thisArg中进行调用
    thisArg.fn = fn
    // 特殊: 对两个传入的参数进行合并
    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn

    // 4.返回结果
    return result
  }

  // 5.返回函数
  return proxyFn
}
function test3(num1, num2) {
  console.log("test3函数被执行", this, num1, num2)
  return num1 + num2
}
var newSum = test3.ybind("abc", 10, 20)
var bindResult = newSum(30, 40)
console.log('bindResult', bindResult)