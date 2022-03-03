import React, { Component } from 'react'


class Field extends Component{
    render(){
        return(
            <div style={{backgroundColor: "lightblue"}}>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(event)=>{
                    //console.log(event.target.value)
                    this.props.onChangeEvent(event.target.value)
                }} value={this.props.value}></input>
            </div>
        )
    }
}


export default class App extends Component {

    state = {
        username: "",
        password: ""
    }

    render() {
        //console.log(localStorage.getItem("Username"))

        return (
            <div>
                <h1>Sign in Page</h1>
                <Field label="Username" type="text" onChangeEvent={(value)=>{
                    this.setState({
                        username: value
                    })
                }} value = {this.state.username}></Field>


                <Field label="password" type="password" onChangeEvent={(value)=>{
                    this.setState({
                        password: value
                    })
                }} value= {this.state.password}></Field>
                <button onClick={()=>{
                    console.log(this.state.username, this.state.password)
                }}>Login</button>
                <button onClick={()=>{
                    this.setState({
                        username: "",
                        password: ""
                    })
                }}>Cancel</button>
            </div>
        )
    }
}
