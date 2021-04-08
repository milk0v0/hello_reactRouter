import React from 'react'
import { Route, Switch } from 'react-router'
import IndexView from './views/indexView'
import AboutView from './views/aboutView'
import JoinView from './views/joinView'
import Nav from './component/nav'
import view404 from './views/view404'

export default function App() {
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