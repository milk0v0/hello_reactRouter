import { useHistory, useLocation, useParams, useRouteMatch, withRouter } from "react-router"

function PageNavigation() {
    const history = useHistory();
    const location = useLocation();
    const parmas = useParams();
    const match = useRouteMatch();
    return <h1>翻页导航</h1>
}

// const newPageNavigation = withRouter(PageNavigation);
// export default newPageNavigation
// export default withRouter(PageNavigation)
export default PageNavigation

/**
 * 高阶路由（高阶组件）：调用该方法时，返回一个新的组件
 *  const newCmp = withRouter(cmp)
 *  withRouter 适用于 类组件 和 函数组件
 * 
 * Hooks
 *  useHistory - 获取 history 方法
 *  useLocation - 获取 location 对象
 *  useParams - 获取动态路由参数
 *  useRouteMatch - 获取 match 对象
 */