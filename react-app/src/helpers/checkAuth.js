import axios from "axios"
import { getBaseURL } from "helpers/GetBaseURL.js"
export default function checkAuth(){
    axios.get(`${getBaseURL()}/v1/validate-admin`)
    return(true)
}