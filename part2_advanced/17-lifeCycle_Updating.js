import React, { Component } from 'react'

class Child extends Component{
    render(){
        return(
            <div>
                Child
            </div>
        )


    }

    //拿到的是老属性，新属性通过形参获得
    //只有子组件中创建这个函数才有意义，在父组件中不会被触发
    componentWillReceiveProps(nextProps){
        console.log("test", this.props.text)

        // 最先获得父组件传来的属性，可利用属性进行相应处理
        // 把属性转换为子组件自己的状态

        // this.setState({
        //     xxx: nextProps.text
        // })
    }
}


export default class App extends Component {
    state = {
        text: "11111"
    }
    render() {
        return (
            <div>
                {
                    this.state.text
                }
                <button onClick={()=>{
                    this.setState({
                        text: "22222"
                    })
                }}>click</button>
                <Child text={this.state.text}/>
            </div>
        )
    }
}
