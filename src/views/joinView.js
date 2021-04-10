import React from 'react'

export default function JoinView(props) {
    console.log(props);
    const { history } = props;
    const { go, goBack, goForward } = history;
    return (
        <div>
            <h1>加入视图</h1>
            <button onClick={() => {
                goBack();
            }}>返回</button>
            <button onClick={() => {
                goForward();
            }}>前进</button>
            <input type="number" onBlur={({ target }) => {
                go(target.value)
            }} />
        </div>
    )
}