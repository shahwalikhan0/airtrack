import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppContext from "../AppContext";
import "./login.css";

export const Login = () => {
  const { setIsAdmin } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const credentials = {
      username: username,
      password: password,
      admin: admin,
    };

    axios
      .post(`http://localhost:3001/login`, credentials)
      .then((res) => {
        window.localStorage.setItem("passenger", res.data?.passenger._id);
        window.localStorage.setItem("user", username);
        window.localStorage.setItem("login", true);
        window.localStorage.setItem("isAdmin", admin);
        setIsAdmin(admin);
        if (admin) navigate("/admin/home");
        else navigate("/user/home");
      })
      .catch((err) => {
        console.log(err);
        setMessage(
          err?.response?.data?.message || "Error logging in. Please try again."
        );
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  return (
    <>
      <main>
        <div className="form-box">
          <div className="login-title">
            <h4>Welcome Back</h4>
          </div>
          <div className="login-message">{message}</div>
          <form id="login" className="input-grp">
            <input
              type="text"
              className="input-field"
              placeholder="User name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label style={{ display: "flex" }}>
              <input
                type="checkbox"
                style={{ marginRight: "10px" }}
                value={admin}
                onChange={(e) => setAdmin(e.target.checked)}
              />
              Admin
            </label>
            <button type="submit" className="submit-btn" onClick={handleLogin}>
              Log In
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
