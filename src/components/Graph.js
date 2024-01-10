let Graph = props => {
    if (props.selections == 0) {
        return <section className='graph-space'></section>
    }
    return(
        <section className='graph-space'>
            {props.selections.map((selection,index)=>
                (
                    <img src={require('../images/'+selection.image)}/>
                )
            )}
        </section>
        )
}

export default Graph;