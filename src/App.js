import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import IndexView from './views/indexView'
import AboutView from './views/aboutView'
import JoinView from './views/joinView'
import Nav from './component/nav'
import view404 from './views/view404'

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
 *      go(n) - 跳转当前的历史记录，跳转 n 步
 *      goBack() - 返回历史记录上一步
 *      goForward() - 前进到历史记录下一步
 */

export default function App() {
    const [userName, setUserName] = useState('milk')
    return (
        <div>
            <Nav />
            <Switch>
                <Route
                    path={['/', '/home']}
                    exact
                    render={() => <IndexView userName={userName} />} />
                <Route
                    path="/about" // http://localhost:3000/about/
                    exact
                    component={AboutView} />
                <Route
                    path="/join" // http://localhost:3000/join
                    exact
                    strict
                    component={JoinView} />
                {/* 以上匹配都失败会进入 view404 */}
                <Route component={view404} />
            </Switch>
        </div>
    )
}