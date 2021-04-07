import React from 'react'
import { Route } from 'react-router'
import IndexView from './views/indexView'
import AboutView from './views/aboutView'
import JoinView from './views/joinView'

export default function App() {
    return (
        <div>
            <Route
                path="/"
                exact
                component={IndexView} />
            <Route
                path="/about"
                component={AboutView} />
            <Route
                path="/join"
                component={JoinView} />
        </div>
    )
}