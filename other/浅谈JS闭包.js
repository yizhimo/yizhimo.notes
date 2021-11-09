// 这就形成了闭包
var a = 1
function foo() {
  console.log(a)
}
foo()

// 利用闭包可以这样做(而利用闭包可以做很多事,这只是其中一种情况)
function bar() {
  var a = 1
  function foo() {
    console.log(a)
    return a + 1
  }
  return foo()
}
var b = bar()
console.log(b)