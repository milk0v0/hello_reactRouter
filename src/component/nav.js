import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <Link to="/">首页</Link>
            <span> | </span>
            <Link to="/about">关于</Link>
            <span> | </span>
            <Link to="/join">加入</Link>
            <span> | </span>
            <a href="http://www.baidu.com/">百度</a>
            <hr />
        </nav>
    )
}