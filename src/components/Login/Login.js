import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './login.css'

const Login = () => {
    const { user, signInWithGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'
    console.log('came from', location.state?.from)
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                    <br />
                    <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>New to ema john? <Link to='/register'>Create Account</Link></p>
                <div>--------------------or-------------------------------</div>
                <button onClick={handleGoogleLogin} className='btn-regular'>Google Sign in</button>
            </div>

        </div>
    );
};

export default Login;