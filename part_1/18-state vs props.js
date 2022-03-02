import React, { Component } from 'react'

class Child extends Component{
    render(){
        return(
            <div>
                <button onClick={()=>{
                    //子组件不能修改props属性，在内部不可修改
                    //只能由父组件改变
                    //this.props.text = "22222"
                }}>click-子</button>
                Child-{this.props.text}
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        text: "11111"
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        text: "22222"
                    })
                }}>click-父</button>
                <Child text= {this.state.text}/>
            </div>
        )
    }
}
