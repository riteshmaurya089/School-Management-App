import axios from 'axios'
// import { API_URL } from '../../config';
const instance = axios.create({
    baseURL: "https://schoolbackend-q0tw.onrender.com/"
})
export default instance;    
