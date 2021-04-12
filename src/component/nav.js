import { NavLink, useLocation } from 'react-router-dom'

/**
 * /list 列表视图的首页 -> /list/good/1
 * /list/good/:page 精华列表 -> /list/good/1
 * /list/share/:page 分享列表 -> /list/share/1
 * /list/ask/:page 问答列表 -> /list/ask/1
 * 
 * /list -> /list/good/1
 * /list/:type(good|share|ask) -> /list/:type/1
 * /list/:type/:page -> -> /list/:type/:page
 */

export default function Nav(props) {
    const { pathname } = useLocation();
    const { datas, $class } = props;
    return (
        <nav className={$class}>
            {datas.map((item, index) => <NavLink
                key={index}
                to={item.to}
                exact={item.exact}
                isActive={item.isActive && (() => item.isActive(pathname))}
            >{item.title}</NavLink>)}
        </nav>
    )
}