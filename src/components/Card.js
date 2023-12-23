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
            <div className='comp-name-select'>
                <div className='card-placeholder'></div>
                <p className='complexity-symbol'><b>{props.content}</b></p>
                <input type="checkbox" id={props.content} name={props.content} value={props.content} onClick={handleSelect} className='comp-checkbox'/>
            </div>
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