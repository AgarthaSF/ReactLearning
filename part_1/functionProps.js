import React, { Component } from 'react'
import Navbar from './Navbar/index'
import Sidebar from './Sidebar/index'
export default class functionProps extends Component {
    render() {
        return (
            <div>
                {/* 类组件 */}
                <Navbar></Navbar>

                {/* 函数式组件 */}
                <Sidebar bg="yellow" position="left"></Sidebar>
            </div>
        )
    }
}
