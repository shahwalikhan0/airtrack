import React, { useState } from 'react'
import './login.css'


export const Login = ({ user, lastName }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('isLogged', true);
        window.location.href = "/about";
    }
    return (
        <>
            <main>
                <div className="form-box">
                    <div className="button-box">
                        <h4>Welcome Back</h4>
                    </div>
                    <form id="login" className="input-grp" action="index.html">
                        <input type="text" className="input-field" placeholder="User name" required/>
                        <input type="text" className="input-field" placeholder="Enter Password" required/>
                        <button type="submit" className="submit-btn"onClick={handleLogin}>Log In</button>
                    </form>
                </div>
            </main>
        </>
        )
}


