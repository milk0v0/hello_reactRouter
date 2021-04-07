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
+ component - 匹配成功之后要显示的视图