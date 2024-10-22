import React, { useState } from "react";
import "./ConfirmPass.css";
import { Link } from "react-router-dom"; // Import useHistory hook
import Page1 from "./Page1";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, useNavigate } from "react-router-dom";
const ConfirmPass = () => {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNewPasswordChange = (event) => {
    const inputValue = event.target.value;
    setNewPassword(inputValue);
    setNewPasswordError(inputValue.length < 8);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const inputValue = event.target.value;
    setConfirmPassword(inputValue);
    setConfirmPasswordError(inputValue.length < 8);
  };
  const handleButtonClick = () => {
    if (newPassword.length < 8 || confirmPassword.length < 8) {
      setNewPasswordError(true);
      setConfirmPasswordError(true);
      console.log("Please enter passwords with at least 8 characters");
    } else if (!newPassword || !confirmPassword) {
      console.log("Please provide both passwords before submitting");
    } else if (newPassword !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      console.log("Form submitted!");
      navigate("/");
    }
  };

  return (
    <div className="Pass-container container-fluid">
      <div className="second-container">
        <div className="heading">
          <h2>Change your password</h2>
        </div>
        <div className="password">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="Enter the New Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className={newPasswordError ? "invalid" : ""}
          />
          <br />
          {newPasswordError && (
            <span
              className="error-msg toggle-password"
              onClick={toggleNewPasswordVisibility}
            >
              Please enter password with at least 8 characters
              {showNewPassword ? "🙈" : "👁️"}
            </span>
          )}

          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Enter the Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={confirmPasswordError ? "invalid" : ""}
          />
          <br />
          {confirmPasswordError && (
            <span
              className="error-msg toggle-password"
              onClick={toggleConfirmPasswordVisibility}
            >
              Please enter password with at least 8 characters
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          )}
        </div>
        <div className="button">
          <button className="b1" onClick={handleButtonClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPass;
