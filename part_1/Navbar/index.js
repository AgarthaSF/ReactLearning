import React, { Component } from 'react'
import myPropTypes from 'prop-types'

export default class Navbar extends Component {
    state = {

    }

    
    // 类属性，用于属性验证，防止传值出现错误难以发现
    static propTypes = {
      title: myPropTypes.string,
      leftshow: myPropTypes.bool
    }

    //默认属性 该属性不传值则默认为default属性
    static defaultProps = {
      leftshow: true
    }

    render() {
      let {title, leftshow} = this.props
      //console.log(this.props);
      return (
         <div>

            {leftshow && <button>返回</button>}
            navbar-{title}
            <button>home</button>
         </div>
      )
    }
}

class Test{
  a = 1          //对象属性
  static a = 100 //类属性
}

// 类属性，用于属性验证，防止传值出现错误难以发现

// Navbar.propTypes = {
//     title: myPropTypes.string,
//     leftshow: myPropTypes.bool
// }

//默认属性 该属性不传值则默认为default属性

// Navbar.defaultProps = {
//   leftshow: true
// }