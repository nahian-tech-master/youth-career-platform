import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Check authentication status on app load
  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = localStorage.getItem('token');
      
      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        // Verify token and fetch user data from backend
        const response = await axios.get(`${API_BASE_URL}/auth/verify`, {
          headers: {
            'Authorization': `Bearer ${storedToken}`
          }
        });

        setUser(response.data);
        setToken(storedToken);
      } catch (error) {
        console.error('Token verification failed:', error);
        // Token is invalid, clear it
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
      
      // Store JWT token in localStorage
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      setUser(response.data.user);
      
      return { success: true, user: response.data.user };
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Login failed';
      return { success: false, error: errorMessage };
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
      
      // Store JWT token in localStorage
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      setUser(response.data.user);
      
      return { success: true, user: response.data.user };
    } catch (error) {
      console.error('Registration error:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Registration failed';
      return { success: false, error: errorMessage };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  // Update user data
  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;