import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserAuth } from "../general/constant";
import { useNavigate } from "react-router-dom";
import {
  showUpdateForm,
  hideUpdateForm,
  showUpdatePassword,
  hideUpdatePassword,
} from "./constant";
import "./profile.css";

export const Profile = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = useUserAuth();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn, navigate]);

  const [user, setUser] = useState({});
  const [updatedInfo, setUpdatedInfo] = useState({});
  const [updatedPassword, setUpdatedPassword] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const id = window.localStorage.getItem("passenger");
    axios
      .get(`http://localhost:3001/passenger/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleEditProfile = () => {
    if (!updatedInfo.name && !updatedInfo.username && !updatedInfo.email) {
      return;
    }
    hideUpdateForm();
    const id = window.localStorage.getItem("passenger");
    axios
      .put(`http://localhost:3001/passenger/${id}`, updatedInfo)
      .then((res) => {
        setUser(res.data.passenger);
        setUpdatedInfo({});
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdatePassword = () => {
    if (!updatedPassword.oldPassword || !updatedPassword.newPassword || !updatedPassword.confirmPassword) {
      return;
    }
    if(user.password !== updatedPassword.oldPassword) {
        setMessage("Old password is incorrect");
        return;
    }
    if (updatedPassword.newPassword !== updatedPassword.confirmPassword) {
      setMessage("New password and confirm password do not match");
      return;
    }
    hideUpdatePassword();
    const id = window.localStorage.getItem("passenger");
    axios
      .put(`http://localhost:3001/passenger/updatePassword/${id}`, updatedPassword)
      .then((res) => {
        setMessage(res.data.message);
        setUpdatedInfo({});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleMembershipRequest = () => {
    if (user.isPrime) {
      setMessage("You are already a prime member");
      return;
    }
    const id = window.localStorage.getItem("passenger");
    axios
      .get(`http://localhost:3001/membershipRequest/${id}`)
      .then((res) => {
        if(!res.data.success) {
            //put data in membership table
            axios
            .post(`http://localhost:3001/membershipRequest`, { user_id: id })
            .then((res) => {
            })
            .catch((err) => {
                console.error(err);
            })
        }
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  return (
    <main>
      <p style={{ color: "green", fontSize: "20px", textAlign: "center" }}>
        {message}
      </p>
      <div className="profile-container">
        <h1>User Profile</h1>
        <div className="profile">
          <label>Name:</label>
          <span>{user?.name}</span>
        </div>
        <div className="profile">
          <label>Username:</label>
          <span>{user?.username}</span>
        </div>
        <div className="profile">
          <label>Passport Number:</label>
          <span>{user?.passportNumber}</span>
        </div>
        <div className="profile">
          <label>Email:</label>
          <span>{user?.email}</span>
        </div>
        <div className="profile">
          <label>Prime Membership:</label>
            <span>{user?.isPrime ? "Yes" : "No"}</span>
        </div>
        <button onClick={showUpdateForm} className="btn btn-primary">
          Edit Profile
        </button>
        <button onClick={showUpdatePassword} className="btn btn-success">
          Update Password
        </button>
        <button onClick={handleMembershipRequest} className="btn btn-primary">
          Apply for Membership
        </button>
        <div id="update-form" className="profile-update-form">
          <label>Full Name:</label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            placeholder="Change full name..."
            value={updatedInfo?.name}
            onChange={(e) =>
              setUpdatedInfo({ ...updatedInfo, name: e.target.value })
            }
          />
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Change username..."
            value={updatedInfo?.username}
            onChange={(e) =>
              setUpdatedInfo({ ...updatedInfo, username: e.target.value })
            }
          />
          <label>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Change email address..."
            value={updatedInfo?.email}
            onChange={(e) =>
              setUpdatedInfo({ ...updatedInfo, email: e.target.value })
            }
          />
          <button type="submit" onClick={handleEditProfile}>
            Save Changes
          </button>
          <button type="button" onClick={hideUpdateForm}>
            Cancel
          </button>
        </div>
        <div
          id="update-password"
          className="profile-update-form password-update-form"
        >
          <label>Old Password:</label>
          <input
            type="password"
            id="old-password"
            name="old-password"
            placeholder="Enter old password..."
            value={updatedPassword?.oldPassword}
            onChange={(e) =>
              setUpdatedPassword({ ...updatedPassword, oldPassword: e.target.value })
            }
          />
          <label>New Password:</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            placeholder="Enter new password..."
            value={updatedPassword?.newPassword}
            onChange={(e) =>
              setUpdatedPassword({ ...updatedPassword, newPassword: e.target.value })
            }
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm new password..."
            value={updatedPassword?.confirmPassword}
            onChange={(e) =>
              setUpdatedPassword({ ...updatedPassword, confirmPassword: e.target.value })
            }
          />
          <button type="submit" onClick={handleUpdatePassword}>Save Changes</button>
          <button type="button" onClick={hideUpdatePassword}>
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};
