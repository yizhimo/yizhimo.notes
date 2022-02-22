import store from './store/index.js';

import {
  addAction,
  subAction,
  incAction,
  decAction
} from './store/action.js';

// 派发action之前要订阅store的修改
store.subscribe(() => {
  console.log("counter:", store.getState().counter);
})

// 派发action
store.dispatch(addAction(10));
store.dispatch(addAction(15));
store.dispatch(subAction(8));
store.dispatch(subAction(5));
store.dispatch(incAction());
store.dispatch(decAction());


// redux
// 核心理念: store reducer action
// 三大原则: 1.单一数据源；2.state是只读的；3.进行修改必须使用纯函数