import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const login = async (username: string, password: string) => {
    const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
    const { token } = response.data;
    setToken(token);
    localStorage.setItem('token', token);
  };

  const register = async (username: string, email: string, password: string) => {
    const response = await axios.post('http://localhost:3000/api/auth/register', { username, email, password });
    const { token } = response.data;
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const isAdmin = token ? JSON.parse(atob(token.split('.')[1])).role === 'admin' : false;

  return (
    <AuthContext.Provider value={{ token, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};