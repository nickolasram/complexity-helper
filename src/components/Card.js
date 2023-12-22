import { useState } from 'react';



let Card = props => {
    let algorithms = props.algorithms
    const [shuffle, setShuffle] = useState(0);
    return (
        <div 
        className='card-wrapper'
        onClick={() => setShuffle(1)}
        onAnimationEnd={() => setShuffle(0)}
        shuffle={shuffle}
       >
          <div 
            className="comp-card"
            >
            <p className='complexity-symbol'><b>{props.content}</b></p>
            <section className='subCard'>
            {algorithms.map((alg,index)=>
                (
                    <p className='sort-name'>{alg.name}</p>
                )
            )}
        </section>
        </div>
      </div>
    );

} 

export default Card;