import React, {useState} from 'react'; 
import On2g from '../images/bubble.gif'
import Stack from './Stack';
import Graph from './Graph';
import data from '../source.json'

let complexities = data.complexities
let getComplexity = symbol => complexities.find(obj => {return obj.symbol == symbol} )
let defaultComplexity = getComplexity('O(N^2)')

let MainContentPanel = () =>{
    const [selections, setSelections] = useState([defaultComplexity])
    const [latestSelection, setLatest] = useState(defaultComplexity)
    let handleSelect = (selection, status) => {
        if (status) {
            let checked = getComplexity(selection)
            setLatest(checked)
            setSelections(selections.concat(checked))
            console.log(selection, selections, latestSelection)
        } else {
            setSelections(selections.filter(obj => {return obj.symbol == selection}))
        }   
    }

    return (
        <section className='main-content-panel'>
            <section className="sidebar-area">
                <p>Slow</p>
                <section className='sidebar'>
                    <Stack onSelect={handleSelect} />
                </section>
                <p>Fast</p>
            </section>
            <section className='main'>
                <section className='graph-wrapper'>
                    <Graph />
                    <p className='algorithm-desc'><em>O(N^2)</em> {latestSelection.description}</p>
                    {/* ALL THIS TEXT SHOULDN"T BE EMPHASIZED */}
                </section>
                <section className='gif-wrapper'>
                    <img src={On2g}/>
                    <p className='algorithm-desc'>
                        <em>Bubble Sort:</em> is the simplest sorting algorithm 
                        that works by repeatedly 
                        swapping the adjacent 
                        elements if they are in the wrong order. 
                        This algorithm is not suitable for large data 
                        sets as its average and worst-case time complexity is quite high.
                    </p>
                </section>
            </section>
        </section>
    );
}
export default MainContentPanel;