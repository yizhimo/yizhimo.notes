# 1.props/$emit(父子组件传递)
props：props可以是数组或对象，用于接收来自父组件通过v-bind传递的数据。
      当props为数组时，直接接收父组件传递的属性；当 props 为对象时，可以通过type、default、required、validator
      等配置来设置属性的类型、默认值、是否必传和校验规则。
$emit：在父子组件通信时，我们通常会使用$emit来触发父组件v-on在子组件上绑定相应事件的监听。

# 2.v-slot插槽
父向子传值：父组件通过
          <template v-slot:child>{{ message }}</template>
          将父组件的message值传递给子组件，子组件通过
          <slot name="child"></slot>
          接收到相应内容，实现了父向子传值。
子向父传值(作用域插槽)：子组件通过属性
          <slot :自定义属性名=‘值’></slot>
          将自己内部的原始类型给到父组件；父组件
          <template  slote-scope='自定义接收'></template>

# 3.获取组件实例传值
$refs/$parent/$children/$root

# 4.$attrs/$listener
$attrs：用来接收父作用域中不作为 prop 被识别的 attribute 属性，并且可以通过v-bind="$attrs"传入内部组件
$listeners：包含了父作用域中的 v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件

# 5.provide/inject(不是响应式的)
provide() {
  return {
    messageFromA: this.message  // 将message通过provide传递给子孙组件(message最好是对象类型)
  }
}
inject: ['messageFromA']  // 通过inject接受A中provide传递过来的message

# 6.事件总线eventBus
Vue.prototype.$Bus = new Vue()
// eventBus原理
export default class Bus {
  constructor() {
    this.callbacks = {}
  }
  $on(event, fn) {
    this.callbacks[event] = this.callbacks[event] || []
    this.callbacks[event].push(fn)
  }
  $emit(event, args) {
    this.callbacks[event].forEach((fn) => {
      fn(args)
    })
  }
}

// 在main.js中引入以下
// Vue.prototype.$bus = new Bus()

// 使用
this.$bus.$on('sendMessage', (obj) => {  // 通过eventBus监听sendMessage事件
  const { sender, message } = obj
  this.sender = sender
  this.messageFromBus = message
})
sendMessageDom() {
  this.$bus.$emit('sendMessage', { // 通过eventBus触发sendMessage事件
    sender: this.$options.name,
    message: this.message,
  })
},

# 7.Vuex/Pinia
