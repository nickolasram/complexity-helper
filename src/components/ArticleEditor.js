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
    }

    const templateSegment=(child, object)=>{
        return(
            <div key={object.index} className='article-editor-field'>
                <div className='article-editor-field-controls'>
                    <button title="move item up">&#8743;</button>
                    <div className='article-editor-field-controls-middle-row'>
                        <button onClick={()=>removeIndex(object)} title="delete item">&#10005;</button>
                        <button onClick={null} title="revert item to previously saved version">&#10226;</button>
                        <button onClick={null} title="save item">&#10003;</button>
                    </div>
                    <button title="move item down">&#8744;</button>
                </div>
                {child}
            </div>
        )
    }

/*
-Create segment
-if object is null (can we do this -> object?) 
    or value is null/empty then render an input field
-if there is a value, show that picture
-implement a replace button (probably just sets the value to null/empty)
-currently, default is empty. can set to null? will it break anything?
-if images are deleted, for now just keep them in the database
-if image is uploaded, generate a new name. Maybe have field to let admin choose the name
-will have to generate a new file, a copy, to replace it
    or else I'll just have to use its original name which could 
    create conflicts if someone uploads files with same name
-upload test image
- test rendering and style
*/

    const renderSegment=(object)=>{
        if (object==null){
            return null
        }
        let child = null;
        let elementID = "editor"+object.index
        switch(object.type){
            case "h2":
                child = <input type='text' id={elementID} className='h2-editor-input'></input>
                break;
            case "p":
                child = <textarea id={elementID} className='p-editor-input' rows="4" cols="80"></textarea>
                break;
            case "image":
                child = <input type='file' id={elementID} className='image-editor-input'></input>
                break;
            case "code":
                child = <textarea id={elementID} className='code-editor-input' rows="10" cols="30"></textarea>
                break;
            default:
                return null
        }
        return(
            templateSegment(child, object)
        )
    }

    const addSegment=inputType=>{
        let ex = {
            type: inputType,
            index: segments.length,
            value: ""
        }
        if (segments[0] == null) {
            setSegments([{type: inputType, index: 0, value: "" }])
        } else {
            setSegments(
                segments.concat(ex)
            )
        }
    }

    const EditorControls =()=>{
        return (
            <div className='editor-controls'>
                <button onClick={()=>addSegment('h2')} className='editor-button'>h2</button>
                <button onClick={()=>addSegment('p')} className='editor-button'>p</button>
                <button onClick={()=>addSegment('image')} className='editor-button'>image</button>
                <button onClick={()=>addSegment('code')} className='editor-button'>code</button>
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