import Card from './Card';
import data from '../source.json'

let complexities = data.complexities

let Stack =props=> {
    return (
        <div className='stack'>
            {complexities.map((complexity, index)=>(
            <Card content={complexity.symbol} 
                top={index}
                algorithms={complexity.examples}
                onSelect = {props.onSelect}
            />
        ))}
        </div>
    );
}

export default Stack;