import React, {useState, useRef} from 'react';
import data from '../source.json'
import Header from '../components/Header';
import FormattedExercise from "../components/FormattedExercise";
import ExercisesSidebar from "../components/ExercisesSidebar";
import CtCFeedback from '../components/CtCFeedback';

// let exercises = data.exercises

let Exercises =()=> {
    const [exercises, setExercises] = useState(data.exercises)
    const [questionIndex, setQuestionIndex] = useState(0);
    const [result, setResult] = useState(null);
    const [revealState, setRevealState] = useState(false);
    const [answers, setAnswers] = useState(Array(exercises[questionIndex].answers.length).fill(null));

    const switchQuestion=(index)=>{
        if(index === -1){
            index = exercises.length - 1
        }
        if(index === exercises.length){
            index = 0
        }
        setQuestionIndex(index);
        setRevealState(false);
        setAnswers(Array(exercises[index].answers.length).fill(null));
    }
    let question = exercises[questionIndex]

    const checkAnswers =()=> {
        let exInputs = document.querySelectorAll(".exInput");
        let tempArray = [];
        exInputs.forEach((input)=>{
            tempArray.push(input.value);
        });
        setAnswers(tempArray);
        exInputs = document.querySelectorAll(".exInput");
    }

    return (        
        <div id="wrapper">
            <Header />
            <div className='main-content-panel'>
                <ExercisesSidebar />
                <section className='main-content-panel__main main-content-panel__main--ex-grid'>
                    <div className="ex-info">
                        <section>
                            <p className='asdf'>Question {questionIndex+1} / {exercises.length}</p>
                        </section>
                        <section>
                            <p className="ex-info__details">{question.level}</p>
                            <p className="ex-info__details">{question.category}</p>
                        </section>                        
                    </div>
                    <p className='flashcards__scroller__arrow grid-back' onClick={()=>switchQuestion(questionIndex-1)}>&#8249;</p>
                    <div className="question-div">
                        { question.prompt && <p className="question-div__prompt">{question.prompt}</p> }
                        <FormattedExercise givenText={question.question} placeholders={answers}/>
                        { question.hint &&
                            <section className="hint-section">
                                {!revealState && <p>Hint: <span className='hint-section__reveal' onClick={()=>setRevealState(true)}>Reveal</span></p>}
                                {revealState && <p >Hint: {question.hint}</p>}
                            </section>
                        }
                    </div>
                    <p className='flashcards__scroller__arrow grid-next'  onClick={()=>switchQuestion(questionIndex+1)}>&#8250;</p>
                    <div className="ex-submit">
                        {question.type === "Complete the Code" && <CtCFeedback answers={answers} correctAnswers={exercises[questionIndex].answers}/>}
                        <p className="ex-submit__btn" onClick={checkAnswers}>Check Answer</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Exercises;