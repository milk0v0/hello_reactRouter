import { useParams } from "react-router"
import data from '../data'
import Nav from "./nav";

export default function PageNavigation() {
    const { type = 'good', page = 1 } = useParams();
    let nowData = data[type];
    const len = 5;
    const pageLen = nowData.length;
    const pageStatistics = Math.ceil(pageLen / len);
    const navList = returnList(`/list/${type}/`, pageStatistics, page);
    return (
        <Nav datas={navList} $class="pageNav" />
    )
}

function returnList(data, len, num) {
    const arr = [];
    for (let i = 1; i <= len; i++) {
        arr.push({
            title: i,
            to: data + i,
            exact: true
        })
    }

    return arr
}