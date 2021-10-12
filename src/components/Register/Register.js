import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register:Create an Account</h2>
                <form onSubmit="">
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                    <br />
                    <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                    <br />
                    <input type="password" name="password" id="password" placeholder='Re-enter Your Password' />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                <div>--------------------or-------------------------------</div>
                <button className='btn-regular'>Google Sign in</button>
            </div>

        </div>
    );
};

export default Register;