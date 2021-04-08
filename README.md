## 路由

+ 关于 SPA 在 [Vue-Router](https://juejin.cn/post/6906871851365564424) 有详细的说嗷~有兴趣可以看一看
+ 还是简单说一下路由吧，它就是根据不同的url规则，给用户展示不同的视图(页面)
+ 在 Vue 中，有 Vue-Router，在 React 中，同样也有 React-Router
  + 同样有 基于 URL Hash 的路由
  + 基于 HTML5 History API 的路由
+ React Router 提供了多种不同环境下的路由库
  + Web
  + Native
+ 以下主要说说 Web 端的 router



## 安装

+ 基于 web 的 React Router 为：react-router-dom

```sh
npm i react-router-dom
```

+ React-Router 在 5.0 版本前没有 Hooks，这个需要注意一下



## 组件

### HashRouter/BrowserRouter

```javascript
import { HashRouter, BrowserRouter } from 'react-router-dom'
```

+ HashRouter - 哈希模式下的路由组件
  + 基于 URL Hash 的路由组件
+ BrowserRouter - history模式下的路由组件
  + 基于 HTML5 History API 的路由组件
+ 使用起来也非常简单，在根组件外包一层就可以了 - 简单、快手、易使用

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, BrowserRouter } from 'react-router-dom'

import App from './App'

ReactDOM.render(
    // <HashRouter>
    //     <App />
    // </HashRouter>,
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
)
```



### Route

+ 通过该组件来设置应用单个路由信息，Route 组件所在的区域就是就是当 URL 与当前 Route 设置的 path 属性匹配的时候，后面 component 将要显示的区域
+ path - 该路由要匹配的 url
  + path 默认是模糊匹配，即当前 url 以该 path 开头时就进行匹配
  + **exact** - 精确匹配，则当前 url 必须和 path 一致才会进行匹配
  + **strict** - 严格匹配，url === path 才会进行匹配，多一个 `/` 都不可以；strict 需跟 exact 一起作用
  + 多规则匹配 - `[path1, path2, path3]`：`<Route path={['/', '/home']} />`
+ component - 匹配成功之后要显示的视图

```javascript
import React from 'react'
import { Route } from 'react-router'
import IndexView from './views/indexView'
import AboutView from './views/aboutView'
import JoinView from './views/joinView'

export default function App() {
    return (
        <div>
            <Route
                path={['/', '/home']}
                component={IndexView} />
            <Route
                path="/about" // http://localhost:3000/about/abc
                exact
                component={AboutView} />
            <Route
                path="/join" // http://localhost:3000/about
                exact
                strict
                component={JoinView} />
        </div>
    )
}
```



### Link

+ React Router 使用 `<Link>` 组件用来处理 a 链接 类似的功能（它会在页面中生成一个 a 标签）
+ react-router-dom 拦截了实际 a 标签的默认动作，然后根据所有使用的路由模式（Hash 或者 HTML5）来进行处理，改变了 URL，但不会发生请求，同时根据 Route 中的设置把对应的组件显示在指定的位置
+ **to** - 类似 `<a>` 的 href
  + 用于跳转路由
  + 不能定义外链，如：`http://www.baidu.com/`，要进行外链跳转还是用回 `<a>` 吧

```javascript
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
            <a href="http://www.baidu.com/">加入</a>
            <hr />
        </nav>
    )
}
```



### Switch

+ `<Route>` 会根据 url 显示视图，那如果 url 出现非预期的路径，如果什么都不显示，会发生排版问题 或 用户有可能并不知道出错了
+ 我们通常会给一个 404的页面 给到用户，这个时候我们就需要使用到 `<Switch>`
+ 它会根据 `<Route>` 的 path，由上至下进行匹配判断，我们通常把 404页面 写在最后

```javascript
function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route
                    path={['/', '/home']}
                    exact
                    component={IndexView} />
                <Route
                    path="/about" // http://localhost:3000/about/abc
                    exact
                    component={AboutView} />
                <Route
                    path="/join" // http://localhost:3000/about
                    exact
                    strict
                    component={JoinView} />
                {/* 以上匹配都失败会进入 view404 */}
                <Route component={view404} />
            </Switch>
        </div>
    )
}
```

