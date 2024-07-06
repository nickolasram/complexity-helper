import Header from '../components/Header';
import TutorialHubContentPanel from '../components/TutorialsPanel';
import axios from "axios";
import React, {useEffect, useState} from 'react'; 

const TutorialHub= ()=>{
    const [as, setAs] = useState(null);

    const getEndpoint =()=>{
        const endpoint = process.env.REACT_APP_ENDPOINT;
        axios.get(endpoint)
        .then(response => setAs(response.data.Items[0].complexity.S))
    }

    useEffect(() => {
        getEndpoint();
      }, []);

    return(
        <div id="wrapper">
            <Header />
            <TutorialHubContentPanel />
            <p>{as}</p>
        </div>
    )
}

export default TutorialHub;