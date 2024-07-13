let AlgGif = props =>{
    if (props.alg == null) {
        return (
            <section className='gif-wrapper'>
            </section>
        )
    }
    return (
        <section className='gif-wrapper'>
            <img src={props.alg.images[0]} className="algGif" alt="PLACEHOLDER"/>
            <p className='algorithm-desc'> <em>{props.alg.name}</em>: {props.alg.description}</p>
        </section>
    );
}

export default AlgGif;