import React from 'react';
import AuthContext from './authContext';

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('accessToken'));
    const [redirectTo, setRedirectTo] = React.useState(null);
    const [isRefreshing, setIsRefreshing] = React.useState(false);

    async function login(email, password) {
        const response = await fetch('http://159.89.21.118:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
    
        if (!response.ok) {
            throw new Error('Error logging in. Please check your credentials and try again.');
        }
    
        const data = await response.json();
        const { accessToken, refreshToken } = data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('currentUserEmail', email);
        setIsAuthenticated(true);
        setRedirectTo('/cart');
    }
    
    async function register(firstName, lastName, email, password) {
        const response = await fetch('http://159.89.21.118:8080/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, password }),
        });
    
        if (!response.ok) {
            throw new Error('Error registering. Please try again.');
        }
    
        console.log('Successfully registered!');
        await login(email, password);
    }
    
    async function refreshToken() {
        console.log("REFRESHING");
        setIsRefreshing(true);
    
        const response = await fetch('http://159.89.21.118:8080/auth/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken: localStorage.getItem('refreshToken')})
        });

        if (response.ok) {
            const data = await response.json();
            console.log("DATA: " + JSON.stringify(data, null, 2))
            const { accessToken, refreshToken } = data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);    
            setIsAuthenticated(true);
            setIsRefreshing(false);
            setRedirectTo('/t-shirts');
        } else {
            setIsAuthenticated(false);
            setIsRefreshing(false);
        }
    
        if (isAuthenticated) {
            console.log("SUCCESSFULLY AUTHENTICATED");  
        }
    }    

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, register, redirectTo, setRedirectTo, refreshToken, isRefreshing }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
