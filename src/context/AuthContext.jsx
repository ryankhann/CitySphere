import React, { createContext, useState, useContext, useEffect } from 'react';
import { API_URL } from '../api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Load user on mount and when token changes
    useEffect(() => {
        const loadUser = async () => {
            if (token) {
                try {
                    const response = await fetch(`${API_URL}/me`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        setUser(data.user);
                    } else {
                        // Token is invalid or expired
                        logout();
                    }
                } catch (error) {
                    console.error('Failed to load user:', error);
                    logout();
                }
            }
            setLoading(false);
        };

        loadUser();
    }, [token]);

const login = (userData, token) => {
    localStorage.setItem('token', token);
    setToken(token);
    setUser(userData); // ✅ this is the key
};

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rememberMe');
    setToken(null);
    setUser(null);
};


    const updateUser = (updatedUser) => {
        setUser(updatedUser);
    };

    const value = {
        user,
        loading,
        login,
        logout,
        updateUser,
        token
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};