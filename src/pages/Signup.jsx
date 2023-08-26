import React from "react";
import logo from "../images/vep-logo.svg";
import credential from "../images/signup-cred.svg";
import { Link } from "react-router-dom";
import "../styles/signup.css";

  // Whoopsy an error here. Help me figure it out :)
export const  Signup() => {
  // Lemme help you, do the same you did in Login.jsx
  return (
    <div>
      <div className="app-container-signup">
        <div className="img-container-signup">
          <span className="left-text-signup">Let's</span>
          <br />
          <span className="left-text-signup-2">Secure your login process</span>
          <br />
          <img
            src={credential}
            alt="Login Icon"
            className="credential-login-icon"
          />
        </div>
        <div className="sign-up-block"></div>
        <div className="sign-up-block-2">
          <div className="responsive-sign-up-block">
            <div>
              <img src={logo} alt="Logo" className="sign-up-logo" />
              <span className="sign-up-text">Sign Up to Vep</span>
              <br />
              <br />
              <span className="register-text">
                Enter your email address to register for your account
              </span>
              <br />
            </div>
            <div className="register-container">
              <div className="enter-email-container">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sign-up-logo-size"
                >
                  <path
                    d="M13.5 0C14.163 0 14.7989 0.263392 15.2678 0.732233C15.7366 1.20107 16 1.83696 16 2.5V10.5C16 11.163 15.7366 11.7989 15.2678 12.2678C14.7989 12.7366 14.163 13 13.5 13H2.5C1.83696 13 1.20107 12.7366 0.732233 12.2678C0.263392 11.7989 0 11.163 0 10.5V2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0H13.5ZM15 3.961L8.254 7.931C8.19022 7.96845 8.11893 7.99128 8.04527 7.99785C7.9716 8.00442 7.8974 7.99457 7.828 7.969L7.746 7.931L1 3.963V10.5C1 10.8978 1.15804 11.2794 1.43934 11.5607C1.72064 11.842 2.10218 12 2.5 12H13.5C13.8978 12 14.2794 11.842 14.5607 11.5607C14.842 11.2794 15 10.8978 15 10.5V3.961ZM13.5 1H2.5C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V2.802L8 6.92L15 2.8V2.5C15 2.10218 14.842 1.72064 14.5607 1.43934C14.2794 1.15804 13.8978 1 13.5 1Z"
                    fill="#787878"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="Enter email ID"
                  className="email-input"
                />
              </div>
              <div className="set-password">
                <svg
                  width="12"
                  height="15"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sign-up-logo-size"
                >
                  <path
                    d="M6 0C6.79565 0 7.55871 0.316071 8.12132 0.87868C8.68393 1.44129 9 2.20435 9 3V4H10C10.5304 4 11.0391 4.21071 11.4142 4.58579C11.7893 4.96086 12 5.46957 12 6V13C12 13.5304 11.7893 14.0391 11.4142 14.4142C11.0391 14.7893 10.5304 15 10 15H2C1.46957 15 0.960859 14.7893 0.585786 14.4142C0.210714 14.0391 0 13.5304 0 13V6C0 5.46957 0.210714 4.96086 0.585786 4.58579C0.960859 4.21071 1.46957 4 2 4H3V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0ZM10 5H2C1.73478 5 1.48043 5.10536 1.29289 5.29289C1.10536 5.48043 1 5.73478 1 6V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H10C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5ZM6 8.5C6.26522 8.5 6.51957 8.60536 6.70711 8.79289C6.89464 8.98043 7 9.23478 7 9.5C7 9.76522 6.89464 10.0196 6.70711 10.2071C6.51957 10.3946 6.26522 10.5 6 10.5C5.73478 10.5 5.48043 10.3946 5.29289 10.2071C5.10536 10.0196 5 9.76522 5 9.5C5 9.23478 5.10536 8.98043 5.29289 8.79289C5.48043 8.60536 5.73478 8.5 6 8.5ZM6 1C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3V4H8V3C8 2.46957 7.78929 1.96086 7.41421 1.58579C7.03914 1.21071 6.53043 1 6 1Z"
                    fill="#787878"
                  />
                </svg>
                <input
                  type={hidepass ? "password" : "text"}
                  placeholder="Set Password"
                  className="password-input"
                />
                <div onClick={() => setHidePass(!hidepass)}>
                  {hidepass ? (
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
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div className="set-password-confirm">
                <svg
                  width="12"
                  height="15"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sign-up-logo-size"
                >
                  <path
                    d="M6 0C6.79565 0 7.55871 0.316071 8.12132 0.87868C8.68393 1.44129 9 2.20435 9 3V4H10C10.5304 4 11.0391 4.21071 11.4142 4.58579C11.7893 4.96086 12 5.46957 12 6V13C12 13.5304 11.7893 14.0391 11.4142 14.4142C11.0391 14.7893 10.5304 15 10 15H2C1.46957 15 0.960859 14.7893 0.585786 14.4142C0.210714 14.0391 0 13.5304 0 13V6C0 5.46957 0.210714 4.96086 0.585786 4.58579C0.960859 4.21071 1.46957 4 2 4H3V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0ZM10 5H2C1.73478 5 1.48043 5.10536 1.29289 5.29289C1.10536 5.48043 1 5.73478 1 6V13C1 13.2652 1.10536 13.5196 1.29289 13.7071C1.48043 13.8946 1.73478 14 2 14H10C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5ZM6 8.5C6.26522 8.5 6.51957 8.60536 6.70711 8.79289C6.89464 8.98043 7 9.23478 7 9.5C7 9.76522 6.89464 10.0196 6.70711 10.2071C6.51957 10.3946 6.26522 10.5 6 10.5C5.73478 10.5 5.48043 10.3946 5.29289 10.2071C5.10536 10.0196 5 9.76522 5 9.5C5 9.23478 5.10536 8.98043 5.29289 8.79289C5.48043 8.60536 5.73478 8.5 6 8.5ZM6 1C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3V4H8V3C8 2.46957 7.78929 1.96086 7.41421 1.58579C7.03914 1.21071 6.53043 1 6 1Z"
                    fill="#787878"
                  />
                </svg>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="confirm-password-input"
                />
                <div onClick={() => setHidePass(!hideconf)}>
                  {hidepass ? (
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
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <Link to="/success" className="next-button-sign-up">
                <span className="next-button-text-sign-up">Next</span>
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="next-arrow"
                >
                  <path
                    d="M11.118 16.5694C10.9435 16.7275 10.7141 16.8109 10.4789 16.8017C10.2436 16.7926 10.0213 16.6916 9.85966 16.5205C9.69798 16.3494 9.60977 16.1218 9.61395 15.8864C9.61813 15.651 9.71436 15.4267 9.88202 15.2614L16.1688 9.31543H0.900017C0.661322 9.31543 0.432404 9.22061 0.26362 9.05183C0.0948372 8.88304 1.71661e-05 8.65413 1.71661e-05 8.41543C1.71661e-05 8.17674 0.0948372 7.94782 0.26362 7.77904C0.432404 7.61025 0.661322 7.51543 0.900017 7.51543H16.1712L9.88202 1.56703C9.79324 1.48661 9.7214 1.38928 9.67073 1.28074C9.62005 1.1722 9.59155 1.05464 9.5869 0.934944C9.58225 0.815247 9.60154 0.695827 9.64364 0.583683C9.68574 0.471538 9.74981 0.368927 9.83208 0.281862C9.91435 0.194798 10.0132 0.125033 10.1228 0.0766576C10.2323 0.0282817 10.3505 0.00226824 10.4702 0.000141828C10.59 -0.00198459 10.709 0.0198188 10.8202 0.0642742C10.9315 0.10873 11.0327 0.174943 11.118 0.259032L18.8196 7.54303C19.0112 7.72356 19.1378 7.96234 19.1796 8.22223C19.2079 8.3524 19.2071 8.48722 19.1772 8.61703C19.134 8.87319 19.0085 9.10827 18.8196 9.28663L11.118 16.5706V16.5694Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// How will react know if something is here or not?