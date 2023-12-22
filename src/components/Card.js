import React, {useState} from 'react'; 

let Card = props => {
    const [checked, setChecked] = useState(false);
    let algorithms = props.algorithms
    const handleSelect = () =>{
        checked ? setChecked(false) : setChecked(true)
        props.onSelect(props.content, !checked)
    }
    return (
        <div className='card-wrapper'>
          <div className="comp-card">
            <p className='complexity-symbol'><b>{props.content}</b></p>
            <input type="checkbox" id={props.content} name={props.content} value={props.content} onClick={handleSelect}/>
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