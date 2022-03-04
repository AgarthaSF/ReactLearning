import { getElementError } from '@testing-library/react'
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myName: "AgarthaSF"
    }

    //只执行一次
    //16.2后Fiber算法的改进使得该阶段的优先级较低，可能会被打断，故不是绝对安全
    UNSAFE_componentWillMount(){
        console.log("will mount", this.state.myName,document.
        getElementById("myName"))

        // 没有render之前拿不到DOM节点
        // 正式渲染前的最后一次修改状态机会

        this.setState({
            myName: "agarthasf"
        })

        //用来初始化数据
    }

    //只执行一次
    componentDidMount(){
        console.log("did mount")

        // 数据请求放在DidMouunt中比较合适
        // 订阅函数的调用
        // setInterval
        // 基于创建完的DOM进行初始化，例如BetterScroll
    }

    //会执行多次
    render() {
        console.log("render")

        //render中不能调用setState，因为setState后又会再次调用
        //render函数进行渲染，会导致死循环的发生
        return (
            <div>
                <span id="myName">{this.state.myName}</span>
            </div>
        )
    }
}
