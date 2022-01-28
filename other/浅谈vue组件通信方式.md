# 1.props/$emit(父子组件传递)
props：props可以是数组或对象，用于接收来自父组件通过v-bind传递的数据。
      当props为数组时，直接接收父组件传递的属性；当 props 为对象时，可以通过type、default、required、validator
      等配置来设置属性的类型、默认值、是否必传和校验规则。
$emit：在父子组件通信时，我们通常会使用$emit来触发父组件v-on在子组件上绑定相应事件的监听。
