import React, { Component } from 'react'

class Child extends Component {
    render() {
        console.log(this.props.children)
        return (
            <div>
                Child
                {/* 插槽，固定写法 */}
                {/* {this.props.children[0]}  
                {this.props.children[1]}  
                {this.props.children[2]}       */}
                {this.props.children.map((item)=>{

                }
             )}
            </div>
        )
    }
}


class Swiper extends Component{
    render(){
        return(
            <div>
                Swiper
            </div>
        )
    }
}



export default class App extends Component {
    render() {
        return (
            <div>
                <Swiper>
                    {/* 在轮播组件中留下插槽，使用者想
                        轮播什么类型完全可以自己决定，
                        传入自定义内容即可 */}
                    <div>11111</div>
                    <div>22222</div>
                    <div>33333</div>
                    <div> 123</div>
                </Swiper>



                <Child>     
                    <div>11111</div>
                    <div>22222</div>
                    <div>33333</div>
                </Child>
            </div>
        )
    }
}


// 插槽写法目的：

// 1. 增强复用性
// 2. 一定程度上减少父子通信