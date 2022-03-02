import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return(
            <div style={{
                background: "gray",
                width: "200px"}}>
                <button onClick={()=>{
                    this.props.event()  //调用父组件传来的回调函数
                }}>NavClick</button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component{
    render(){
        return(
            <div style={{
                background: "green",
                width: "200px"}}>
                <ul>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                    <li>11111111</li>
                </ul>
            </div>
        )
    }
}



export default class App extends Component {

    constructor(){
        super()
        this.state = {
            isShow: true
        }
    } 

    render() {
        console.log(this.state.isShow)
        return (
            <div>
                {/* 回调函数 */}
                <Navbar event={()=>{
                    this.handleClick()
                }}/>
                {this.state.isShow && <Sidebar/>}
                
            </div>
        )
    }

    handleClick=() =>{
        this.setState({
            isShow: !this.state.isShow
        })
    }

}