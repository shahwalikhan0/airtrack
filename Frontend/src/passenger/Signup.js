import React, {useContext} from "react";
import "./signup.css";

export function Signup() {
    const isLogged = localStorage.getItem('isLogged');
    if(isLogged) {
        alert("You are already logged in");
       window.location.href = "/home";
    }
    const handleSignup = (event) => {
        event.preventDefault();
        localStorage.setItem('isAdmin', true);
        window.location.href = "/admin/home";
    }

    return (
        <>
        <main>
            <div className="form-box signup">
            <div className="button-box">
                <h4>Create New Account</h4>
            </div>
            <form id="login" className="input-grp" action="index.html">
                <input type="text" className="input-field" placeholder="Enter username" required />
                <input type="text" className="input-field" placeholder="Enter 5 digit account number" required />
                <input type="text" className="input-field" placeholder="Enter Password" required />
                <input type="text" className="input-field" placeholder="Re-enter Password" required />
                <button type="submit" className="submit-btn" onClick={handleSignup}>Sign Up</button>
            </form>
            </div>
        </main>
    </>
    );
}