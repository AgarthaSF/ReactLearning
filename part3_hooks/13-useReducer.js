import React, {useReducer} from 'react'

// 处理函数，第一个参数为老状态，第个参数为对象
// 能够有效地在外部管理状态
const reducer = (prevState, action)=>{
    console.log("reducer", prevState, action)
    // 不能直接对原状态进行修改，先对新状态进行操作再返回
    let newState = {...prevState}
    switch(action.type){
        case "AgarthaSF-minus":
            newState.count--
            return newState

        case "AgarthaSF-add":
            newState.count++
            return newState

        default:
            return prevState
    }
}

// 定义在外部的状态
const initialState = {
    count: 0,
}


export default function App() {

    // 第一个参数是状态值，第二个参数是改变状态的唯一方法
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={()=>{
                dispatch({
                    type:"AgarthaSF-minus"
                })
            }}>sub</button>

            {state.count}

            <button onClick={()=>{
                dispatch({
                    type:"AgarthaSF-add"
                })
            }}>add</button>
        </div>
    )
}

