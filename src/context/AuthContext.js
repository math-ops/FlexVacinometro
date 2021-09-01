import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [data, setData] = useState(() => {

    const token = localStorage.getItem('@vacinometro');
    const User = localStorage.getItem('@user');

    if (token && User) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { token, User: JSON.parse(User) };
    }

    return {};
  });

  const [authenticated, setAuthenticated] = useState(() => {

    const token = localStorage.getItem('@vacinometro');
    const User = localStorage.getItem('@user');

    if (token && User) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return true;
    }

    return false;

  });

  const handleLogin = useCallback(async ({ login, password }) => {

    try {
      const response = await api.post("login", {
        userText: login,
        passwordText: password
      })

      const { token, User } = response.data;

      localStorage.setItem('@vacinometro', token);
      localStorage.setItem('@user', JSON.stringify(User));
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setAuthenticated(true);
      setData({ token, User });

    } catch (error) {
      throw new Error('error na autenticação.')
    }

  }, []);


  const handleLogout = useCallback(() => {

    setAuthenticated(false);

    localStorage.removeItem('@vacinometro');
    localStorage.removeItem('@user');

  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin, handleLogout, data }}>
      {children}
    </AuthContext.Provider>
  );

}
