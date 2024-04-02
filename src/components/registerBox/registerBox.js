import React from 'react';
import "../registerBox/registerBox.scss";
import { Link } from 'react-router-dom';
import AuthContext from "../../contexts/authContext";
import { Navigate } from 'react-router-dom';

const RegisterBox = () => {
    const { register, redirectTo, setRedirectTo } = React.useContext(AuthContext);
    const [errorMessage, setErrorMessage] = React.useState(null);

    if (redirectTo) {
        setRedirectTo(null);
        return <Navigate to={redirectTo} />;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fname = event.target.elements.fname.value;
        const lname = event.target.elements.lname.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const confirmPassword = event.target.elements.confirmPassword.value;
        // TODO: change hard-coded 'USER' here to default db value
        const role = "USER";

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        try {
            console.log(`USER DATA while trying to register: 
            First Name: ${fname}
            Last Name: ${lname}
            Email: ${email}
            Password: ${password}
            Role: ${role}`);

            await register(fname, lname, email, password, role);
        } catch (error) {
            console.error('Error registering:', error);
            setErrorMessage("Error registering. Please, try again later.");
        }
    };

    return (
        <div className='registerPage'>
            <div className='registerFormBox'>
                <h1 className='registerFormBoxTitle'>Registration</h1>
                <form className='registerForm' onSubmit={handleSubmit}>
                    <input type='text' name='fname' placeholder='Enter your first name' required />
                    <input type='text' name='lname' placeholder='Enter your last name' required />
                    <input type='email' name='email' placeholder='Enter your email' required />
                    <input type='password' name='password' placeholder='Imagine your new password' required />
                    <input type='password' name='confirmPassword' placeholder='Repeat your new password' required />
                    <button type="submit" className="registerButton">Register</button>
                </form>
                {errorMessage && <p className='registerErrorMessage'>{errorMessage}</p>}
                <p>Already have an account? <Link to="/login"> <b className='signInText'>Sign in</b> </Link></p>
            </div>
        </div>
    )
}

export default RegisterBox;
