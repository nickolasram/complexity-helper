import Card from './Card';

let Stack =props=> {
    let complexities = props.complexities
    complexities.sort((a, b) => b.rank - a.rank);
    return (
        <div className='stack'>
            {complexities.map((complexity, index)=>(
            <Card content={complexity.symbol} 
                top={index}
                algorithms={complexity.examples}
                onSelect = {props.onSelect}
                onSelectAlg = {props.onSelectAlg}
            />
        ))}
        </div>
    );
}

export default Stack;