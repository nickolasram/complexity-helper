import React, {useState} from 'react'; 

let Flashcard = ({question, answer, context}) =>{
    const [flip, setFlip] = useState('no-flip')
    return (
        <div className="flashcard" onClick={() => setFlip(flip == 'flip' ? 'no-flip' : 'flip')}>
            <div className={"flashcard-inner " + flip}>
                <div className="flashcard-front">
                    <p>{question}</p>
                </div>
                <div className="flashcard-back">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}
export default Flashcard;