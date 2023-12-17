import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context';
import { login as _login, logout as _logout } from '../../services/auth';

export default function AuthProvider({ children }) {
  const initialUser = useLoaderData()
  const [user, setUser] = useState(initialUser);
  const [loginError, setLoginError] = useState(null);

  const login = async (userData) => {
    try {
      const newUser = await _login(userData);
      setUser(newUser);
    } catch (e) {
      setLoginError(e.message)
    }
  }

  const logout = () => {
    _logout();
    navigation('/');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        loginError,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  )
}
