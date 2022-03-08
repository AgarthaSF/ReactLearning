import React, {useEffect, useContext, useReducer } from 'react'
import axios from 'axios'
import '../assets/css/03-communication.css'

const GlobalContext = React.createContext() //创建Context对象

const initialState = {
    filmList: [],
    info: ""
}

const reducer = (prevState, action)=>{
    let newState = {...prevState}
    switch(action.type){
        case "change-filmlist":
            newState.filmList = action.value
            return newState

        case "change-info":
            newState.info = action.value
            return newState

        default:
            return prevState
    }
}

export default function App(){
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('/test.json').then(res=>{
            //console.log(res.data.data.films)
            dispatch({
                type: "change-filmlist",
                value: res.data.data.films
            })

            })
        }, [])
    

    return (
        <GlobalContext.Provider value={{
                state,
                dispatch     
            }
        }>
            <div>
                {
                    state.filmList.map((item)=>
                    <FileItem key={item.filmId}
                    {...item}></FileItem>)}
                <FileDeatil/>  
            </div>
        </GlobalContext.Provider>
    )     

}


function FileItem(props){
    let{name, poster, grade, synopsis} = props
    const {dispatch} = useContext(GlobalContext)
    return(
        <div className="fileItem" onClick={()=>{
            dispatch({
                type: "change-info",
                value: synopsis
            })
        }}>
            <img src={poster} alt={name}/>
            <h4>{name}</h4>
            <div> Score: {grade} </div>
        </div>
    )
}


function FileDeatil(){
    const {state} = useContext(GlobalContext)
    return(
        <div className="fileDetail">
            {state.info}
        </div>
    )
}
