import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './login.css'


export const Login = ({ user, lastName }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/admin')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    , [])
    const handleLogin = (event) => {
        event.preventDefault();
        const credentials = {
            username: username,
            password: password
        };

        // Send the credentials to the backend
        axios.post('http://localhost:3001/admin', credentials)
            .then(res => {
                // Handle response, e.g., redirect to another page if login successful
                localStorage.setItem('isLogged', true);
                window.location.href = "/about";
            })
            .catch(err => {
                // Handle error, e.g., display error message to the user
                console.log(err);
            });
    }
    return (
        <>
            <main>
                <div className="form-box">
                    <div className="button-box">
                        <h4>Welcome Back</h4>
                    </div>
                    <form id="login" className="input-grp" action="index.html">
                        <input type="text" className="input-field" placeholder="User name" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <input type="text" className="input-field" placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit" className="submit-btn"onClick={handleLogin}>Log In</button>
                    </form>
                </div>
            </main>
        </>
        )
}


