import React, { Component } from 'react'
import axios from 'axios'
import '../assets/css/03-communication.css'
export default class App extends Component {

    constructor(){
        super()
        this.state = {
            filmList: [],
            info: ""
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
            <div>
                {
                this.state.filmList.map((item)=>
                    <FileItem key={item.filmId}
                    {...item} onEvent={(value)=>{
                        this.setState({
                            info: value
                        })
                
                        
                    }}></FileItem>)}
                <FileDeatil info={this.state.info}/>  
            </div>
        )
    }
}

//受控组件
class FileItem extends Component{
    render(){
        let {name, poster, grade, synopsis} = this.props
        return(
            <div className="fileItem" onClick={()=>{
                this.props.onEvent(synopsis)
            }}>
                <img src={poster} alt={name}/>
                <h4>{name}</h4>
                <div>
                    Score: {grade}
                </div>
            </div>
        )
    }
}

class FileDeatil extends Component{
    render(){
        return(
            <div className="fileDetail">
                {
                    this.props.info
                }
            </div>
        )
    }
}