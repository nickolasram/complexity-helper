import {useNavigate} from 'react-router-dom';

const TutorialCategory=(tutorial, key)=>{
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/Tutorial/'+tutorial.title);
    tutorial = tutorial.tutorial
    return(
        <div className="wrapper--tut-category" onClick={handleOnClick}>
            <section className="tut-category">
                <h2 className="tut-category__title">{tutorial.title}</h2>
                <section>
                    <p>{tutorial.level}</p>
                    <p>{tutorial.type}</p>
                </section>
            </section>
        </div>
    )
}
export default TutorialCategory;