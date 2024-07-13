import React, {useState, useEffect} from 'react';
import TutorialsSidebar from "./TutorialsSidebar";
import TutorialCategory from "./TutorialCategory";
import getData from './functions/getData';
import tutorialSort from './functions/tutorialSort'


const TutorialHubContentPanel =()=>{
    const [tutorialData, setTutorialData] = useState(null);
    const [localUpdated, setLocalUpdated] = useState(null);
    const [selectedTuts, setSelectedTuts] = useState([]);
    const [levels, setLevels] = useState([]);
    const [types, setTypes] = useState([]);
    const [allTuts, setAllTuts] = useState([]);
    
    useEffect(()=>{
        if (!localStorage.getItem("tutorialData")){
            getData('tutorial', setTutorialData)
            setLocalUpdated("positive");       
        } else {
            setTutorialData(JSON.parse(localStorage.getItem("tutorialData")))
            setLocalUpdated("false");
        }
    },[]);

    useEffect(()=>{
        if (localUpdated === "positive"){
            localStorage.setItem('tutorialData', JSON.stringify(tutorialData));
        }
    },[localUpdated, tutorialData]);

    useEffect(()=>{
        if (tutorialData){
            let unsortedTutorials = tutorialData.filter(tutorial => tutorial.title)
            let isolatedLevels = tutorialData.filter(tutorial => tutorial.filteringOptions)[0].filteringOptions.levels
            let isolatedTypes = tutorialData.filter(tutorial => tutorial.filteringOptions)[0].filteringOptions.types
            setLevels(isolatedLevels);
            setTypes(isolatedTypes);
            let allTutsSorted = tutorialSort(unsortedTutorials, isolatedLevels, isolatedTypes);
            setSelectedTuts(allTutsSorted);
            setAllTuts(allTutsSorted);
            localStorage.setItem('tutorialData', JSON.stringify(tutorialData));
        }
    },[tutorialData]);

    const handleTutCheck=(levelArray, typeArray)=>{
        if (levelArray.length > 0){
            if (typeArray.length === 0){
                setSelectedTuts(
                    allTuts.filter(tutorial=>levelArray.includes(tutorial.level))
                )
            }   
            else {
                setSelectedTuts(
                    allTuts.filter(tutorial=>levelArray.includes(tutorial.level) && typeArray.includes(tutorial.type))
                )
            }
        } 
        else {
            if (typeArray.length > 0){
                setSelectedTuts(
                    allTuts.filter(tutorial=>typeArray.includes(tutorial.type))
                )
            }
            else {
                setSelectedTuts(allTuts) 
            }
        }
    }

    return (
        <div className='main-content-panel'>
            <TutorialsSidebar handleCheck={handleTutCheck} levels={levels} types={types}/>
            <section className='main-content-panel__main'>
                {selectedTuts.map((tutorial, index)=>(
                    <TutorialCategory tutorial={tutorial} key={index} />
                ))}
            </section>
        </div>
    );
}
export default TutorialHubContentPanel;