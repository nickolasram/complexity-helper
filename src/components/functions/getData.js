import axios from "axios";
import {unmarshall} from "@aws-sdk/util-dynamodb";

const cleanupResponse=response=>{
    let clean = Array(response.length)
    for (let i=0; i<response.length; i++){
        clean[i] = unmarshall(response[i])
    }
    return clean
}

const getData =(contentType, executable)=>{
    const endpoint = process.env.REACT_APP_ENDPOINT;
    const headers = {
          'tablename':contentType,
          'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Api-Key':process.env.REACT_APP_API_KEY
        }
    axios.post(endpoint, {}, {
        headers: headers
      })
    .then(response => executable(cleanupResponse(response.data)))
}

export default getData;