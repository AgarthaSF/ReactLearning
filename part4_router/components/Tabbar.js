import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/* 注意要加#号 */}
                        {/* <a href="#/films">电影</a> */}

                        {/* NavLink只能用在HashRouter中，所以要使用插槽插入 */}
                        {/* 可以使用activeClassName改变active状态名 */}
                        <NavLink to = "/films" >电影</NavLink>
                    </li>

                    <li>
                        <NavLink to = "/cinemas">影院</NavLink>
                    </li>

                    <li>
                        <NavLink to = "/center">我的</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
