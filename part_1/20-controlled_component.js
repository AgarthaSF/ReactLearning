import React, { Component } from 'react'

export default class App extends Component {
    state = {
        username: "AgarthaSF"
    }
    render() {

        return (
        <div>
            <h1>登陆页</h1>
            {/* 在React中onChange与onInput是一样的 */}
            <input type="text" value={this.state.username}
            onChange={(event)=>{
                this.setState({
                    username: event.target.value
                })
            }}/>
            <button onClick={()=>{
                console.log(this.state.username)
            }}>登陆</button>

            <button onClick={()=>{
                this.setState({
                    username: ""
                })
            }}>重置</button>

            {/* 每次重新渲染时还可以将值传给其他组件
                <Child myvalue={this.state.username} />
            */}
        </div>
        )
    }
}
