import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropd from "./Dropd";
import logo from "../../images/logo.jpg";
import "./Page1.css";
import axios from "axios";
const Page1 = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  // function to store the selected language
  const handleSubmit = async () => {
    // try {
    //   const response = await axios.post(
    //     "http://localhost:4500/users_details",
    //     {
    //       selectedLanguage,
    //     }
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error Storing Language", error);
    // }
  };

  return (
    <div className="Page1 container-fluid">
      <Dropd />
      <div className="i-container">
        <img src={logo} alt="" />
      </div>

      <div className="content">
        <h2>Add an account</h2>
        <p>
          Read our <span>Privacy Policy</span>. Tap "Agree and Continue" to
          accept the <span>Terms of Service</span>
        </p>
      </div>
      <div className="language-select">
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      <div className="button">
        <Link to={"/Page2"} onClick={handleSubmit}>
          <button className="button1">Agree and Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default Page1;
