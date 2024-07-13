import {useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from '../components/Header';
import FormattedCode from '../components/FormattedCode';
import getData from '../components/functions/getData';
import tutorialSort from '../components/functions/tutorialSort';

const renderSegment=segment=>{
    let {type, content} = segment;
    switch(type){
        case "n":
            return <p><i>{content}</i></p>
        case "p":
            return <p className='tutorial__p'>{content}</p>
        case "h2":
            return <h2 className='tutorial__h2'>{content}</h2>
        case "code":
            return <FormattedCode givenText={content} />
        case "imageS":
            return <img src={content} className='tutorial__image--S' alt="PLACEHOLDER"/>
        case "imageM":
            return <img src={content} className='tutorial__image--M' alt="PLACEHOLDER"/>
        case "imageL":
            return <img src={content} className='tutorial__image--L' alt="PLACEHOLDER"/>
        default:
            return <p><b>{content}</b></p>
    }

}

const sortingHelper =tutorialData=>{
    let justTutData = tutorialData.filter(tutorial => tutorial.title);
    let isolatedLevels = tutorialData.filter(tutorial => tutorial.filteringOptions)[0].filteringOptions.levels
    let isolatedTypes = tutorialData.filter(tutorial => tutorial.filteringOptions)[0].filteringOptions.types
    let sortedTutData = tutorialSort(justTutData, isolatedLevels, isolatedTypes);
    return sortedTutData

}

const Tutorial=()=>{
    const [tutorials, setTutorials] = useState([])
    const [tutorialData, setTutorialData] = useState(null);
    const [localUpdated, setLocalUpdated] = useState(null);
    const {title} = useParams();
    const navigate = useNavigate();
    const handleOnClick = title => navigate('/Tutorial/'+title);

    useEffect(()=>{
        if (!localStorage.getItem("tutorialData")){
            getData('tutorial', setTutorialData)
            setLocalUpdated("positive");       
        } else {
            let allTutData =JSON.parse(localStorage.getItem("tutorialData"));
            let sortedTutData = sortingHelper(allTutData);
            setTutorials(sortedTutData);
        }
    },[]);

    useEffect(()=>{
        if (localUpdated === "positive"){
            localStorage.setItem('tutorialData', JSON.stringify(tutorialData));
            let sortedTutData = sortingHelper(tutorialData);
            setTutorials(sortedTutData);
        }
    },[localUpdated, tutorialData]);
    
    let tutorial = tutorials.length === 0 ? {body: [{type: 'p', content: null }], related: [], title: null} :
        tutorials.find(obj => {
            return obj.title === title
        })

    let body = tutorial.body
    let related = tutorial.related

    return (
        <div id="wrapper">
            <Header />
            <div className='main-content-panel'>
                <section className="sidebar sidebar--short">
                    <section className='sidebar__checklist'>
                        <div className='sidebar__checklist__category'>
                            <h3>Tutorials</h3>
                            <section>
                                {tutorials.map((tutorialItem, index)=>(
                                    <p onClick={()=>handleOnClick(tutorialItem.title)} className={tutorial.title === tutorialItem.title ? "sidebar__checklist__category__link--unresponsive" : "sidebar__checklist__category__link"}>
                                        {tutorialItem.title}
                                    </p>
                                ))}
                            </section>
                        </div>
                    </section>
                </section>
                <div className='main-content-panel__main tutorial'>
                    <section className='tutorial__title'>
                        <div className='wrapper--tutorial__title__heading'>
                            <h1 className='tutorial__title__heading'>{tutorial.title}</h1>
                        </div>
                        <section className='wrapper--tutorial__title__categories'>
                            <p>{tutorial.level}</p>
                            <p>{tutorial.type}</p>
                        </section>
                    </section>
                    <section className='tutorial__body'>
                        {body.map((segment, index)=>(
                            renderSegment(segment)
                        ))}
                    </section>
                    <section className='tutorial__related'>
                        <h3>Related Tutorials</h3>
                        {related.map((other, index)=>(
                            <p onClick={()=>handleOnClick(other)} className='tutorial__body__related-title'>{other}</p>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Tutorial;