import {useParams, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import data from '../source.json';
import FormattedCode from '../components/FormattedCode';

const tutorials = data.tutorials

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
            return <img src={require('../images/'+content)} className='tutorial__image--S'/>
        case "imageM":
            return <img src={require('../images/'+content)} className='tutorial__image--M'/>
        case "imageL":
            return <img src={require('../images/'+content)} className='tutorial__image--L'/>
        default:
            return <p><b>{content}</b></p>
    }

}

const Tutorial=()=>{
    const {title} = useParams();
    const navigate = useNavigate();
    const handleOnClick = title => navigate('/Tutorial/'+title);
    
    let tutorial = tutorials.find(obj => {
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