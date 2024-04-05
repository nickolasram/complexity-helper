import React, {useState} from 'react'; 

const ArticleEditor =()=> {
    const [segments, setSegments] = useState([null]);

    // have to read from and write to json object now



    let setTempValues=()=>{
        for (const i in segments){
            let item = segments[i]
            let element = document.getElementById("editor"+(item.index))
            let inputValue = element.value;
            item.value = inputValue;
        }
        console.log(segments)
    }

    const removeIndex=(object)=>{
        let index = object.index
        let first = segments.slice(0, index);
        let last = segments.slice(index+1);
        let counter = 0;
        while (counter<last.length){
            let element = document.getElementById("editor"+(index+counter+1))
            let inputValue = element.value;
            let prevElement= document.getElementById("editor"+(index+counter))
            prevElement.value = inputValue
            last[counter].index = index+counter;
            counter += 1;
        }
        setSegments(first.concat(last));
        setTempValues();
    }

    const renderSegment=(object)=>{
        if (object==null){
            return null
        }
        let elementID = "editor"+object.index
        switch(object.type){
            case "h2":
                return (
                    <div key={object.index}>
                        <button onClick={()=>removeIndex(object)}>x</button>
                        <input type='text' id={elementID}></input>
                        <p>{object.index}</p>
                    </div>
                )
            case "p":
                return (
                    <p>{object.value}</p>
                )
            default:
                return null
        }
    }

    const addSegment=()=>{
        let ex = {
            type: "h2",
            index: segments.length,
            value: ""
        }
        if (segments[0] == null) {
            setSegments([{type: "h2", index: 0, value: "" }])
        } else {
            setSegments(
                segments.concat(ex)
            )
        }
    }

    const EditorControls =()=>{
        return (
            <div className='editor-controls'>
                <button onClick={addSegment} className='editor-button'>h2</button>
                <button onClick={()=>console.log(segments)} className='editor-button'>p</button>
                <button onClick={null} className='editor-button'>image</button>
                <button onClick={null} className='editor-button'>code</button>
            </div>
        )
    }

    return(
        <div className="article-editor">
            <EditorControls />
            {segments.map((segment, index)=>(
                renderSegment(segment)
        ))}
        </div>
    )
}

export default ArticleEditor