import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div className = {style.film}>
                <ul>
                    <li>
                        {/* 注意要加#号 */}
                        {/* <a href="#/films">电影</a> */}

                        {/* NavLink只能用在HashRouter中，所以要使用插槽插入 */}
                        {/* 可以使用activeClassName改变active状态名 */}
                        <NavLink to = "/films" activeClassName={style.active}>电影</NavLink>
                    </li>

                    <li>
                        <NavLink to = "/cinemas" activeClassName={style.active}>影院</NavLink>
                    </li>

                    <li>
                        <NavLink to = "/center" activeClassName={style.active}>我的</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
