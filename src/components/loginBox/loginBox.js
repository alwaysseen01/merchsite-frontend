import { useContext, useState } from "react";
import "../loginBox/loginBox.scss"
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

const LoginBox = () => {
    const { login, redirectTo, setRedirectTo } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);

    if (redirectTo) {
        setRedirectTo(null);
        return <Navigate to={redirectTo} replace />;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        try {
            await login(email, password);
        } catch(error) {
            console.error('Error parsing JSON:', error);
            setErrorMessage('Error logging in. Please check your credentials and try again.');
        }
    };

    return (
        <div className='loginPage'>
            <div className='loginFormBox'>
                <h1 className='loginFormBoxTitle'>Log in</h1>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <input name='email' type='text' placeholder='Enter your email' required />
                    <input name='password' type='password' placeholder='Enter your password' required />
                    <button type="submit" className="loginButton">Log in</button>
                </form>
                {errorMessage && <p className='loginErrorMessage'>{errorMessage}</p>}
                <p>Don't have an account? <Link to="/register"> <b className='registerText'>Register</b> </Link></p>
            </div>
        </div>
    )
};

export default LoginBox;
