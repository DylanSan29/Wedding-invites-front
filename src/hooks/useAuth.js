import { useState } from 'react';
import { login as loginService, logout as logoutService } from '../services/authService';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const data = await loginService(credentials);
      localStorage.setItem('token', data.token); // Guardar para managementApi
      setUser(data.user);
      return data;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    logoutService();
    setUser(null);
    localStorage.removeItem('token');
  };

  return { user, login, logout, loading, isAuthenticated: !!user };
};