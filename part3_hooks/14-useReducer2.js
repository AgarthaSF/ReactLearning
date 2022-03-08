import React, {useReducer, useContext} from 'react'

// 共享状态放在外部进行管理
const initialState = {
    a:"111",
    b:"111",
}

const reducer = (prevState, action)=>{
    let newState = {...prevState}
    switch(action.type){

        case "change-a":
            newState.a = action.value
            return newState
        case "change-b":
            newState.b = action.value
            return newState
        default:
            return prevState
    }
}

const GlobalContext = React.createContext()

export default function App() {

    // useReducer在每个组件中创建出的都不同，且只能在hooks内部创建
    // 所以只能在根组件中创建出一份，让所有子组件共享同一个Reducer
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                <Child1/>
                <Child2/>
                <Child3/>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1(){
    const {dispatch} = useContext(GlobalContext)

    return(
        <div style={{background: "gray"}}>
            <button onClick={()=>{
                dispatch({
                    type: "change-a",
                    value: "222"
                })
            }}>改变a</button>

            <button onClick={()=>{
                dispatch({
                    type: "change-b",
                    value: "333"
                })
            }}>改变b</button>
        </div>
    )
}

function Child2(){
    const {state} = useContext(GlobalContext)
    return(
        <div style={{background: "lightblue"}}>
            child2-{state.a}
        </div>
    )
}

function Child3(){
    const {state} = useContext(GlobalContext)
    return(
        <div style={{background: "lightgreen"}}>
            child3-{state.b}
        </div>
    )
}