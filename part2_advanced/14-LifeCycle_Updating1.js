import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myName: "AgarthaSF"
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        myName: "agarthasf"
                    })
                }}></button>
                <span id="myName">{this.state.myName}</span>
                
            </div>
        )
    }

    //会执行多次
    //已被移除，在调度机制的第一阶段，可以被高优先级任务直接打断
    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate", document.
        getElementById("myName").innerHTML)
    }

    //会执行多次，需要注意内部逻辑，不要进行多次非必要操作
    componentDidUpdate(prevProps, prevState){
        //可获得老的状态和老的属性
        //例：当老状态的列表为空时才进行套入BetterScroll  
        console.log("componentDidUpdate", document.
        getElementById("myName").innerHTML)

        //获取更新后的DOM节点
    }   

}
