import React, { Component } from 'react'


class Field extends Component{
    state = {
        value: ""
    }

    clear(){
        this.setState({
            value: ""
        })
    }
    render(){
        return(
            <div style={{backgroundColor: "lightblue"}}>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(event)=>{
                    this.setState({
                        value: event.target.value
                    })
                }} value={this.state.value}></input>
            </div>
        )
    }
}


export default class App extends Component {

    state = {
        username: "",
        password: ""
    }

    username = React.createRef();
    password = React.createRef();
    
    render() {
        return (
            <div >
                <h1>Sign in Page</h1>
                <Field label="Username" type="text" ref={this.username}></Field>
                <Field label="Password" type="password" ref={this.password}></Field>

                {/* 使用ref获取节点属性 */}
                <button onClick={()=>{
                    console.log(this.username.current.state.value,
                        this.password.current.state.value)
                }}>Login</button>


                <button onClick={()=>{
                    this.username.current.clear()
                    this.password.current.clear()
                }}>Cancel</button>
            </div>
        )
    }
}
