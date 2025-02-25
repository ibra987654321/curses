import axios from 'axios'

export const api = axios.create({
    baseURL: "http://185.146.3.157",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': '',
        'Authorization': localStorage.getItem("ARBITRATION")
    }

})
