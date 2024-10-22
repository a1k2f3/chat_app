import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.jpg";
import Dropd from "./Dropd";
import ConfirmPass from "./ConfirmPass";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showConfirmPage, setShowConfirmPage] = useState(false);
const navigate=useNavigate();
  const handleChange = (event) => {
    setName(event.target.value);
  };


  const handlePasswordChange = (event) => {
    let inputValue = event.target.value;
    if (inputValue.length > 8) {
      inputValue = inputValue.substring(0, 8);
    }
    setPassword(inputValue);
  };

  const confirm = () => {
    setShowConfirmPage(true);
  };

  const handleSubmit = async (e) => {
    console.log(name, password );
    e.preventDefault();
    if (!name || !password) {
      alert("Please enter username and password");
    } else {
      try {
        const res = await axios.post("http://localhost:4500/user_s", {
          user_name: name,
          user_password: password     
        });
        console.log(res);
        navigate('/Home');
      } catch (error) {
        console.error("Error storing name and password", error);
        // setError("user_name alkready exsit.");
      }
      // alert(error);
    }
  };
  return (
    <div className="login-container container-fluid">
      <Dropd />
      <div className="image-container">
        <img src={logo} alt="" />
      </div>

      <div className="logic">{showConfirmPage && <ConfirmPass />}</div>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputfields">
        <div className="username">
          <input
            type="text"
            placeholder="USER NAME"
            id="nam"
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="CHOOSE PASSWORD"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className="forget-password">
        Lost password?{" "}
        <Link to={"/confirm"}>
          {/* <a onClick={confirm} href="#" id="forgot"> */}
            <span>Click Here</span>
          {/* </a> */}
        </Link>
      </div>
      <div className="buttons">
        <div className="button">
          <Link to="/Page1">
            <button className="b1">Sign IN</button>
          </Link>
        </div>
        <div className="button">                    
            <button
              className="b2"
              onClick={handleSubmit}
            >
              Login
            </button>          
        </div>
      </div>
    </div>
  );
};

export default Login;
