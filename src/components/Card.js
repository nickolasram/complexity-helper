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
        <div className='wrapper--comp-card'>
          <div className="comp-card">
            <div className='comp-card__name-select'>
                <div className='comp-card__placeholder'></div>
                <FormattedP givenText={props.content} symbolBool={true}/>
                <input type="checkbox" id={props.content} name={props.content} value={props.content} onClick={handleSelect} className='comp-checkbox'/>
            </div>
            <section className='comp-card__subCard'>
            {algorithms.map((alg,index)=>
                (
                    <p className='comp-card__sort-name' onClick={() => handleSelectAlg(alg)}>{alg.name}</p>
                )
            )}
        </section>
        </div>
      </div>
    );

} 

export default Card;