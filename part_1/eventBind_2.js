import React, { Component } from 'react'

export default class App extends Component {
    a = 100;
    render() {
        return (
            <div>
            <input/>

            {/* React绑定不会真的绑定事件到具体每一个元素上，而是使用事件代理的模式
                移除root后事件不再触发 */}
            

            {/* this和类内部一致 */}
            <button onClick={()=>{
                console.log('click1', "如果处理逻辑过多不推荐这种写法",
                this.a);
            }}>add1</button>

            {/*     谁调用函数，函数的this就指向谁，此处函数被React的事件系统调用
                故，故this不是指向App，此处指向undefined
                    所以需要使用bind修正this指向  */}

            {/* bind: 绑定this对象为参数对象，不会自动执行
                call: 绑定后执行
                apply:绑定后执行  */}
            <button onClick={this.handleClick2.bind(this)}>add2</button>

            {/* 推荐 */}
            <button onClick={this.handleClick3}>add3</button>
  
            {/* 比较推荐，传参数好用，简洁 */}
            <button onClick={()=>{
                this.handleClick4();
            }}>add4</button>

            </div>
            )
        }

    handleClick2(){
        console.log('click2', this.a);
    }

    handleClick3 = ()=>{
        console.log('click3', this.a);
    }

    handleClick4(){
        console.log('click4', this.a);
    }

}

