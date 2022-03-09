import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import NowPlaying from '../films/NowPlaying'
import ComingSoon from '../films/ComingSoon'

export default class Films extends Component {
  render() {
    return (
        <div>
            <div style={{height: "200px", background: "lightblue"}}>大轮播</div>
            <div>导航栏</div>  

            <Switch>
                {/* 嵌套路由，会在当前组件下方显示 */}
                <Route path="/films/nowplaying" component={NowPlaying}/>
                <Route path="/films/comingsoon" component={ComingSoon}/>
                <Redirect from="/films" to="/films/nowplaying" exact></Redirect>
            </Switch>

        </div>
    )
  }
}
