import React, {useState, useEffect} from 'react'; 
import Graph from './Graph';
import CompDescription from './CompDescription';
import NothingDescription from './NothingDescription';
import AlgGif from './AlgGif';
import Sidebar from './Sidebar';
import getData from '../components/functions/getData'

let MainContentPanel = () =>{
    const [selections, setSelections] = useState([])
    const [latestSelection, setLatest] = useState(null)
    const [selectedAlg, setSelectedAlg] = useState(null)
    const [complexities, setComplexities] = useState([{
        description: "",
        examples: [{ images: null,name: null}],
        rank: 0,
        symbol: ""
    }]);

    let getComplexity = symbol => complexities.find(obj => {return obj.symbol === symbol} )

    useEffect(() => {
        getData('complexity', setComplexities);
    }, []);

    let handleSelect = (selection, status) => {
        let checked = getComplexity(selection)
        if (status) {
            setLatest(checked)
            setSelections(selections.concat(checked))
        } else {
            setSelections(selections.filter(obj => {return obj.symbol !== selection}))
            if (selection === latestSelection?.symbol){
                if (latestSelection.examples.some(obj=>{return obj.name === selectedAlg?.name})){
                    setSelectedAlg(null)
                }
                setLatest(null)
            }
        }   
    }

    let handleSelectAlg = selection => {
        if (selection === selectedAlg) {
            setSelectedAlg(null)
        } else{
            setSelectedAlg(selection)
        }
    }

    return (
        <section className='main-content-panel'>
            <Sidebar onSelect={handleSelect} onSelectAlg={handleSelectAlg} complexities={complexities}/>
            <section className='main-content-panel__main'>
                <section className='main-content-panel__graph-wrapper'>
                    <Graph selections={selections} />
                    {latestSelection == null ? <NothingDescription /> : <CompDescription symbol={latestSelection.symbol} description={latestSelection.description}/>}
                </section>
                <AlgGif alg={selectedAlg} />
            </section>
        </section>
    );
}
export default MainContentPanel;