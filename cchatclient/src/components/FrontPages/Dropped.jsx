import React, { useState } from "react";
import { Dropdown, Offcanvas } from "react-bootstrap";
import "./Droped.css";
import { useNavigate } from "react-router-dom";

const Dropd = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const handleHelpClick = () => {
    setShowOffcanvas(true);
    navigate("/Page2");
  };

  const handleprofile = () => {
    setShowOffcanvas(true);
    navigate("");
  };

  const handleLogoutClick = () => {
    console.log("Logout Clicked!");
    navigate("/");
  };

  return (
    <div className="dropdown-container">
      <Dropdown className="dropdown-custom">
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic"
          className="dropdown-toggle-custom"
        >
          &#8230;
        </Dropdown.Toggle>

        <Dropdown.Menu className="menu_items">
          <Dropdown.Item onClick={handleHelpClick}>
            Add New Account
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogoutClick}>Logout</Dropdown.Item>
          <Dropdown.Item onClick={handleprofile}>Profile</Dropdown.Item>
          <Dropdown.Item>
            <a
              className="anchor-button btn"
              href="#"
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            >
              New Group
            </a>
          </Dropdown.Item>
          <Dropdown.Item>Delete Account</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3
              style={{
                color: "#9f60ff",
                margin: "10px 0 20px 20px",
                fontSize: "24px",
              }}
            >
              {" "}
              Create New Group{" "}
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="text"
              className="form-control name-input"
              placeholder="Group Name"
              aria-label="Group Name"
              aria-describedby="addon-wrapping"
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Dropd;
