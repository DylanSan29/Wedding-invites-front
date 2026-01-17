import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Sapo, hay que cambiar esto cuando el back esté listo 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;