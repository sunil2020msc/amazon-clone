import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            navigate("/")

        } catch (error) {
            console.error("error...", error);

            alert(error.message)
        }
    }
    const register = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            navigate("/")

        } catch (error) {
            console.error("error...", error);

            alert(error.message)
        }
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login_logo' src="./amazon_logo2.png" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button
                        onClick={signIn}
                        className='login_signIn_button'
                    >
                        Sign-in
                    </button>
                </form>

                <p>By continuing, you agree to Amazon clone's Conditions of Use and Privacy Notice.</p>
            </div>

            <div className="login_container2">

                <button
                    onClick={register}
                    className='login_register_button'
                >
                    Create your Amazon account
                </button>
            </div>

        </div>
    )
}

export default Login