import React, { Component } from 'react'

export default class 
 extends Component {

    state = {
        count: 1
    }

    render() {
        return (
        <div>
            {this.state.count}
            <button onClick={this.handleAdd1}>add1</button>
            <button onClick={this.handleAdd2}>add2</button>
        </div>
        )
    }


    handleAdd1 = ()=>{
        this.setState({
            count: this.state.count +1
        }, ()=>{
            console.log(this.state.count)
        })

        this.setState({
            count: this.state.count +1
        }, ()=>{
            console.log(this.state.count)
        })

        this.setState({
            count: this.state.count +1
        }, ()=>{
            console.log(this.state.count)
            // 状态和真实dom已经更新完毕
        })
    }

    handleAdd2 = ()=>{
        setTimeout(()=>{
            this.setState({
                count: this.state.count +1
            })
            console.log(this.state.count)
    
            this.setState({
                count: this.state.count +1
            })
            console.log(this.state.count)
    
            this.setState({
                count: this.state.count +1
            })
            console.log(this.state.count)
        }, 0)
    }
}

// 如果setState处在同步逻辑中，异步更新状态，异步更新真实Dom
// 在异步更新状态时将所有更新合并，最后只进行一次更新
// setState 接受第二个参数，第二个参数式回调函数，
// 状态和dom更新完后就会被触发

// 如果setState处在异步逻辑中，同步更新状态，同步更新dom