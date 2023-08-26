import img from "../images/login.svg";
import logo from "../images/vep-logo.svg";
import "../styles/login.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  // Think of a way to keep record of the password hidden or visible
  // Also, I'm unable to show any output help me please.
  <div className="app-container-login">
    <div className="img-container-login">
      <span className="left-text">Hey!</span>
      <br />
      <span className="left-text-2">Welcome back.</span>
      <br />
      <img src={img} alt="Login Icon" className="login-icon" />
    </div>
    <div className="line-login"></div>
    <div className="seven">
      <div className="right-container-login">
        <div>
          <img src={logo} alt="Logo" className="nine" />
          <span className="login-text">Login to your account.</span>
          <br />
          <br />
          <span className="Enter-details">
            Enter your registered email ID and password.
          </span>
          <br />
        </div>

        <div className="input-container-login">
          <div className="email-container-login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#787878"
              className="icon icon-size"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <input
              type="text"
              placeholder="Enter email ID"
              className="email-input"
              required
            />
          </div>
          <div className="password-container-login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#787878"
              className="icon-size icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <input
              type={hidepass ? "password" : "text"}
              placeholder="Set Password"
              className="password-input"
              required
            />
            <div onClick={() => setHidePass(!hidepass)}>
              {hidepass ? (
                <span>Password Hidden</span> // I guess you can use an image here
              ) : (
                <span>Password Visible</span> // And also here
              )}
            </div>
          </div>
          {/* Something related to react router  */}
          <div to="/dashboard">
            <input type="submit" value="Login" className="login-button" />
          </div>
          <br />
          <div className="sign-up-container">
            {/* Something related to react router */}
            <div to="/signup" className="sign-up-link">
              <span>Don't have account? </span>
              <span className="sign-up-text-2">Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
