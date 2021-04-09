import React from 'react'
import { NavLink } from 'react-router-dom'

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