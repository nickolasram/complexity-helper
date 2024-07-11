import data from '../source.json';
import ShuffleSVG from '../components/ShuffleSVG';
// import ResetSVG from './ResetSVG';
import PlaySVG from './PlaySVG';

const difficulties = data.exerciseOptions.difficulty
const types = data.exerciseOptions.type
const categories = data.exerciseOptions.category

const ExercisesSidebar =({confirmFilter, shuffleExercises})=>{
    return (
        <section className="sidebar sidebar--short">
            <section className='sidebar__checklist'>
                <section className='sidebar__checklist__category'>
                    <p className='sidebar__checklist__title'>Difficulty</p>
                    {
                        difficulties.map((difficulty, index)=>(
                            //     <input type="checkbox" id={level} name={level} value={level} onChange={()=>handleSelect(level, 1)}/>
                            <section className="sidebar__checklist__checkbox" key={index}>
                                <input type="checkbox" id={difficulty} name={difficulty} value={difficulty} className='difficultyCheck' />
                                <label htmlFor={difficulty}>{difficulty}</label>
                            </section>
                        ))
                    }
                </section>
                <section className='sidebar__checklist__category'>
                    <p className='sidebar__checklist__title'>Category</p>
                    {
                        categories.map((category, index)=>(
                            <section className="sidebar__checklist__checkbox" key={index}>
                                <input type="checkbox" id={category} name={category} value={category} className='categoryCheck'/>
                                <label htmlFor={category}>{category}</label>
                            </section>
                        ))
                    }
                </section>
                <section className='sidebar__checklist__category'>
                    <p className='sidebar__checklist__title'>Type</p>
                    {
                        types.map((type, index)=>(
                            <section className="sidebar__checklist__checkbox" key={index}>
                                <input type="checkbox" id={type} name={type} value={type} className='typeCheck'/>
                                <label htmlFor={type}>{type}</label>
                            </section>
                        ))
                    }
                </section>
                <div className='exercise-controls'>
                    <div className='exercise-controls__btn' onClick={()=>confirmFilter(document.querySelectorAll(".difficultyCheck"), document.querySelectorAll(".categoryCheck"), document.querySelectorAll(".typeCheck"))}>
                        <PlaySVG size={24} />
                        <p>Filter Qs</p>
                    </div>
                    {/* <div className='exercise-controls__btn'>
                        <ResetSVG size={24} />
                        <p>Reset A's</p>
                    </div> */}
                    <div className='exercise-controls__btn' onClick={shuffleExercises}>
                        <ShuffleSVG size={24} />
                        <p>Shuffle Qs</p>
                    </div>
                </div>
            </section>
        </section>
    )
}
// #67dcdc
// #7844f1

export default ExercisesSidebar;