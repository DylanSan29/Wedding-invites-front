import axios from 'axios';
import { API_URLS } from '../Config';

const managementApi = axios.create({
  baseURL: API_URLS.MANAGEMENT,
});

managementApi.interceptors.request.use((config) => {
  // Obtenemos el token directamente del almacenamiento o del estado
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Si el microservicio de Auth invalida el token (401), limpiamos todo
managementApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login'; // O disparar el action de logOut de Redux
    }
    return Promise.reject(error);
  }
);

export default managementApi;