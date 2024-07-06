import Header from '../components/Header';
import TutorialHubContentPanel from '../components/TutorialsPanel';
import axios from "axios";
import React, {useEffect, useState} from 'react'; 

const TutorialHub= ()=>{
    const [as, setAs] = useState(null);

    // const getEndpoint =()=>{
    //     const endpoint = "https://7bjs6qawxb.execute-api.us-west-1.amazonaws.com/default/fetchComplexityHelperDB";
    //     axios.get(endpoint)
    //     .then(response => setAs(response.data.Items[0].complexity.S))
    // }

    // useEffect(() => {
    //     getEndpoint();
    //   }, []);

    const envtest = process.env.REACT_APP_ENDPOINT_TEST
    return(
        <div id="wrapper">
            <Header />
            <TutorialHubContentPanel />
            {/* <p>{as}</p> */}
            <p>{envtest}</p>
        </div>
    )
}

export default TutorialHub;