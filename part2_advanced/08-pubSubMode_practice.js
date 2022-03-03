import React, { Component } from 'react'
import axios from 'axios'
import '../assets/css/03-communication.css'

var bus = {
    list: [],
    subscribe(callback){
        this.list.push(callback)
    },

    publish(text){
        //遍历所有list，将回调函数执行
        this.list.forEach(callback=>{
            callback && callback(text)
        })
    }
}


export default class App extends Component {

    constructor(){
        super()
        this.state = {
            filmList: [],
            info: ""
        }


        axios.get('/test.json').then(res=>{
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
                    <FileItem key={item.filmId} {...item}></FileItem>)
                }
                <FileDeatil/>  
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
                bus.publish(synopsis)
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
    constructor(){
        super()
        this.state = {
            info: ""
        }
        bus.subscribe((text)=>{
            console.log(text)
            this.setState({
                info: text
            })
        })
    }
    render(){
        return(
            <div className="fileDetail">
                {this.state.info}
            </div>
        )
    }
}