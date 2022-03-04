import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return(
            <div style={{
                background: "gray",
                width: "200px"}}>
                {this.props.children}
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
                <Navbar>
                    <button onClick={()=>{
                        this.setState({
                            isShow: !this.state.isShow
                        })
                    }}>Click</button>
                </Navbar>
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