import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Page4.css";
import Dropd from "./Dropd4";
import businessimg from "../../images/businessimg.png";
import { Link } from "react-router-dom";

const Page4 = () => {
  return (
    <div className="Page4 container-fluid">
      <Dropd />
      <div className="image-container d-flex p-2">
        <img src={businessimg} alt="" />
      </div>
      <div className="content d-flex p-2">
        <h2>Welcome to Unity Chat</h2>
        <p>
          A simple, secure and reliable way for your communication to connect
          with other peoples.
        </p>
        <h6>
          We re committed to providing you with the best possible support
          experience
        </h6>
      </div>
      <div className="services d-flex p-2">
        <p>
          Tap Agree and Continue to accept the Unity{" "}
          <span>Terms of Services</span>.
          <br />
          <span className="margin">
            It is for your Better experience in Unity chat.
          </span>
        </p>
      </div>
      <div className="button">
        <Link to={"/Home"}>
          <button className="button1">Agree and Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default Page4;
