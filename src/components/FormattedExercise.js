import {useRef} from 'react';

const FormattedExercise=({givenText, placeholders})=>{
    const inputIndex= useRef(-1);
    const InlineInput=(givenLine)=>{
        givenLine = givenLine.givenLine
        if(givenLine.includes("_>")){
            inputIndex.current = inputIndex.current + 1;
            givenLine = givenLine.split("_>")
            return (
                <p>
                    <code>{givenLine[0]}</code>
                    <input type="text" maxLength="25" size="10" data-index={inputIndex.current} className='exInput' placeholder={placeholders[inputIndex.current]}></input>
                    <code>{givenLine[1]}</code>
                </p>
                )
        } else {
            return (
                <p><code>{givenLine}</code></p>
            )
        }
    }

    let textArray = givenText.split("n>");
    return (
        <section className="exercise__code" onLoad={inputIndex.current = -1}>
            {textArray.map((codeSegment, index)=>(
                <InlineInput givenLine={codeSegment} />
            ))}
        </section>
    );
}

export default FormattedExercise;