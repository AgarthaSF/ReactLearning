import React, { Component } from 'react'
import { BrowserRouter, HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../films/Detail'
import Login from '../views/Login'

function isAuth(){
    return localStorage.getItem("token")
}

// BrowserRouter 没有#的路径，好看，是真正朝后端发送请求要页面，后端没有对应的处理路径，
// 就会404，不好看
export default class IndexRouter extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    {this.props.children}
                    <Switch>    {/* 只渲染匹配到的第一个 */}
                   
                        {/* 嵌套路由不能精确匹配 */}
                        <Route path="/films" component={Films}/>
                        <Route path="/cinemas" component={Cinemas}/>
                        {/* <Route path="/center" component={Center}/> */}

                        {/* 路由拦截 */}
                        <Route path="/center" render={(props)=>{
                            //console.log(props)
                            return isAuth() ? <Center/> : <Redirect to="/login"/>
                        }}/>

                        {/* 动态路由 */}
                        <Route path="/detail/:myid" component={Detail}/>

                        <Route path="/login" component={Login}/>

                        {/* 重定向，当输入的内容与前几项都不匹配时自动重定向至目标页面
                            / 代表模糊匹配，如果不加Switch标签，只要是以 / 开头的在再次进入时候就会直接打开重定向页面 */}
                        
                        {/* exact代表精确匹配，现在只有/才能匹配到重定向 */}
                        <Redirect from="/" to="/films" exact></Redirect>

                        <Route component={NotFound}/>

                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
