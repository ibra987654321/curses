import axios from 'axios'

export const api = axios.create({
    baseURL: "http://185.146.3.157",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'en-US',
        // 'Authorization': localStorage.getItem("ARBITRATION")
    }

})

export const apiWithAuth = axios.create({
    baseURL: "http://185.146.3.157",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'en-US',
        'Authorization':'Bearer ' + localStorage.getItem("token")
    }

})
