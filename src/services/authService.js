import authApi from '../api/authApi';
import { userAdapter } from '../adapters/authAdapter';

export const login = async (credentials) => {
  const { data } = await authApi.post('/login', credentials);
  return userAdapter(data);
};