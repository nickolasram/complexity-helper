import React, {useState} from 'react'; 
import Stack from './Stack';
import Graph from './Graph';
import data from '../source.json';
import CompDescription from './CompDescription';
import NothingDescription from './NothingDescription';
import AlgGif from './AlgGif';

let complexities = data.complexities
let getComplexity = symbol => complexities.find(obj => {return obj.symbol == symbol} )
let defaultComplexity = getComplexity('O(N^2)')

let MainContentPanel = () =>{
    const [selections, setSelections] = useState([])
    const [latestSelection, setLatest] = useState(defaultComplexity)
    const [selectedAlg, setSelectedAlg] = useState(null)

    let handleSelect = (selection, status) => {
        let checked = getComplexity(selection)
        if (status) {
            setLatest(checked)
            setSelections(selections.concat(checked))
        } else {
            setSelections(selections.filter(obj => {return obj.symbol != selection}))
        }   
    }

    let handleSelectAlg = selection => {
        setSelectedAlg(selection)
    }

    let testpress = () => {
        document.getElementById('O(N)').checked = true;
    }

    return (
        <section className='main-content-panel'>
            <section className="sidebar-area">
                <p>Slow</p>
                <section className='sidebar'>
                    <Stack onSelect={handleSelect} onSelectAlg={handleSelectAlg} />
                </section>
                <p>Fast</p>
                <button onClick={testpress}>button</button>
            </section>
            <section className='main'>
                <section className='graph-wrapper'>
                    <Graph selections={selections} />
                    {selections.length == 0 ? <NothingDescription /> : <CompDescription symbol={latestSelection.symbol} description={latestSelection.description}/>}
                </section>
                <AlgGif alg={selectedAlg} />
            </section>
        </section>
    );
}
export default MainContentPanel;