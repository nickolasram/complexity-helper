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
        // let card = document.getElementsByClassName('flip');
        // if (card.length > 0) {
        //     let classes = card[0].getAttribute("class").split(" ")
        //     classes[1] = "no-flip"
        //     card[0].setAttribute("class", classes.join(" "))
        // }
        let card = document.getElementsByClassName('flashcard');
        indexTracker.current++;
        if (indexTracker.current==questions.length){
            indexTracker.current = 0;
        }
        setCardContent(questions[indexTracker.current])
    }

    let scrollLeft = () =>{
        indexTracker.current--;
        if (indexTracker.current==-1){
            indexTracker.current = questions.length-1;
        }
        setCardContent(questions[indexTracker.current])
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
                <div className="flashcard-panel">
                    <div className='flashcard-submenu'>
                        <p onClick={handleOnClick}><span className="inline-icon">&#8617; </span> Go Back</p>
                        <p onClick={reshuffle}>Reshuffle <span className="inline-icon">&#10227;</span></p>
                    </div>
                    <div className='flashcard-scroller'>
                        <p className='scroller-arrow' onClick={scrollLeft}>&#8249;</p>
                        <Flashcard question={cardContent.question} answer={cardContent.answer} context={cardContent.context} image={cardContent.image}/>
                        <p className='scroller-arrow'  onClick={scrollRight}>&#8250;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FlashcardPage;