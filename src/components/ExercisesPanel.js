import FormattedExercise from "./FormattedExercise";

import ExercisesSidebar from "./ExercisesSidebar";
const ExercisesHubPanel =({question})=> {
    return (
        <div className='main-content-panel'>
            <ExercisesSidebar />
            <section className='main-content-panel__main main-content-panel__main--ex-grid'>
                <div className="ex-info">
                    <p className="ex-info__details">{question.level}</p>
                    <p className="ex-info__details">{question.category}</p>
                </div>
                <p className='flashcards__scroller__arrow grid-back'>&#8249;</p>
                <div className="question-div">
                    { question.prompt && <p className="question-div__prompt">{question.prompt}</p> }
                    <FormattedExercise givenText={question.question}/>
                </div>
                <p className='flashcards__scroller__arrow grid-next'>&#8250;</p>
                <div className="ex-submit">
                    <p className="ex-submit__btn">Check Answer</p>
                </div>
            </section>
            
        </div>

    )
}

export default ExercisesHubPanel;