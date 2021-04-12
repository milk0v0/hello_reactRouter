import { useParams } from "react-router"
import data from '../data'

/**
 * 每页显示 5 条
 */

export default function List(props) {
    const { type = 'good', page = 1 } = useParams();
    let nowData = data[type];
    const len = 5;
    const start = len * (page - 1);
    const end = start + len;
    nowData = nowData.filter((item, index) => index >= start && index < end);
    return (
        <ul>
            {nowData.length > 0 ? nowData.map(item => <li key={item.id}>{item.title}</li>) : "暂无数据"}
        </ul>
    )
}