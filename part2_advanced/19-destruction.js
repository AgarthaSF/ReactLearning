import React, { Component } from 'react'

export default class App extends Component {

    state = {
        isCreate: true
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        isCreate: !this.state.isCreate
                    })
                }}>click</button>
    
                {this.state.isCreate && <Child/>}
            </div>  
        )
    }
}

class Child extends Component{
    render(){
        return(
            <div>
                Child
            </div>
        )
    }

    componentDidMount() {
        window.onresize = ()=>{
            console.log("resize")
        }

        this.timer = setInterval(()=>{
            console.log("111")
        }, 1000)
    }

    //在销毁声明周期中做清空处理工作，进行事件解绑、定时器销毁等操作
    componentWillUnmount(){
        console.log("componentWillUnmount")
        
        window.onresize = null
        clearInterval(this.timer)
    }
}