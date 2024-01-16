import React, {useState} from 'react'; 
import Header from "../components/Header";
import Flashcard from "../components/Flashcard";
import data from '../source.json';

let questions = data['review-questions'];
let category = questions['data structures'];


let FlashcardPage =()=>{
    const [cardContent, setCardContent] = useState(category[Math.floor(Math.random() * category.length)]);
    return(
        <div id="wrapper">
            <Header />
            <div className="main-content-panel">
                <div className='flashcard-scroller'>
                    <p className='scroller-arrow'>&#8249;</p>
                    <Flashcard question={cardContent.question} answer={cardContent.answer}/>
                    <p className='scroller-arrow'>&#8250;</p>
                </div>
            </div>
        </div>
    )
}
export default FlashcardPage;