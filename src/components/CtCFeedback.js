const CtCFeedback=({answers, correctAnswers})=>{
    return (
        <section className='feedback-section'>
            <p>Feedback</p>
            {answers.map((answer, index)=>(
                <p className={answer == correctAnswers[index] ? "feedback-section--correct" : "feedback-section--incorrect"}>Answer {index+1}: {!answer ? "?" : answer}</p>
            ))}
        </section>
    )
}

export default CtCFeedback;