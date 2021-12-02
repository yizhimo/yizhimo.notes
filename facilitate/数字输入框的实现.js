// 拿element-ui的输入框举例  (因为element-ui目前没有实现数字输入框)
<el-input 
  v-model="input_value" 
  onkeyup="value=value.replace(/[^\d]/g,'')" 
  placeholder="请输入" 
/>