const InlineInput=givenLine=>{
    givenLine = givenLine.givenLine
    if(givenLine.includes("_>")){
        givenLine = givenLine.split("_>")
        return (
            <p>
                <code>{givenLine[0]}</code>
                <input type="text" maxLength="25" size="10"></input>
                <code>{givenLine[1]}</code>
            </p>
            )
    } else {
        return (
            <p><code>{givenLine}</code></p>
        )
    }
}

const FormattedExercise=givenText=>{
    givenText = givenText.givenText
    let textArray = givenText.split("n>");
    return (
        <section className="exercise__code">
            {textArray.map((codeSegment, index)=>(
                <InlineInput givenLine={codeSegment}/>
            ))}
        </section>
    );

}

export default FormattedExercise;