// import/export 13.2.0开始支持(不能通过ES6的方式)
// commonjs一种实现 -> nodejs
// const redux = require('redux');

// 安装 导入redux
import redux from 'redux';

import reducer from './reducer.js';

// store(创建的时候需要传入一个reducer)
const store = redux.createStore(reducer);

export default store;