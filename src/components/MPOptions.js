import {useRef} from 'react';

let shuffle =(array)=> {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

const MPOptions=({answers})=>{
    shuffle(answers);
    const selectedIndex = useRef(-1);
    const handleClick=(index)=>{
        if (selectedIndex.current !== -1){
            let pastSelected = document.getElementById("MP-Answers__answer"+selectedIndex.current);
            pastSelected.className = "MP-Answers__answer";
        }
        selectedIndex.current = index;
        let currentSelected = document.getElementById("MP-Answers__answer"+selectedIndex.current);
        currentSelected.className = "MP-Answers__answer--selected"
    }
    return (
        <div className="MP-Answers" onLoad={()=>{selectedIndex.current = -1}}>
            {answers.map((answer, index)=>(
                <p className="MP-Answers__answer" 
                onClick={()=>handleClick(index)}
                id={"MP-Answers__answer"+index}
                data-value={answer}
                >{answer}</p>
            ))}
        </div>
    )
}

export default MPOptions;