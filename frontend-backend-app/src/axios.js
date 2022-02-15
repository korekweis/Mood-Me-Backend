import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:8001'
    baseURL: 'https://mood-me-backend.herokuapp.com/'
    // 9000
})

export default instance;