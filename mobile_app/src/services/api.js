// integrando backend com axios 
// npm install axios

import axios from 'axios'; 

const api = axios.create({
    baseURL: 'http://192.168.20.11:3334'
}); 

export default api; 