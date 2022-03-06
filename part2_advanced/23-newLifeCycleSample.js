import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: [1,2,3,4,5,6,7,8,9]
    }

    myref = React.createRef()

    getSnapshotBeforeUpdate(){
        // 获取容器高度
        console.log(this.myref.current.scrollHeight)
        // 未更新之前的容器高度
        return this.myref.current.scrollHeight
    }

    componentDidUpdate(prevProps, prevState, value){
        console.log(this.myref.current.scrollHeight)
        // 记录更新之后的容器高度
        this.myref.current.scrollTop += this.myref.current.scrollHeight - value
    }


    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        list: [...[11,12,13,14,15,16,17,18,19], ...this.state.list]
                    })
                }}>click</button>
                <h1>Mail</h1>
                <div ref = {this.myref} style={{height: "200px", overflow: "auto"}}>
                    <ul>
                        {
                            this.state.list.map((item)=>{
                                return <li key={item} style={{height: "100px",
                            background: "gray"}}>{item}</li>
                            })
                        }
                    </ul>
                </div> 
            </div>
        )
    }
}
