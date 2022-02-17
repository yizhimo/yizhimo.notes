// 常见react-hooks

// useState
// (改变必须通过set来改变)
// const [num, setNum] = useState(111)

// useEffect
// (代替componentDidMount和componentDidUpdate生命周期)
// (第二个是依赖，改变时才会执行useEffect)
// useEffect(() => {
//     // 进行操作

//     return () => {
//         // 组件发生更新或者销毁就会执行
//     }
// }, [])

// useContext
// 外层
// const UserContext = createContext()
// 里层
// const user = useContext(UserContext)

// useReducer
// (并不是redux的替代品，仅仅是useState的替代方案)
// 外层文件(共享的是reducer这个函数，状态数据不会共享)
// function reducer(state, action) {
//     switch (action.type) {
//         case 'add':
//             return { ...state, num: state.num + 1}
//         default:
//             return state
//     }
// }
// // const [num, setNum] = useState(111)
// const [state, dispatch] = useReducer(reducer, {num: 111})
// 使用
{/* <div>{state.num}</div>
<button onClick={e => dispatch({type: 'add'})}>+1</button> */}

// useCallback
// 依赖发生改变才会返回新的值
// (实际为了性能优化用的)
// 没有性能优化 (因为useCallback里始终会创建一个函数)
// const add1 = useCallback(() => {
//     console.log('add1')
//     setNum(num + 1)
// }, [num])
// 有性能优化
// 将一个组件里的函数传递给子元素进行回调时，组件刷新时，依赖项进行浅层比较，没变就不会重新渲染，常与memo(在组件中用)一起使用

// useMemo
// 依赖发生改变才会返回新的值
// (实际为了性能优化用的)
// num发生改变才会重新执行并返回新的值
// const newNum = useMemo(() => {
//     return add(num)
// }, [num])
// 传入子组件应用-性能优化(不使用useState定义数据时) (子组件用memo包裹)
// const info = useMemo(() => {
//     return {name: 'yzm', age: 18}
// }, [])
// 此时组件重新渲染时，便不会重新定义

// useCallback/useMemo区别
// useCallback对传入的回调函数优化；useMemo对传入的值优化(可以是任何类型)

// useRef
// const titleRef = useRef()
// function changeDom() {
//   titleRef.current.innerHTML = 'yzm'
// }
// <button onClick={e => changeDom()}></button>
// 组件绑定ref的话必须是类组件
// useRef()里传入值的话就是current当前值 但是在整个生命周期里不会改变

// useImperativeHandle
// 传进来的ref通过forwardRef包裹函数
// useImperativeHandle(父组件传给子组件的ref, () => ({
//   // 现在current返回的就是当前对象，只暴露当前对象里的东西
//   focus: () => {
//      inputRef.current.focus()
//   }
// }), [inputRef])

// useLayoutEffect
// useLayoutEffect是在渲染更新到dom之前执行，会阻塞dom更新；useEffect是在之后，不会阻塞

// 自定义hook
// 公共代码逻辑抽取，但函数命名前面必须加上use，这样才能在函数里使用hooks
