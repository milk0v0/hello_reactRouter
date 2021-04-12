import List from '../component/list'
import Nav from '../component/nav'
import PageNavigation from '../component/pageNavigation'
import { subNavList } from '../routes'

export default function ListView(props) {
    return (
        <div>
            <Nav datas={subNavList} $class="subNav" />
            <List />
            <PageNavigation />
        </div>
    )
}