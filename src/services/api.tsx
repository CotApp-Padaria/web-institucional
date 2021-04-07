import axios from "axios"

const urls = {
    test: '',
    development: 'http://127.0.0.1:8000/api',
    production: ''
}

const api = axios.create({
    baseURL: urls[process.env.NODE_ENV],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api;