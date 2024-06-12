import React, {useState} from 'react';
import data from '../source.json'
import Header from '../components/Header';
import FormattedExercise from "../components/FormattedExercise";
import FormattedCode from '../components/FormattedCode';
import ExercisesSidebar from "../components/ExercisesSidebar";
import CtCFeedback from '../components/CtCFeedback';
import MPOptions from "../components/MPOptions";
import SAInput from '../components/SAInput';

let Exercises =()=> {
    const [exercises, setExercises] = useState(data.exercises)
    const [questionIndex, setQuestionIndex] = useState(0);
    // const [result, setResult] = useState(null);
    const [revealState, setRevealState] = useState(false);
    const [answers, setAnswers] = useState(Array(exercises[questionIndex].answers.length).fill(null));
    const [givenShortAnswer, setGivenShortAnswer] = useState(null);

    const filterExercises=(difficultySelection, categorySelection, typeSelection)=>{
        let tempExercises = data.exercises;
        let difSelectArray = []
        difficultySelection.forEach((item)=>{
            if (item.checked){
                difSelectArray.push(item.value);
            }
        })
        if (difSelectArray.length > 0){
            tempExercises = tempExercises.filter((item)=>difSelectArray.includes(item.level))
        }
        let categorySelectArray = []
        categorySelection.forEach((item)=>{
            if (item.checked){
                categorySelectArray.push(item.value);
            }
        })
        if (categorySelectArray.length > 0){
            tempExercises = tempExercises.filter((item)=>categorySelectArray.includes(item.category))
        }
        let typeSelectArray = []
        typeSelection.forEach((item)=>{
            if (item.checked){
                typeSelectArray.push(item.value);
            }
        })
        if (typeSelectArray.length > 0){
            tempExercises = tempExercises.filter((item)=>typeSelectArray.includes(item.type))
        }
        setExercises(tempExercises);

    }

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
        setGivenShortAnswer(null);
    }

    const shuffle =()=> {
        let tempExercises = exercises;
        let currentIndex = tempExercises.length,  randomIndex;
        while (currentIndex > 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [tempExercises[currentIndex], tempExercises[randomIndex]] = [
            tempExercises[randomIndex], tempExercises[currentIndex]];
        }
        setExercises(tempExercises);
        switchQuestion(questionIndex);
    }

    const checkAnswersCtC =()=> {
        let exInputs = document.querySelectorAll(".exInput");
        let tempArray = [];
        exInputs.forEach((input)=>{
            tempArray.push(input.value);
        });
        setAnswers(tempArray);
        exInputs = document.querySelectorAll(".exInput");
    }

    let question = exercises[questionIndex]

    const checkAnswersMC=()=>{
        let exInputs = document.querySelector(".MP-Answers__answer--selected");
        if (exInputs){
                let selectedItem = exInputs.dataset.value;
            if (selectedItem === question?.correct){
                exInputs.className = "MP-Answers__answer--correct";
            } else {
                exInputs.className = "MP-Answers__answer--incorrect";
            }
        }
    }

    const checkAnswersShort=()=>{
        let shortInput = document.getElementById("SAInput");
        setGivenShortAnswer(shortInput.value);
        shortInput.value="";
    }

    return (        
        <div id="wrapper">
            <Header />
            <div className='main-content-panel'>
                <ExercisesSidebar confirmFilter={filterExercises} shuffleExercises={shuffle}/>
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
                        {question.type === "Complete the Code" && <FormattedExercise givenText={question.question} placeholders={answers}/>}
                        {question.type === "Multiple Choice" && <FormattedCode givenText={question.question} exerciseStatus={true}/>}
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
                        {question.type === "Complete the Code" && <p className="ex-submit__btn" onClick={checkAnswersCtC}>Check Answer</p>}
                        {question.type === "Multiple Choice" && <MPOptions answers={question.answers}/>}
                        {question.type === "Multiple Choice" && <p className="ex-submit__btn" onClick={checkAnswersMC}>Check Answer</p>}
                        {question.type === "Short Answer" && 
                            <SAInput givenAnswer={givenShortAnswer} result={givenShortAnswer === question.correct} />
                        }
                        {question.type === "Short Answer" && 
                            <p className="ex-submit__btn" onClick={checkAnswersShort}>Check Answer</p>
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Exercises;