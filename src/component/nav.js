import { NavLink } from 'react-router-dom'
import { navList } from '../routes'

export default function Nav() {
    return (
        <nav className="nav">
            {navList.map((item, index) => <NavLink
                key={index}
                to={item.to}
                exact={item.exact}
            >{item.title}</NavLink>)}
        </nav>
    )
}