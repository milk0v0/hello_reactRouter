import { Route, Switch } from 'react-router'
import Nav from './component/nav'
import { routeList, navList } from './routes'
import './css/index.css'

export default function App() {
    return (
        <div className="wrap">
            <Nav datas={navList} $class="nav" />
            <Switch>
                {routeList.map((item, index) => <Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    render={routeProps => item.render(routeProps)}
                />)}
            </Switch>
        </div>
    )
}