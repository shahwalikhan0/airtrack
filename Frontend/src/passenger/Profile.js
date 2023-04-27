import React from "react";
import "./profile.css";

export const Profile = () => {
    const isLogged = localStorage.getItem("isLogged");

  if(isLogged === 'false' || isLogged === null){
    window.location.href = "/";
  }

    const showUpdateForm = (event) => {
        hideUpdatePassword(event);
        event.preventDefault();
        document.getElementById("update-form").style.display = "flex";
    }
    const hideUpdateForm = (event) => {
        event.preventDefault();
        document.getElementById("update-form").style.display = "none";
    }
    const showUpdatePassword = (event) => {
        hideUpdateForm(event);
        event.preventDefault();
        document.getElementById("update-password").style.display = "flex";
    }
    const hideUpdatePassword = (event) => {
        event.preventDefault();
        document.getElementById("update-password").style.display = "none";
    }
    const applyMembership = (event) => {
        event.preventDefault();
        alert("You have successfully applied for membership. Please wait for the approval.");
    }

  return (
    <main>
        <div className="profile-container">
            <h1>User Profile</h1>
            <div className="profile">
                <label>Full Name:</label>
                <span>Shah Wali Khan</span>
            </div>
            <div className="profile">
                <label>Username:</label>
                <span>shahwalikhan0</span>
            </div>
            <div className="profile">
                <label>Passport Number:</label>
                <span>123456789</span>
            </div>
            <div className="profile">
                <label>Email:</label>
                <span>shah.wali@airtrack.com</span>
            </div>
            <button onClick={showUpdateForm} className='btn btn-success'>Edit Profile</button>
            <button onClick={showUpdatePassword} className='btn btn-success'>Update Password</button>
            <button onClick={applyMembership} className='btn btn-primary'>Apply for Membership</button>
            <form id="update-form" className="profile-update-form">
                <label>Full Name:</label>
                <input type="text" id="full-name" name="full-name" placeholder="Change full name..."/>
                <label>Username:</label>
                <input type="text" id="username" name="username" placeholder="Change username..."/>
                <label>Email:</label>
                <input type="text" id="email" name="email" placeholder="Change email address..."/>
                <button type="submit">Save Changes</button>
                <button type="button" onClick={hideUpdateForm}>Cancel</button>
            </form>
            <form id="update-password" className="profile-update-form password-update-form">
                <label>Old Password:</label>
                <input type="password" id="old-password" name="old-password" placeholder="Enter old password..."/>
                <label>New Password:</label>
                <input type="password" id="new-password" name="new-password" placeholder="Enter new password..."/>
                <label>Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm new password..."/>
                <button type="submit">Save Changes</button>
                <button type="button" onClick={hideUpdatePassword}>Cancel</button>
            </form>
    </div>
    </main>
  );
}