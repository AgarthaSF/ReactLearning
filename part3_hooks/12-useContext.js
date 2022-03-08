import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import '../assets/css/03-communication.css'

const GlobalContext = React.createContext() //创建Context对象

export default function App(){
    const [filmList, setfilmList] = useState([])
    const [info, setinfo] = useState("")

    useEffect(() => {
        axios.get('/test.json').then(res=>{
            console.log(res.data.data.films)
            setfilmList(res.data.data.films)
            })
        }, [])
    

    return (
        <GlobalContext.Provider value={{
            info: info,
            changeInfo:(value)=>{
                setinfo(value)
            }
        }}>
            <div>
                {
                    filmList.map((item)=>
                    <FileItem key={item.filmId}
                    {...item}></FileItem>)}
                <FileDeatil/>  
            </div>
        </GlobalContext.Provider>
    )     

}


function FileItem(props){
    let{name, poster, grade, synopsis} = props
    const value = useContext(GlobalContext)
    return(
        <div className="fileItem" onClick={()=>{
            value.changeInfo(synopsis)
        }}>
            <img src={poster} alt={name}/>
            <h4>{name}</h4>
            <div> Score: {grade} </div>
        </div>
    )
}


function FileDeatil(){
    const value = useContext(GlobalContext)
    return(
        <div className="fileDetail">
            {value.info}
        </div>
    )
}
