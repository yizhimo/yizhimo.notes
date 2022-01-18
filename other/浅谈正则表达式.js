// 正则表达式是匹配模式，要么匹配字符，要么匹配位置

// ^ 匹配行的开头
// $ 匹配行的结尾
let userName = 'yz'
console.log(userName.replace(/$/, 'm'))
// \b 单词的边界位置  \B 非单词的边界位置(\b反着来)

// (?=p) 符合p的前面位置  (?!p) 除了符合p的前面位置的位置
let userName1 = 'zm'
console.log(userName1.replace(/(?=zm)/g, 'y'))
// (?<=p) 符合p的后面位置  (?<!p) 除了符合p的后面位置的位置
let userName2 = 'yz'
console.log(userName2.replace(/(?<=yz)/g, 'm'))
// 例:
let price = '123456789'
let priceReg = /(?!^)(?=(\d{3})+$)/g
let priceReg1 = /(?<!\.\d*)\B((?=(\d{3})+(?!\d)))/g  // 千分位金额(包含小数)
console.log(price.replace(priceReg, ','))  // 123,456,789
let mobile = '11122223333'
let mobileReg = /(?=(\d{4})+$)/g
console.log(mobile.replace(mobileReg, '-'))  // 111-2222-3333
let reg = /(?=.*\d)/  // 任意数量的符号前面紧跟着是个数字
console.log(reg.test('hello'))   // false
console.log(reg.test('hello1'))  // true
console.log(reg.test('1hello'))  // true
console.log(reg.test('hel2lo'))  // true

// 范围表示  [123456abcdefABCDEF] => [1-6a-fA-F]
// \d  // 数字
// \D  // 非数字
// \w  // [0-9a-zA-Z_]
// \W  // [^0-9a-zA-Z_]
// {m,} // 至少出现m次
// {m} // 出现m次

let regex1 = /\d{2,5}/g   // 贪婪匹配
let regex2 = /\d{2,5}?/g  // 惰性匹配
let string1 = '123 1234 12345 123456'
// string1.match(regex1) // [ 123, 1234, 12345, 12345 ]
// string1.match(regex2) // [ 12, 12, 34, 12, 34, 12, 34, 56  ]
let regex3 = /id=".*?"/  // 要加? 不加的话 连后面的class都会匹配到
let string3 = '<div id="container" class="main"></div>';
console.log(string3.match(regex3)[0]);