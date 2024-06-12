import IncorrectSVG from "./IncorrectSVG";
import CorrectSVG from "./CorrectSVG";

const SAInput=({givenAnswer, result})=>{
    return (
        <section className="SAInput">
            <input type="text" id="SAInput" maxLength="50" className="SAInput__input" placeholder="Input your answer here"></input>
            <div className="SAInput__feedback">
                {givenAnswer && <p className={"SAInput--" + result}>{givenAnswer}</p>}
                {givenAnswer && !result && <IncorrectSVG size={24} />}
                {givenAnswer && result && <CorrectSVG size={24} />}
            </div>
        </section>
    )
}

export default SAInput;