import React, {useState, useRef} from 'react'; 
import {useParams, useNavigate} from 'react-router-dom';
import Header from "../components/Header";
import Flashcard from "../components/Flashcard";
import data from '../source.json';

let shuffle =(array)=> {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

let FlashcardPage =()=>{
    const {category} = useParams();
    let questions = data['review-questions'][category];
    shuffle(questions);
    const intialIndex = Math.floor(Math.random() * questions.length);
    const indexTracker = useRef(0);
    const [cardContent, setCardContent] = useState(questions[intialIndex]);

    let scrollRight = () =>{
        let card = document.getElementsByClassName('flashcard')[0];
        card.style.animationName = "fcmoveright";
        indexTracker.current++;
        if (indexTracker.current===questions.length){
            indexTracker.current = 0;
        }
        setCardContent(questions[indexTracker.current])
        setTimeout(() => {
            card.style.animationName = ""
          }, 500);
    }

    let scrollLeft = () =>{
        let card = document.getElementsByClassName('flashcard')[0];
        card.style.animationName = "fcmoveleft";
        indexTracker.current--;
        if (indexTracker.current===-1){
            indexTracker.current = questions.length-1;
        }
        setCardContent(questions[indexTracker.current])
        setTimeout(() => {
            card.style.animationName = ""
          }, 500);
    }

    const navigate = useNavigate();
    const handleOnClick = () => navigate('/Flashcards');

    const reshuffle = () =>{
        shuffle(questions);
        indexTracker.current = 0;
        setCardContent(questions[indexTracker.current])
    }

    return(
        <div id="wrapper">
            <Header />
            <div className="main-content-panel">
                <div></div>
                <div className="flashcards">
                    <div className='flashcards__submenu'>
                        <p onClick={handleOnClick}><span className="inline-icon">&#8617; </span> Go Back</p>
                        <p onClick={reshuffle}>Reshuffle <span className="inline-icon">&#10227;</span></p>
                    </div>
                    <div className='flashcards__scroller'>
                        <p className='flashcards__scroller__arrow' onClick={scrollLeft}>&#8249;</p>
                        <Flashcard question={cardContent.question} answer={cardContent.answer} context={cardContent.context} image={cardContent.image}/>
                        <p className='flashcards__scroller__arrow'  onClick={scrollRight}>&#8250;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FlashcardPage;