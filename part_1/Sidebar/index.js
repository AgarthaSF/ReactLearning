import React from 'react'

export default function Sidebar(props) {
    console.log(props);
    let {bg, position} = props

    var obj1 = {
        left:0
    }

    var obj2 = {
        right:0
    }

    var obj = {
        background: bg,
        width: "200px",
        position: "fixed",
    }

    var styleObj = position==="left" ? {...obj,...obj1} : {...obj,...obj2}
    return (
        // jsx语法行内style固定写法是双花括号
        // 外层代表是js变量，内层是css正常写法
        <div style={styleObj}>
            <ul>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
            </ul>
        </div>
    )
}


//函数式组件要用属性验证和默认属性只能加类变量

Sidebar.protoTypes = {
    
}

Sidebar.defaultProps = {

}