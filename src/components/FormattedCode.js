const FormattedCode=givenText=>{
    givenText = givenText.givenText
    let textArray = givenText.split("n>");
    return (
        <section className="tutorial__code">
            {textArray.map((codeSegment, index)=>(
                <p><code>{codeSegment}</code></p>
            ))}
        </section>
    );
}
export default FormattedCode;