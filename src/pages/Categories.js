import React, {useState} from 'react'; 
import Header from '../components/Header';
import data from '../source.json';
import FCCategory from '../components/Category';

let categories = Object.keys(data['review-questions']);

let Flashcards = () => {
    return (
        <div id="wrapper">
            <Header />
            <div className='main-content-panel'>
                {/* <Flashcard question={cardContent.question} answer={cardContent.answer}/> */}
                <div className='category-list'>
                    {categories.map((category, index)=>(
                        <FCCategory category={category} items={data['review-questions'][category].length}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Flashcards;