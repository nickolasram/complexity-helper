let furtherSplit = (givenArray) =>{
    let resultArray = []
    for (let i = 1; i < givenArray.length; i++){
        let temp = [givenArray[i][0], givenArray[i].slice(1) ]
        resultArray.push(temp)
    }
    return resultArray
}

let FormattedP = ({givenText, symbolBool}) => {
    let textArray = givenText.split("^");
    if (textArray.length > 1){
        let finalArray = furtherSplit(textArray)
        return (
            <p className={symbolBool ? "complexity-symbol" : null}>
                {textArray[0]}
                {finalArray.map((item, index)=>(
                    <span><sup>{item[0]}</sup> {item[1]}</span>
                ))}
            </p>
        );
    } else {
        return <p  className={symbolBool ? "complexity-symbol" : null}>{givenText}</p>
    }
}

export default FormattedP;