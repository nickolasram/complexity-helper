import React, {useState} from 'react';
import data from '../source.json'

const levels = data.filteringOptions.levels
const types = data.filteringOptions.types


const TutorialsSidebar =({handleCheck})=>{
    const [levelChecked, setLevelChecked] = useState([]);
    const [typeChecked, setTypeChecked] = useState([]);

    const handleSelect=(value, arrayNo)=>{
        if (arrayNo === 1){
            if (levelChecked.includes(value)){
                handleCheck(levelChecked.filter(i => i !== value), typeChecked)
                setLevelChecked(levelChecked.filter(i => i !== value))
            } 
            else {
                handleCheck([...levelChecked, value], typeChecked)
                setLevelChecked([...levelChecked, value])
            }
        }
        else {
            if (typeChecked.includes(value)){
                handleCheck(levelChecked, typeChecked.filter(i => i !== value))
                setTypeChecked(typeChecked.filter(i => i !== value))
            } 
            else {
                handleCheck(levelChecked, [...typeChecked, value])
                setTypeChecked([...typeChecked, value])
            }
        }
    }

    return(
        <section className="sidebar sidebar--short">
            <section className='sidebar__checklist'>
                <section className='sidebar__checklist__category'>
                    <p className='sidebar__checklist__title'>Difficulty</p>
                    {
                        levels.map((level, index)=>(
                            <section className="sidebar__checklist__checkbox" key={index}>
                                <input type="checkbox" id={level} name={level} value={level} onChange={()=>handleSelect(level, 1)}/>
                                <label htmlFor={level}>{level}</label>
                            </section>
                        ))
                    }
                </section>
                <section className='sidebar__checklist__category'>
                    <p className='sidebar__checklist__title'>Category</p>
                    {
                        types.map((type, index)=>(
                            <section className="sidebar__checklist__checkbox"  key={index}>
                                <input type="checkbox" id={type} name={type} value={type} onChange={()=>handleSelect(type, 2)}/>
                                <label htmlFor={type}>{type}</label>
                            </section>
                        ))
                    }
                </section>
            </section>
        </section>
    );
}
export default TutorialsSidebar;