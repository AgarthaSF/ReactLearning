import React, { Component } from 'react'
import Navbar from './Navbar/index'

export default class 
    extends Component {
        render() {
            var obj = {
                title: "测试",
                leftshow : false
            }

            return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title="首页" leftshow={false}/>                 
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title="列表"/>                 
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title="购物车"/>                 
                </div>

                <Navbar title = {obj.title} leftshow = {obj.leftshow}></Navbar>

                {/* es6简写方法 */}
                <Navbar {...obj} a = "100"></Navbar>
            </div>
        )
    }
}
