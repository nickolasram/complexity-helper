import Header from '../components/Header';
import TutorialHubContentPanel from '../components/TutorialsPanel';
import axios from "axios";
import React, {useEffect, useState} from 'react'; 

const TutorialHub= ()=>{
    const [as, setAs] = useState(null);

    const getEndpoint =()=>{
        const endpoint = process.env.REACT_APP_ENDPOINT;
        const headers = {
              'tablename':'complexity-helper-complexities',
              'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Api-Key': process.env.REACT_APP_API_KEY
            }
        axios.post(endpoint, {}, {
            headers: headers
          })
        .then(response => setAs(response.data.Items))
    }

    useEffect(() => {
        getEndpoint();
      }, []);

    return(
        <div id="wrapper">
            <Header />
            <TutorialHubContentPanel />
            {as && <p onClick={()=>console.log(as)}>{as[0].symbol.S}</p>}
        </div>
    )
}

export default TutorialHub;