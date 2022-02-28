import React, { Component } from 'react'

export default class App extends Component {
    myRef = React.createRef();
    render() {
        return (
            <div>
            <input ref={this.myRef}/>


            {/* this.refs.myText拿到的是DOM节点 
                这种写法有潜在的风险*/}

            {/* <button onClick={()=>{
                console.log('click', this.refs.myText.value);
            }}>add1</button> */}


            {/* 用这种方法绑定, this.myRef.current拿到的是DOM节点*/}
            <button onClick={()=>{
                console.log('click', this.myRef.current.value);
            }}>add1</button>

            <button onClick={this.handleClick}>add2</button>

            </div>
            )
        }

    handleClick = () =>{
        console.log('click', this.myRef.current.value);
    }
}

