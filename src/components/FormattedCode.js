const FormattedCode=({givenText, exerciseStatus})=>{
    let textArray = givenText.split("n>");
    return (
        <section className={exerciseStatus ? "exercise__code": "tutorial__code"}>
            {textArray.map((codeSegment, index)=>(
                <p><code>{codeSegment}</code></p>
            ))}
        </section>
    );
}
export default FormattedCode;