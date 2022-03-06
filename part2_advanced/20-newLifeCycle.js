import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myName: "AgarthaSF",
        myAge: 21,
        myText: "111"
    }

    // 替代 componentWillMount与componentWillReceiveProps
    // cwm只会执行一次，而gdsfp会执行多次
    // componentWillReceiveProps调用次数过多，可能会产生不必要的异步请求
    // 与componentDidMount共同配合使用
    // 对于setState之类的操作在cdu中实现
    static getDerivedStateFromProps(nextProps, nextState){

        //static中是类属性，无法访问state

        //因为要return，所以异步不会等待，所以不在这里进行数据请求，而在cdm中进行
        console.log("getDerivedStateFromProps")
        //return修改state状态
        return {
            myName: nextState.myName.toLowerCase()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // 如果一样直接返回
        if(JSON.stringify(this.state) === prevState){
            return 
        }

        //如果一样还没有返回，而在CDU中进行setState，就会再次进行渲染
        //导致DidUpdate函数再次触发，进入死循环
        console.log(this.state)
    }

    //用来替代willUpdate，
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
        return 100;
    }

    // 获取snsbu返回的值
    componentDidUpdate(prevProps, prevState, value){
        console.log("componentDidUpdate", value)
    }

    render() {
        console.log("render")
        return (
            <div>
                {this.state.myName}
                <button onClick={()=>{
                    this.setState({
                        myText: "222"
                    })
                }}>click</button>
                {this.state.myText}
            </div>
        )
    }
}
