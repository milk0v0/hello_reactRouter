import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import IndexView from './views/indexView'
import AboutView from './views/aboutView'
import JoinView from './views/joinView'
import Nav from './component/nav'
import ListView from './views/listView'
import View404 from './views/view404'

import './css/index.css'

/**
 * 通过 Route 去调用视图
 *  component - 通过组件直接调用
 *  render 中接收是回调函数，回调函数的返回值中定义该 Route 要渲染的视图
 * 
 * 路由组件：被 Route 直接调用的组件，叫做路由组件
 *  在路由组件中，可以获取到 Route 传递的路由参数
 * 路由参数:
 *  history
 *      go(n) - 跳转当前的历史记录，跳转 n 步 - 负值回退，正值前进
 *      goBack() - 返回历史记录上一步
 *      goForward() - 前进到历史记录下一步
 *      `push(url)` - 在不刷新页面的情况下跳转 url
 *          相当于 `<Link>`
 *          第二参数可传参 - 在 location.state 中显示
 *      `length` - 当前历史记录中记录了多少项，上限为 50
 *  location
 *      hash - 当前 url 中的 hash 值
 *      pathname - 当前的 url
 *      search - 当前 url 的 search 值
 *      state - push 方法传递过来的数据
 *  match
 *      isExact - 是否精确匹配
 *      params - 动态路由传递参数
 *      path - <Route> 中的 path
 *      url - url 值
 * 
 * 动态路由
 *  在定义 path 时，路由中某一段可能是非固定的，非固定部分可以通过 :name 定义
 *  在路由参数中，可通过 match.params 来获取动态路由具体的值
 */

export default function App() {
    const [userName] = useState('milk')
    return (
        <div>
            <Nav />
            <Switch>
                <Route
                    path={['/', '/home']}
                    exact
                    render={routeProps => <IndexView userName={userName} {...routeProps} />} />
                <Route
                    path="/about" // http://localhost:3000/about/
                    exact
                    component={AboutView} />
                <Route
                    path="/join" // http://localhost:3000/join
                    exact
                    strict
                    component={JoinView} />
                <Route
                    path="/list/:page"
                    exact
                    render={routeProps => {
                        if (1 === 2 - 1) {
                            return <ListView {...routeProps} />
                        } else {
                            return <Redirect to="/" />
                        }
                    }} />
                {/* 以上匹配都失败会进入 view404 */}
                <Route component={View404} />
            </Switch>
        </div>
    )
}