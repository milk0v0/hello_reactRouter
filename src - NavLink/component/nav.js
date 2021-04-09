import React from 'react'
import { NavLink } from 'react-router-dom'

/**
 * NavLink - 在 Link 功能的基础上添加了 选中当前项的效果
 *  注意 NavLink 在匹配时，默认也是模糊匹配
 *  activeClassName - 当前选中的 class 默认为 active
 *  activeStyle
 *  isActive - 判断当前选项是否选中，返回值为 true 选中当前，否则补选中
 */

export default function Nav() {
    return (
        <nav className="nav">
            <NavLink activeStyle={{
                fontWeight: 'bold'
            }} isActive={() => true} exact activeClassName="link" to="/">首页</NavLink>
            <span> | </span>
            <NavLink activeStyle={{
                fontWeight: 'bold'
            }} exact activeClassName="link" to="/about">关于</NavLink>
            <span> | </span>
            <NavLink activeStyle={{
                fontWeight: 'bold'
            }} exact activeClassName="link" to="/join">加入</NavLink>
            <hr />
        </nav>
    )
}