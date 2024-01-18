import React, {useState} from 'react'; 

let Flashcard = ({question, answer, context, image}) =>{
    const [flip, setFlip] = useState('no-flip')
    return (
        <div className="flashcard" onClick={() => setFlip(flip == 'flip' ? 'no-flip' : 'flip')}>
            <div className={"flashcard-inner " + flip}>
                <div className="flashcard-front">
                    <p>{question}</p>
                    <img src={image && require('../images/'+image)} />
                </div>
                <div className="flashcard-back">
                    <p>{answer}</p>
                    <p className='fc-context'><i>{context && context}</i></p>
                </div>
            </div>
        </div>
    )
}
export default Flashcard;