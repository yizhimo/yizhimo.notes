// 1.对象的解构赋值和扩展运算符
const obj1 = {
  a: 111,
  b: 222,
  c: 333
}
const obj2 = { d: 444 }
const { a, b, c1: c } = obj1 || {}
console.log(a, b, c1)
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)

// 2.数组的合并和扩展运算符
const arr1 = [111, 222, 333]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)


// 3.字符串拼接``
const username = 'yzm'
const score = 59
const result = `${username}${score > 60 ? '的考试成绩及格' : '的考试成绩不及格'}`
console.log(result)

// 4.数组方法includes妙用
const type = 1
if(type === 1 || type === 2 || type === 3) {}
const condition = [1, 2, 3]
if(condition.includes(type)){}

// 5.空值合并运算符妙用
if(value !== null && value !== undefined && value !== '') {}
if((value ?? '') !== '') {}
