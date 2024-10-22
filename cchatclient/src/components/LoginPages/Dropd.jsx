// Dropd.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import "./Dropd.css";
import Help from "./Help"; // Import the Help component
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Dropd = () => {
  const [showHelp, setShowHelp] = useState(false);
  const navigate = useNavigate();
  const handleHelpClick = () => {
    setShowHelp(true);
  };

  const handleCloseHelp = () => {
    setShowHelp(false);
  };

  const handleLogoutClick = () => {
    alert("you are sure");
    console.log("Logout Clicked!");
    console.log(showHelp);
    navigate("/");
  };
  return (
    <div className="dropdown-container">
      <div className="backicon">
        {/* <i className="fas fa-arrow-left"></i> */}

        <button onClick={handleLogoutClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
          goback
        </button>
      </div>
      <Dropdown className="dropdown-custom">
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic"
          className="dropdown-toggle-custom"
        >
          &#8230;
        </Dropdown.Toggle>

        <Dropdown.Menu className="menu_items">
          <Dropdown.Item href="#/action-1" onClick={handleHelpClick}>
            Help
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {showHelp && <Help onClose={handleCloseHelp} />}
    </div>
  );
};

export default Dropd;
