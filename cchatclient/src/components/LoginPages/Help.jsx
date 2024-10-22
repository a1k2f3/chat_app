// Help.jsx
import React from "react";
import "./Help.css";

const Help = ({ onClose }) => {
  return (
    <div className="help-container">
      <div className="help-content">
        <p>
          Welcome to our help center! Here, you'll find answers to commonly
          asked questions, troubleshooting guides, and helpful tips to enhance
          your experience. Whether you're new to our platform or a seasoned
          user, our comprehensive resources cover everything from account setup
          to advanced features. Can't find what you're looking for? Feel free to
          reach out to our dedicated support team, available 24/7 to assist you
          with any inquiries or concerns. Your satisfaction is our top priority,
          and we're committed to providing you with the best possible support
          experience. Thank you for choosing [www.unity.com]!
        </p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Help;
