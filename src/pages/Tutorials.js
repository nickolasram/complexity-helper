import Header from '../components/Header';
import TutorialHubContentPanel from '../components/TutorialsPanel';
import data from '../source.json'

let tutorials = data.tutorials
const TutorialHub=()=>{
    return(
        <div id="wrapper">
            <Header />
            <TutorialHubContentPanel />
        </div>
    )
}

export default TutorialHub;