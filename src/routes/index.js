import IndexView from "../views/indexView"
import ListView from "../views/listView"
import AboutView from "../views/aboutView"
import JoinView from "../views/joinView"
import View404 from "../views/view404"
import { Redirect } from "react-router"

const navList = [{
    title: "首页",
    to: "/",
    exact: true,
    isActive(url) {
        return url === '/' || url === '/home'
    }
}, {
    title: "关于",
    to: "/about",
    exact: true,
}, {
    title: "加入",
    to: "/join",
    exact: true,
}, {
    title: "列表",
    to: "/list",
    exact: false,
}]

const subNavList = [{
    title: "精华",
    to: "/list/good",
    isActive(url) {
        return url === '/list' || url.startsWith('/list/good')
    }
}, {
    title: "分享",
    to: "/list/share",
    exact: false,
}, {
    title: "问答",
    to: "/list/ask",
    exact: false,
}]

const types = ['good', 'share', 'ask']

const routeList = [{
    path: ["/", "/home"],
    exact: true,
    render(props) {
        return <IndexView {...props} />
    }
}, {
    path: "/about",
    exact: true,
    render(props) {
        return <AboutView {...props} />
    }
}, {
    path: "/join",
    exact: true,
    render(props) {
        return <JoinView {...props} />
    }
}, {
    path: ["/list", "/list/:type", "/list/:type/:page"],
    exact: true,
    render(props) {
        const { type = 'good', page = 1 } = props.match.params;
        if (types.includes(type) && page > 0 && parseInt(page) === +page) {
            return <ListView {...props} />
        } else {
            return <Redirect to="/undefined" />
        }
    }
}, {
    render(props) {
        return <View404 {...props} />
    }
}];

export { routeList, navList, subNavList }