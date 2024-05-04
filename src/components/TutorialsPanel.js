import React, {useState} from 'react';
import TutorialsSidebar from "./TutorialsSidebar";
import TutorialCategory from "./TutorialCategory";
import data from '../source.json'

const tutorials = data.tutorials

const TutorialHubContentPanel =()=>{
    const [selectedTuts, setSelectedTuts] = useState(tutorials);
    
    const handleTutCheck=(levelArray, typeArray)=>{
        if (levelArray.length > 0){
            if (typeArray.length === 0){
                setSelectedTuts(
                    tutorials.filter(tutorial=>levelArray.includes(tutorial.level))
                )
            }   
            else {
                setSelectedTuts(
                    tutorials.filter(tutorial=>levelArray.includes(tutorial.level) && typeArray.includes(tutorial.type))
                )
            }
        } 
        else {
            if (typeArray.length > 0){
                setSelectedTuts(
                    tutorials.filter(tutorial=>typeArray.includes(tutorial.type))
                )
            }
            else {
                setSelectedTuts(tutorials) 
            }
        }
    }

    return (
        <div className='main-content-panel'>
            <TutorialsSidebar handleCheck={handleTutCheck}/>
            <section className='main-content-panel__main'>
                {selectedTuts.map((tutorial, index)=>(
                    <TutorialCategory tutorial={tutorial} key={index} />
                ))}
            </section>
        </div>
    );
}
export default TutorialHubContentPanel;