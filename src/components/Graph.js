let Graph = props => {
    if (props.selections == 0) {
        return <section className='graph-space'><img src="https://complexity-helper-first.s3.us-west-1.amazonaws.com/empty.png"/></section>
    }
    return(
        <section className='graph-space'>
            {props.selections.map((selection,index)=>
                (
                    <img src={selection.image}/>
                )
            )}
        </section>
        )
}

export default Graph;