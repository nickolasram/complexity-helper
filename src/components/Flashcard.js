import React, {useState} from 'react'; 

let Flashcard = ({question, answer, context, image}) =>{
    const [flip, setFlip] = useState('no-flip')
    return (
        <div className="flashcard flashcard-moving" onClick={() => setFlip(flip === 'flip' ? 'no-flip' : 'flip')}>
            <div className={"flashcard__inner " + flip}>
                <div className="flashcard__front">
                    <p>{question}</p>
                    {
                        image && <img src={image} alt="PLACEHOLDER"/>
                    }
                </div>
                <div className="flashcard__back">
                    <p>{answer}</p>
                    <p className='flashcard__context'><i>{context && context}</i></p>
                </div>
            </div>
        </div>
    )
}
export default Flashcard;