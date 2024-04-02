import React from 'react';
import AuthContext from './authContext';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('accessToken'));
    const [redirectTo, setRedirectTo] = React.useState(null);
    const [isRefreshing, setIsRefreshing] = React.useState(false);
    const navigate = useNavigate();

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
        const { accessToken, refreshToken, user } = data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('userData', JSON.stringify(user));
        setIsAuthenticated(true);
        setRedirectTo('/cart');
    }
    
    async function register(fname, lname, email, password, role) {
        const response = await fetch('http://159.89.21.118:8080/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fname, lname, email, password, role }),
        });
    
        if (!response.ok) {
            throw new Error('Error registering. Please try again.');
        }
    
        console.log('Successfully registered!');
        let user_data = {fname, lname, email, role}
        localStorage.setItem('userData', JSON.stringify(user_data));
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

        const lastPath = navigate.pathname;

        if (response.ok) {
            const data = await response.json();
            console.log("NEW RECIEVED TOKENS: " + JSON.stringify(data, null, 2))
            const { accessToken, refreshToken } = data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);    
            setIsAuthenticated(true);
            setIsRefreshing(false);
            setRedirectTo(lastPath);
        } else {
            setIsAuthenticated(false);
            setIsRefreshing(false);
        }
    
        if (isAuthenticated) {
            console.log("SUCCESSFULLY AUTHENTICATED");  
        }
    }  
    
    async function checkToken(token, tokenType) {
        if (!token) {
            console.log(`Error while trying to get ${tokenType} token. Calling for REFRESH.`);
            await refreshToken();
        }

        const response = await fetch(`http://159.89.21.118:8080/auth/validateToken?token=${token}&tokenType=${tokenType}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    
        if (!response.ok) {
            console.log(`${tokenType} token is not valid (time-out or damaged). Calling for REFRESH.`);
            await refreshToken();
        }

        return true;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, register, redirectTo, setRedirectTo, refreshToken, isRefreshing, checkToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
