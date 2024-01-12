import React, {useState} from 'react'; 
import FormattedP from './FormattedP';

let Card = props => {
    const [checked, setChecked] = useState(false);
    let algorithms = props.algorithms
    const handleSelect = () =>{
        checked ? setChecked(false) : setChecked(true)
        props.onSelect(props.content, !checked)
    }
    const handleSelectAlg = alg =>{
        props.onSelectAlg(alg)
        document.getElementById(props.content).checked = true;
        if (checked == false) {
            // TODO: REACT NOT SETTING BEFORE PERFORMING REST OF FUNCTION
            props.onSelect(props.content, !checked)
            setChecked(true)
        } else {
            props.onSelect(props.content, checked)
        }
    }
    return (
        <div className='card-wrapper'>
          <div className="comp-card">
            <div className='comp-name-select'>
                <div className='card-placeholder'></div>
                <FormattedP givenText={props.content} symbolBool={true}/>
                <input type="checkbox" id={props.content} name={props.content} value={props.content} onClick={handleSelect} className='comp-checkbox'/>
            </div>
            <section className='subCard'>
            {algorithms.map((alg,index)=>
                (
                    <p className='sort-name' onClick={() => handleSelectAlg(alg)}>{alg.name}</p>
                )
            )}
        </section>
        </div>
      </div>
    );

} 

export default Card;