import React, { Component } from 'react'

export default class App extends Component {

    //非受控没有状态关联，无法将值的变化传给任何人
    myUserName = React.createRef()
    render() {
        return (
        <div>
            <h1>登陆页</h1>
            <input type="text" ref = {this.myUserName}
            defaultValue= "AgarthaSF"/>
            <button onClick={()=>{
                console.log(this.myUserName.current.value)


            }}>登陆</button>

            <button onClick={()=>{
                this.myUserName.current.value = ""
            }}>重置</button>

            

        </div>
        )
    }
}
