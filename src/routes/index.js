import IndexView from "../views/indexView"
import ListView from "../views/listView"
import AboutView from "../views/aboutView"
import JoinView from "../views/joinView"
import View404 from "../views/view404"

const navList = [{
    title: "首页",
    to: "/",
    exact: true,
    // isActive(url) {

    // }
}, {
    title: "关于",
    to: "/about",
    exact: true,
}, {
    title: "加入",
    to: "/join",
    exact: true,
}, {
    title: "列表随机",
    to: "/list" + Math.round(Math.random() * 100),
    exact: true,
}]

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
    path: "/list/:page",
    exact: true,
    render(props) {
        return <ListView {...props} />
    }
}, {
    render(props) {
        return <View404 {...props} />
    }
}]

export {routeList, navList}