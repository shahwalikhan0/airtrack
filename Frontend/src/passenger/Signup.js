import React, { useState } from "react";
import axios from "axios";
import "./signup.css";

export function Signup() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [passport, setPassport] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const isLogged = localStorage.getItem("login");

  if (isLogged) {
    alert("You are already logged in");
    window.location.href = "/user/home";
  }
  const handleSignup = (event) => {
    event.preventDefault();
    if (
      password !== rePassword ||
      password === "" ||
      rePassword === "" ||
      password.length < 8
    ) {
      setMessage(
        "Passwords do not match or password is less than 8 characters"
      );
      return;
    }
    if (passport.length !== 10) {
      setMessage("Passport number should be 10 digits");
      return;
    }

    const credentials = {
      name: name,
      email: email,
      username: username,
      passport: passport,
      password: password,
    };

    axios
      .post(`http://localhost:3001/signup`, credentials)
      .then((res) => {
        alert("Signup successful. Please login to continue");
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        setMessage(
          err?.response?.data?.message || "Error signing up. Please try again."
        );
      });
  };

  return (
    <>
      <main>
        <div className="form-box signup">
          <div className="button-box">
            <h4>Create New Account</h4>
          </div>
          <div className="login-message">{message}</div>
          <form id="login" className="input-grp" action="index.html">
            <input
              type="text"
              className="input-field"
              placeholder="Enter name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="input-field"
              placeholder="Enter username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              className="input-field"
              placeholder="Enter 10 digit passport number"
              required
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
            <input
              type="email"
              className="input-field"
              placeholder="Emter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Re-enter Password"
              required
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <button type="submit" className="submit-btn" onClick={handleSignup}>
              Sign Up
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
