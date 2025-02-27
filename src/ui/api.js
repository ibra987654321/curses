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

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);
