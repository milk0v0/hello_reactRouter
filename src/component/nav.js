import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Nav() {
    const routeMatch = useLocation();
    const { pathname } = routeMatch;
    return (
        <nav className="nav">
            <NavLink activeStyle={{
                fontWeight: 'bold'
            }} isActive={() => pathname === '/'} exact activeClassName="link" to="/">首页</NavLink>
            <span> | </span>
            <NavLink activeStyle={{
                fontWeight: 'bold'
            }} exact activeClassName="link" to="/about">关于</NavLink>
            <span> | </span>
            <NavLink activeStyle={{
                fontWeight: 'bold'
            }} exact activeClassName="link" to="/join">加入</NavLink>
            <span> | </span>
            <NavLink activeStyle={{
                fontWeight: 'bold'
            }} exact activeClassName="link" to={'/list/' + Math.round(Math.random() * 100)}>列表随机页</NavLink>
            <hr />
        </nav>
    )
}