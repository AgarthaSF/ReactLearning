import React, { Component } from 'react'
import { Route, Redirect, Switch, NavLink } from 'react-router-dom'
import NowPlaying from '../films/NowPlaying'
import ComingSoon from '../films/ComingSoon'
import style from './css/Film.module.css'

export default class Films extends Component {
  render() {
    return (
        <div>
            <div style={{height: "200px", background: "lightblue"}}>大轮播</div>


            <ul>
                <li>
                  <NavLink to="/films/nowplaying" activeClassName={style.active}>正在热映</NavLink>
                </li>

                <li>
                  <NavLink to="/films/comingsoon" activeClassName={style.active}>即将上映</NavLink>
                </li>
              
            </ul> 

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
