import React, { Component } from 'react'
import axios from 'axios'
import '../assets/css/03-communication.css'

const GlobalContext = React.createContext() //创建Context对象

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            filmList: [],
            info: "",
        }

        axios.get('/test.json').then(res=>{
            console.log(res.data.data.films)
            this.setState({
                filmList: res.data.data.films
            })
        })
    }

    render() {
        return (
            <GlobalContext.Provider value={{
                info: this.state.info,
                changeInfo:(value)=>{
                    this.setState({
                        info: value
                    })
                }
            }}>
                <div>
                    {
                    this.state.filmList.map((item)=>
                        <FileItem key={item.filmId}
                        {...item}></FileItem>)}
                    <FileDeatil/>  
                </div>
            </GlobalContext.Provider>
        )
    }
}

//受控组件
class FileItem extends Component{
    render(){
        let {name, poster, grade, synopsis} = this.props
        return(
            <GlobalContext.Consumer>
                {
                    (value)=>{
                        return(
                            <div className="fileItem" onClick={()=>{
                                //console.log(synopsis)
                                value.changeInfo(synopsis)
                            }}>
                                <img src={poster} alt={name}/>
                                <h4>{name}</h4>
                                <div> Score: {grade} </div>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

class FileDeatil extends Component{
    render(){
        return(
            <GlobalContext.Consumer>
            {
                (value)=>{
                    return(
                        <div className="fileDetail">
                            {value.info}
                        </div>
                    )
                }
            }
            </GlobalContext.Consumer>
        )
    }
}