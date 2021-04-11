import PageNavigation from '../component/pageNavigation'

export default function AboutView(props) {
    const { params } = props.match
    console.log(params);
    return (
        <>
            <h1>列表视图 - page: {params.page}</h1>
            <PageNavigation />
        </>
    )
}