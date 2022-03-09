import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <button onClick={()=>{
                    localStorage.setItem("token", "AgarthaSF")
                    this.props.history.push("/center")
                }}>Login</button>
            </div>
        )
    }
}
