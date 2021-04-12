import React from 'react'

export default function JoinView(props) {
    const { history } = props;
    const { go, goBack, goForward, push, length } = history;
    return (
        <div>
            <h1>加入视图 - {length}</h1>
            <button onClick={() => {
                goBack();
            }}>返回</button>
            <button onClick={() => {
                goForward();
            }}>前进</button>
            <input type="number" onBlur={({ target }) => {
                go(target.value)
            }} />
            <br />
            <button onClick={() => {
                push('/about', '哈哈')
            }}>关于</button>
        </div>
    )
}