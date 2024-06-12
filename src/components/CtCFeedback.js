import IncorrectSVG from "./IncorrectSVG";
import CorrectSVG from "./CorrectSVG";

const CtCFeedback=({answers, correctAnswers})=>{
    const evaluateAnswer=(given, correct)=>{
        if (!given){
            return "nothing"
        } else if (given === correct) {
            return "feedback-section--correct"
        } else {
            return "feedback-section--incorrect"
        }
    }
    return (
        <section className='feedback-section'>
            <p>Feedback</p>
            {answers.map((answer, index)=>(
                <div className="feedback-section__ctc-row">
                    <p className={evaluateAnswer(answer, correctAnswers[index])}>
                        Answer {index+1}:&ensp;{!answer ? "?" : answer}
                    </p>
                    {evaluateAnswer(answer, correctAnswers[index]) === "feedback-section--incorrect" &&
                    <IncorrectSVG size={24} />}
                    {evaluateAnswer(answer, correctAnswers[index]) === "feedback-section--correct" &&
                    <CorrectSVG size={24} />}
                </div>
            ))}
        </section>
    )
}

export default CtCFeedback;