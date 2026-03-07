import axios from 'axios';
import { API_URLS } from '../Config';

const authApi = axios.create({
  baseURL: API_URLS.AUTH,
  headers: {
    'Content-Type': 'application/json',
  },
});


authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Sesión expirada o no autorizada");
    }
    return Promise.reject(error);
  }
);

export default authApi;